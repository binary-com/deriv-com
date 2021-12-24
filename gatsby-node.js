/* eslint-disable import/order */
const language_config = require(`./i18n-config.js`)
const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const Vimeo = require('vimeo').Vimeo

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
    const is_story = /story/g.test(page.path)
    const is_market = /markets/g.test(page.path)
    const is_cfds = /cfds/g.test(page.path)
    const is_landing_ebooks = /landing\/ebooks/g.test(page.path)

    if (is_landing_ebooks) {
        createRedirect({
            fromPath: `/landing/ebooks/`,
            toPath: `/404/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/landing/ebooks`,
            toPath: `/404`,
            redirectInBrowser: true,
            isPermanent: true,
        })
    }

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
        if (is_landing_ebooks) {
            createRedirect({
                fromPath: `/${lang}/landing/ebooks/`,
                toPath: `/${lang}/404/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/landing/ebooks`,
                toPath: `/${lang}/404`,
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
    const articleTemplate = path.resolve(__dirname, 'src/templates/article.js')

    // Query our published articles
    const result = await graphql(`
        query MyQuery {
            directus {
                blog(filter: { status: { _eq: "published" } }) {
                    id
                    slug
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
}

// Create nodes for the videos from Vimeo
let hasVideoFiles = false

exports.sourceNodes = async (
    { actions: { createNode, createNodeField, touchNode }, store, cache, createNodeId },
    pluginOptions,
) => {
    // const options = { ...defaultOptions, ...pluginOptions }
    // const { clientId, clientSecret, accessToken } = options

    const clientId = process.env.VIMEO_CLIENT_ID
    const clientSecret = process.env.VIMEO_CLIENT_SECRET
    const accessToken = process.env.VIMEO_ACCESS_TOKEN

    const client = new Vimeo(clientId, clientSecret, accessToken)
    const videos = await new Promise((resolve, reject) => {
        client.request(
            {
                method: 'GET',
                path: '/me/videos?per_page=100', // /me/videos/{id}
            },
            (error, body, status_code, headers) => {
                if (error) reject(error)
                resolve(body.data)
            },
        )
    })

    const videoFiles = videos && videos.filter((video) => video.files)
    hasVideoFiles = videoFiles.length !== 0

    if (!hasVideoFiles) {
        console.info(
            'Can\'t access video files through Vimeo API on this account. Won\'t create "VimeoSrcset" fragment.',
        )
        console.info(
            'Please make sure that you\'re on a Pro plan and that "private" and "video_files" are in the scope of your token.',
        )
    }

    videos &&
        videos.map((video) => {
            const nodeData = {
                srcset: hasVideoFiles ? video.files : false,
                name: video.name,
                width: video.width,
                height: video.height,
                aspectRatio: video.width / video.height,
                description: video.description,
                pictures: video.pictures,
                user: video.user,
                link: video.link,
                duration: video.duration,
            }
            createNode({
                // Data for the node.
                ...nodeData,

                // Required fields.
                id: video.uri.split('/')[2],
                parent: '__SOURCE__', // or null if it's a source node without a parent
                children: [],
                internal: {
                    type: `Vimeo`,
                    contentDigest: crypto
                        .createHash(`md5`)
                        .update(JSON.stringify(nodeData))
                        .digest(`hex`),
                },
            })
        })
}

exports.onPreExtractQueries = async ({ store, getNodesByType }) => {
    if (hasVideoFiles) {
        const program = store.getState().program

        // Check if there are any Vimeo nodes. If so add fragments for Vimeo.
        // The fragment will cause an error if there are no Vimeo nodes.
        if (getNodesByType(`Vimeo`).length == 0) {
            return
        }

        // We have Vimeo nodes so let's add our fragments to .cache/fragments.
        await fs.copyFile(
            require.resolve(`${__dirname}/src/components/graphql/vimeo-fragments.js`),
            `${program.directory}/.cache/fragments/vimeo-fragments.js`,
            (err) => {
                if (err) throw err
            },
        )
    }
}
