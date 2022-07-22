/* eslint-disable import/order */
const language_config = require(`./i18n-config.js`)
const path = require('path')

const translations_cache = {}
// Based upon https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n
exports.onCreatePage = ({ page, actions }) => {
    const { createRedirect, createPage, deletePage } = actions

    // First delete the incoming page that was automatically created by Gatsby
    // So everything in src/pages/
    deletePage(page)
    const is_responsible_trading = /responsible/g.test(page.path)
    const is_contact_us = /contact_us/g.test(page.path)
    const is_p2p = /responsible/g.test(page.path)
    const who_we_are = /who-we-are/g.test(page.path)
    const is_cfds = /cfds/g.test(page.path)

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

    if (who_we_are) {
        createRedirect({
            fromPath: `/about/`,
            toPath: `/who-we-are/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/about`,
            toPath: `/who-we-are/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/story/`,
            toPath: `/who-we-are/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/story`,
            toPath: `/who-we-are/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/leadership/`,
            toPath: `/who-we-are/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/leadership`,
            toPath: `/who-we-are/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
    }

    if (is_cfds) {
        createRedirect({
            fromPath: `/trade-types/margin/`,
            toPath: `/trade-types/cfds/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/trade-types/margin`,
            toPath: `/trade-types/cfds/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
    }

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

        if (who_we_are) {
            createRedirect({
                fromPath: `/${lang}/about/`,
                toPath: `/${lang}/who-we-are/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/about`,
                toPath: `/${lang}/who-we-are/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/story/`,
                toPath: `/${lang}/who-we-are/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/story`,
                toPath: `/${lang}/who-we-are/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/leadership/`,
                toPath: `/${lang}/who-we-are/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/leadership`,
                toPath: `/${lang}/who-we-are/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
        }

        if (is_cfds) {
            createRedirect({
                fromPath: `/${lang}/trade-types/margin/`,
                toPath: `/${lang}/trade-types/cfds/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/trade-types/margin`,
                toPath: `/${lang}/trade-types/cfds/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
        }

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

exports.onCreateWebpackConfig = ({ actions, getConfig }, { ...options }) => {
    const config = getConfig()
    if (config.optimization) {
        config.optimization.minimizer = [new TerserPlugin()]
    }
    actions.setWebpackConfig({
        plugins: [new StylelintPlugin({ ...style_lint_options, ...options })],
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    })
}

// TODO: To be updated to the new shape of the API of the new endpoint
exports.createPages = async ({ reporter, actions, graphql }) => {
    const { createPage } = actions
    const articleTemplate = path.resolve(__dirname, 'src/templates/article.tsx')
    const videoTemplate = path.resolve(__dirname, 'src/templates/video.tsx')

    // Query our published articles
    const result = await graphql(`
        query MyQuery {
            directus {
                blog(filter: { status: { _eq: "published" } }, limit: -1) {
                    id
                    slug
                }
                videos(filter: { status: { _eq: "published" } }) {
                    video_slug
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panic(result.errors)
    }
    const blog = result.data.directus.blog
    blog.forEach((blog_post) => {
        createPage({
            path: `/academy/blog/posts/${blog_post.slug}/`,
            component: articleTemplate,
            context: {
                locale: 'en',
                pathname: `/academy/blog/posts/${blog_post.slug}/`,
                slug: blog_post.slug,
            },
        })
    })
    const videos = result.data.directus.videos
    videos.forEach((video) => {
        createPage({
            path: `/academy/videos/${video.video_slug}/`,
            component: videoTemplate,
            context: {
                locale: 'en',
                pathname: `/academy/videos/${video.video_slug}/`,
                slug: video.video_slug,
            },
        })
    })
}
