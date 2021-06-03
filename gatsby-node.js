const language_config = require(`./i18n-config.js`)
const path = require('path')

const translations_cache = {}
// Based upon https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n
exports.onCreatePage = ({ page, actions }) => {
    const { createRedirect, createPage, deletePage } = actions

    // First delete the incoming page that was automatically created by Gatsby
    // So everything in src/pages/
    deletePage(page)
    const is_deriv_x = /derivx/g.test(page.path)
    const is_responsible_trading = /responsible/g.test(page.path)
    const is_contact_us = /contact_us/g.test(page.path)
    const is_p2p = /responsible/g.test(page.path)
    const is_story = /story/g.test(page.path)
    const is_market = /markets/g.test(page.path)

    if (is_responsible_trading) {
        createRedirect({
            fromPath: `/responsible-trading/`,
            toPath: `/responsible/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/responsible-trading`,
            toPath: `/responsible`,
            redirectInBrowser: true,
            isPermanent: true,
        })
    }

    if (is_contact_us) {
        createRedirect({
            fromPath: `/contact-us/`,
            toPath: `/contact_us/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/contact/`,
            toPath: `/contact_us/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/contact-us`,
            toPath: `/contact_us`,
            redirectInBrowser: true,
            isPermanent: true,
        })
    }

    if (is_p2p) {
        createRedirect({
            fromPath: `/p2p/v1`,
            toPath: `/p2p`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/p2p/v2`,
            toPath: `/p2p`,
            redirectInBrowser: true,
            isPermanent: true,
        })
    }

    if (is_story) {
        createRedirect({
            fromPath: `/about/`,
            toPath: `/story/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/about`,
            toPath: `/story/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
    }

    if (is_market) {
        createRedirect({
            fromPath: `/markets/`,
            toPath: `/markets/forex/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/markets`,
            toPath: `/markets/forex/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
    }

    if (is_deriv_x) {
        createRedirect({
            fromPath: `/derivx/`,
            toPath: `/`,
            redirectInBrowser: true,
        })
        createRedirect({
            fromPath: `/derivx`,
            toPath: `/`,
            redirectInBrowser: true,
        })
    }

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
        const offline_plugin_regex = /^[a-z-]+\/offline-plugin-app-shell-fallback/g

        if (is_production) {
            if (path === 'ach') return
        }
        if (
            careers_regex.test(localized_path) ||
            homepage_regex.test(localized_path) ||
            amp_regex.test(localized_path) ||
            offline_plugin_regex.test(localized_path)
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

        if (is_responsible_trading) {
            createRedirect({
                fromPath: `/${lang}/responsible-trading/`,
                toPath: `/${lang}/responsible/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/responsible-trading`,
                toPath: `/${lang}/responsible`,
                redirectInBrowser: true,
                isPermanent: true,
            })
        }

        if (is_contact_us) {
            createRedirect({
                fromPath: `/${lang}/contact-us/`,
                toPath: `/${lang}/contact_us/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/contact/`,
                toPath: `/${lang}/contact_us/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/contact-us`,
                toPath: `/${lang}/contact_us`,
                redirectInBrowser: true,
                isPermanent: true,
            })
        }

        if (is_p2p) {
            createRedirect({
                fromPath: `/${lang}/p2p/v1`,
                toPath: `/${lang}/p2p`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/p2p/v2`,
                toPath: `/${lang}/p2p`,
                redirectInBrowser: true,
                isPermanent: true,
            })
        }

        if (is_story) {
            createRedirect({
                fromPath: `/${lang}/about/`,
                toPath: `/${lang}/story/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/about`,
                toPath: `/${lang}/story/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
        }

        if (is_market) {
            createRedirect({
                fromPath: `/${lang}/markets/`,
                toPath: `/${lang}/markets/forex/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/markets`,
                toPath: `/${lang}/markets/forex/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
        }

        if (is_deriv_x) {
            createRedirect({
                fromPath: `/${lang}/derivx/`,
                toPath: `/${lang}/`,
                redirectInBrowser: true,
            })
            createRedirect({
                fromPath: `/${lang}/derivx`,
                toPath: `/${lang}`,
                redirectInBrowser: true,
            })
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
