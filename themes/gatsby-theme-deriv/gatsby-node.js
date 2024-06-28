/* eslint-disable import/order */
const language_config = require(`./i18n-config.js`)
const language_config_en = require(`./i18n-config-en.js`)
const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const minify = require('html-minifier').minify
const fs = require('fs')

const translations_cache = {}

// Based upon https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n

const BuildPage = (page, actions, region) => {
    const { createRedirect, createPage } = actions
    const is_responsible_trading = /responsible/g.test(page.path)
    const is_contact_us = /contact-us/g.test(page.path)
    const is_careers = /careers/g.test(page.path)
    const is_p2p = /responsible/g.test(page.path)
    const who_we_are = /who-we-are/g.test(page.path)
    const is_cfds = /cfds/g.test(page.path)
    const is_options = /options/g.test(page.path)

    if (is_careers) {
        createRedirect({
            fromPath: `/careers/people-management`,
            toPath: `/careers/human-resources`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/careers/people-management/`,
            toPath: `/careers/human-resources/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/careers/besquare/`,
            toPath: `/careers/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/careers/besquare`,
            toPath: `/careers/`,
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
            fromPath: `/contact_us/`,
            toPath: `/contact-us/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/contact/`,
            toPath: `/contact-us/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/contact_us`,
            toPath: `/contact-us/`,
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
        createRedirect({
            fromPath: `/careers/people-management`,
            toPath: `/careers/human-resources`,
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
    if (is_options) {
        createRedirect({
            fromPath: `/trade-types/options/`,
            toPath: `/trade-types/options/digital-options/up-and-down/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
        createRedirect({
            fromPath: `/trade-types/options`,
            toPath: `/trade-types/options/digital-options/up-and-down/`,
            redirectInBrowser: true,
            isPermanent: true,
        })
    }

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
                region,
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
                fromPath: `/${lang}/contact_us/`,
                toPath: `/${lang}/contact-us/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/contact/`,
                toPath: `/${lang}/contact-us/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/contact_us`,
                toPath: `/${lang}/contact-us`,
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

        if (is_options) {
            createRedirect({
                fromPath: `/${lang}/trade-types/options/`,
                toPath: `/${lang}/trade-types/options/digital-options/up-and-down/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
            createRedirect({
                fromPath: `/${lang}/trade-types/options`,
                toPath: `/${lang}/trade-types/options/digital-options/up-and-down/`,
                redirectInBrowser: true,
                isPermanent: true,
            })
        }

        return current_page
    })
}
exports.onCreatePage = ({ page, actions }, options) => {
    const { deletePage } = actions
    const { region } = options
    const isProduction = process.env.GATSBY_ENV === 'production'
    const pagesToBuild = process.env.GATSBY_BUILD_PAGES
    if (pagesToBuild) {
        const pages_loaded = pagesToBuild.split(',')
        const allowed_pages = ['', pages_loaded]

        const pages = allowed_pages.reduce((result, Item) => {
            if (Array.isArray(Item)) {
                // Flatten the nested array and add the '/' prefix
                const nested_array = Item.map((subItem) => `/${subItem}/`)
                return result.concat(nested_array)
            } else {
                // Add the '/' prefix for the root item
                return result.concat(`/${Item}`)
            }
        }, [])

        console.log('pages', pages)

        deletePage(page)
        if (isProduction) {
            return BuildPage(page, actions, region)
        } else {
            if (pages.includes(page.path)) {
                return BuildPage(page, actions, region)
            }
        }
    } else {
        return BuildPage(page, actions, region)
    }
}

const style_lint_options = {
    files: 'src/**/*.js',
    emitErrors: false,
    lintDirtyModulesOnly: true,
}

exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }, { ...options }) => {
    const config = getConfig()
    const isProduction = config.mode === 'production'

    const splitChunks = {
        chunks: 'all',
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
                priority: -10,
            },
            bundle: {
                test: /\.(js|ts|tsx)$/,
                name: 'bundle',
                chunks: 'all',
                priority: -20,
                enforce: true,
            },
        },
    }

    actions.setWebpackConfig({
        devtool: isProduction ? false : 'inline-source-map', // enable/disable source-maps
        mode: isProduction ? 'production' : 'development',
        optimization: {
            minimize: isProduction,
            minimizer: [new TerserPlugin()],
            ...(isProduction && { splitChunks }),
            mangleExports: 'size',
            mangleWasmImports: true,

            mergeDuplicateChunks: true,
            removeAvailableModules: true,
            removeEmptyChunks: true,
            innerGraph: true,

            chunkIds: 'size',
            moduleIds: 'size',

            // runtimeChunk: 'single', // compilation fails
            sideEffects: true,

            concatenateModules: true,
            providedExports: true,
            usedExports: true,
        },
        plugins: [new StylelintPlugin({ ...style_lint_options, ...options })],
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
        ...(stage === 'build-html' || stage === 'develop-html'
            ? {
                  module: {
                      rules: [
                          {
                              test: /analytics/,
                              use: loaders.null(),
                          },
                      ],
                  },
              }
            : {}),
    })
}

const minificationOptions = {
    collapseWhitespace: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
}

exports.onPostBuild = (_, { buildDirPath }) => {
    return new Promise((resolve, reject) => {
        // do async work
        console.log('=== HMTL minification started ===')

        console.log('full path', buildDirPath)
        fs.readFile(buildDirPath, 'utf8', (err, inp) => {
            if (err) {
                reject()
                throw err
            }
            var result = minify(inp, minificationOptions)
            var reducedPercentage = (((inp.length - result.length) / inp.length) * 100).toFixed(2)
            console.log(`We have reduced index.html by ${reducedPercentage}%`)

            fs.writeFile(buildDirPath, result, (err2) => {
                if (err2) {
                    reject()
                    throw err
                }
                console.log('index.html has been saved!')
                resolve()
            })
        })
    })
}
