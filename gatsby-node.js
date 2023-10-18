/* eslint-disable import/order */
const language_config = require(`./i18n-config.js`)
const language_config_en = require(`./i18n-config-en.js`)
const path = require('path')
// Non-Translated routes redirection are done here in "redirects.json"
const redirects = require('./redirects.json')
const redirectslanguage = require('./languages-redirects.json')

const translations_cache = {}
// Based upon https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n
exports.onCreatePage = ({ page, actions }) => {
    const { createRedirect, createPage, deletePage } = actions
    redirects.forEach((redirect) => {
        createRedirect({
            fromPath: redirect.fromPath,
            toPath: redirect.toPath,
            isPermanent: redirect.status === 301 ? true : false,
            redirectInBrowser: true,
        })
    })
    // First delete the incoming page that was automatically created by Gatsby
    // So everything in src/pages/
    deletePage(page)
    // const is_responsible_trading = /responsible/g.test(page.path)
    // const is_contact_us = /contact_us/g.test(page.path)
    // const is_p2p = /p2p/g.test(page.path)
    // const who_we_are = /who-we-are/g.test(page.path)
    // const is_cfds = /cfds/g.test(page.path)
    // const is_deriv_ez = /deriv-ez/g.test(page.path)
    // const is_options = /options/g.test(page.path)

    const is_english = process.env.GATSBY_LANGUAGE === 'en'

    Object.keys(is_english ? language_config_en : language_config).map((lang) => {
        // Use the values defined in "locales" to construct the path
        const { path, is_default } = language_config[lang]
        const localized_path = is_default ? page.path : `${path}${page.path}`
        const is_production = process.env.GATSBY_ENV === 'production'
        const excluded_pages_regex =
            /^[a-z-]+\/(careers|endpoint|offline-plugin-app-shell-fallback|besquare|livechat|academy)\//g

        if (is_production) {
            if (path === 'ach') return
        }
        if (localized_path.match(excluded_pages_regex)) return

        if (!translations_cache[lang]) {
            const translation_json = require(`./src/translations/${lang}`)
            translations_cache[lang] = translation_json
        }

        const current_page = createPage({
            // Pass on everything from the original page
            ...page,
            // Remove trailing slash from page.path (e.g. "/de/")
            path: localized_path,
            // Pass in the locale as context to every page
            context: {
                ...page.context,
                locale: lang,
                localeResources: translations_cache[lang],
                pathname: localized_path,
            },
        })

        if (is_default) {
            const en_path = `/en${localized_path.slice(0, -1)}`
            createRedirect({
                fromPath: en_path,
                toPath: localized_path,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `${en_path}/`,
                toPath: localized_path,
                redirectInBrowser: true,
                isPermanent: true,
            })
        }

        redirectslanguage.forEach((redirectslanguage) => {
            createRedirect({
                fromPath: `${lang}${redirectslanguage.fromPath}`,
                toPath:`${lang}${redirectslanguage.toPath}`,
                isPermanent: redirectslanguage.status === 301 ? true : false,
                redirectInBrowser: true,
            })
            // console.log('redirectslanguage', `${lang}${redirectslanguage.fromPath}`,`${lang}${redirectslanguage.toPath}`)
        })
        
        return current_page
    })
}

const StylelintPlugin = require('stylelint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const style_lint_options = {
    files: 'src/**/*.js',
    emitErrors: false,
    lintDirtyModulesOnly: true,
}

exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }, { ...options }) => {
    const config = getConfig()
    if (config.optimization) {
        config.optimization.minimizer = [new TerserPlugin()]
    }
    if (stage === 'build-html' || stage === 'develop-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /analytics/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
    actions.setWebpackConfig({
        plugins: [new StylelintPlugin({ ...style_lint_options, ...options })],
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    })
}
