/* eslint-disable import/order */
const language_config = require(`./i18n-config.js`)
const path = require('path')
const redirects = require('./redirects.json')

const translations_cache = {}
exports.createPages = ({ actions }) => {
    const { createRedirect } = actions

    redirects.forEach((redirect) => {
        createRedirect({
            fromPath: redirect.fromPath,
            toPath: redirect.toPath,
            isPermanent: true,
            redirectInBrowser: true,
        })
    })
}

// Based upon https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n
exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions
    Object.keys(language_config).map((lang) => {
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
