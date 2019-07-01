const fs = require('fs-extra')
const path = require('path')
const locales = require(`./i18n-config.js`)
const { removeTrailingSlash } = require(`./src/utils/gatsby-node-helpers`)

exports.onPostBuild = () => {
    fs.copySync(
        path.join(__dirname, '/src/locales'),
        path.join(__dirname, '/public/locales'),
    )
}

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions

    // First delete the incoming page that was automatically created by Gatsby
    // So everything in src/pages/
    deletePage(page)

    // Grab the keys (e.g. 'en', 'de' etc) of languages and map over them
    Object.keys(locales).map(lang => {
        // Use the values defined in "locales" to construct the path
        const localizedPath = locales[lang].default
            ? page.path
            : `${locales[lang].path}${page.path}`

        return createPage({
            // Pass on everything from the original page
            ...page,
            // Since page.path returns with a trailing slash (e.g. "/de/")
            // We want to remove that
            path: removeTrailingSlash(localizedPath),
            // Pass in the locale as context to every page
            // This context also gets passed to the src/components/layout file
            // This should ensure that the locale is available on every page
            context: {
                ...page.context,
                locale: lang,
                dateFormat: locales[lang].dateFormat,
            },
        })
    })
}
