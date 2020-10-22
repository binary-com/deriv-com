const language_config = require(`./i18n-config.js`)
const path = require('path')

const translations_cache = {}
// Based upon https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n
exports.onCreatePage = ({ page, actions }) => {
    const { createRedirect, createPage, deletePage } = actions

    // First delete the incoming page that was automatically created by Gatsby
    // So everything in src/pages/
    deletePage(page)

    Object.keys(language_config).map((lang) => {
        // Use the values defined in "locales" to construct the path
        const { path, is_default } = language_config[lang]
        const localized_path = is_default ? page.path : `${path}${page.path}`
        const is_production = process.env.GATSBY_ENV === 'production'
        const careers_regex = /^[a-z-]+\/careers\//g
        // TODO: this is a temporary workaround to remove a/b testing page
        const homepage_regex = /homepage/g
        // TODO: this is a temporary workaround to remove a/b testing page
        const amp_regex = /amp/g

        if (is_production) {
            if (path === 'ach') return
        }
        if (
            careers_regex.test(localized_path) ||
            homepage_regex.test(localized_path) ||
            amp_regex.test(localized_path)
        )
            return

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
            createRedirect({ fromPath: en_path, toPath: localized_path, redirectInBrowser: true, isPermanent: true})
            createRedirect({ fromPath: `${en_path}/`, toPath: localized_path, redirectInBrowser: true, isPermanent: true})
        }

        return current_page
    })
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
    const config = getConfig()
    if (config.optimization) config.optimization.minimizer[0].options.parallel = 2
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    })
}