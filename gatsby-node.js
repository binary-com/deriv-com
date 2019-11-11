const language_config = require(`./i18n-config.js`)
const path = require('path')

// Based upon https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n
exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions

    // First delete the incoming page that was automatically created by Gatsby
    // So everything in src/pages/
    deletePage(page)

    // Checking env variables
    // eslint-disable-next-line no-console
    console.log(process.env.GATSBY_ENV)

    Object.keys(language_config).map(lang => {
        // Use the values defined in "locales" to construct the path
        const { path, is_default } = language_config[lang]
        const localized_path = is_default ? page.path : `${path}${page.path}`
        const is_production = process.env.GATSBY_ENV === 'production'

        if (is_production) {
            if (path === 'ach') return
        }

        return createPage({
            // Pass on everything from the original page
            ...page,
            // Remove trailing slash from page.path (e.g. "/de/")
            path: localized_path,
            // Pass in the locale as context to every page
            context: {
                ...page.context,
                locale: lang,
            },
        })
    })
}

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    })
}
