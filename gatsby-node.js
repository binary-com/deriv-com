const locales = require(`./i18n-config.js`)

const removeTrailingSlash = path =>
    path === `/` ? path : path.replace(/\/$/, ``)

// Based upon https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n
exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions

    // First delete the incoming page that was automatically created by Gatsby
    // So everything in src/pages/
    deletePage(page)

    // map over language keys (e.g. 'en', 'de')
    Object.keys(locales).map(lang => {
        // Use the values defined in "locales" to construct the path
        const localized_path = locales[lang].default
            ? page.path
            : `${locales[lang].path}${page.path}`

        return createPage({
            // Pass on everything from the original page
            ...page,
            // Remove trailing slash from page.path (e.g. "/de/")
            path: removeTrailingSlash(localized_path),
            // Pass in the locale as context to every page
            context: {
                ...page.context,
                locale: lang,
            },
        })
    })
}
