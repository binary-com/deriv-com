const language_config = require(`./i18n-config.js`)
const plugin = require('./src/features/styles/postcss-plugin/plugin')
const isBrowser = typeof window !== 'undefined'

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

const origin = isBrowser && window.location.origin
const href = isBrowser && window.location.href
const site_url =
    origin === 'https://deriv.com' || origin === 'https://eu.deriv.com' ? href : 'https://deriv.com'

module.exports = {
    // pathPrefix: process.env.PATH_PREFIX || '/deriv-com/', // For non CNAME GH-pages deployment
    flags: {
        FAST_DEV: true,
        DEV_SSR: false,
    },
    siteMetadata: {
        title: 'Deriv',
        description:
            'Deriv.com gives everyone an easy way to participate in the financial markets. Trade with as little as $1 USD on major currencies, stocks, indices, and commodities.',
        author: 'Deriv.com',
        siteUrl: site_url,
    },
    partytownProxiedURLs: [
        `https://assets.customer.io/assets/track-eu.js`,
        `https://assets.customer.io/assets/track.js`,
        `https://static.deriv.com/scripts/cookie.js`,
        `https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js`,
    ],
    plugins: [
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                postCssPlugins: [
                    require('postcss-discard-duplicates'),
                    plugin({
                        dest: 'src/classnames.d.ts',
                        // Set isModule if you want to import ClassNames from another file
                        // isModule: true,
                        exportAsDefault: true, // to use in combination with isModule
                    }),
                    require('cssnano')({
                        preset: 'default',
                    }),
                ],
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
                siteUrl: `${site_url}`,
                noQueryString: true,
            },
        },
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/common`,
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                failOnError: true,
                base64Width: 20,
                stripMetadata: true,
                defaultQuality: 50,
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                excludes: [
                    '/404',
                    '/**/404.html',
                    '/**/404',
                    '/check-email',
                    '/**/check-email',
                    '/reset-password',
                    '/**/reset-password',
                    '/ach',
                    '/ach/**',
                    '/amp',
                    '/amp/**',
                    '/**/amp',
                    '/**/amp/**',
                    '/interim',
                    '/interim/**',
                    '/**/interim',
                    '/**/interim/**',
                    '/homepage',
                    '/homepage/**',
                    '/**/homepage',
                    '/**/homepage/**',
                    '/offline-plugin-app-shell-fallback',
                    '/**/offline-plugin-app-shell-fallback',
                    '/landing',
                    '/landing/**',
                    '/**/landing',
                    '/**/landing/**',
                    '/endpoint',
                    '/**/endpoint',
                    '/signup-success',
                    '/**/signup-success',
                ],
                query: `
                {
                    allSitePage {
                      nodes {
                        path
                      }
                    }
                }
                `,
                resolveSiteUrl: () => (isBrowser && window.location.hostname) || site_url,
                resolvePages: ({ allSitePage: { nodes: allPages } }) => {
                    return allPages.map((page) => {
                        return { ...page }
                    })
                },
                serialize: ({ path }) => {
                    const ignore_localized_regex = /careers|besquare|livechat|academy/
                    const languages = Object.keys(language_config)

                    const path_array = path.split('/')
                    const current_lang = path_array[1]
                    const check_lang = current_lang.replace('-', '_')
                    let current_page = path

                    if (languages.includes(check_lang)) {
                        path_array.splice(1, 1)
                        current_page = path_array.join('/')
                    }

                    languages.push('x-default')
                    languages.splice(languages.indexOf('ach'), 1)
                    const ignore_localized = current_page.match(ignore_localized_regex)
                    const links = languages
                        .filter((l) => l !== 'ach' && l)
                        .map((locale) => {
                            const replaced_locale = locale.replace('_', '-')
                            const is_default = ['en', 'x-default'].includes(locale)
                            const href_locale = is_default ? '' : `/${replaced_locale}`
                            const href = `${site_url}${href_locale}${current_page}`
                            return { lang: replaced_locale, url: href }
                        })

                    return {
                        url: path,
                        links: !ignore_localized ? links : null,
                    }
                },
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Deriv',
                short_name: 'Deriv',
                description:
                    'Deriv gives everyone an easy way to participate in the financial markets. Trade with as little as $1 USD on major currencies, stocks, indices, and commodities.',
                start_url: '/',
                background_color: '#000000',
                theme_color: '#000000',
                display: 'standalone',
                icon: './favicons/favicon-512x512.png',
                icons: [
                    {
                        src: `favicons/favicon-48x48.png`,
                        sizes: `48x48`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `favicons/favicon-72x72.png`,
                        sizes: `72x72`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `favicons/favicon-96x96.png`,
                        sizes: `96x96`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `favicons/favicon-144x144.png`,
                        sizes: `144x144`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `favicons/favicon-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `favicons/favicon-256x256.png`,
                        sizes: `256x256`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `favicons/favicon-384x384.png`,
                        sizes: `384x384`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `favicons/favicon-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                    {
                        src: `icons/icon-48x48.png`,
                        sizes: `48x48`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `icons/icon-72x72.png`,
                        sizes: `72x72`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `icons/icon-96x96.png`,
                        sizes: `96x96`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `icons/icon-144x144.png`,
                        sizes: `144x144`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `icons/icon-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `icons/icon-256x256.png`,
                        sizes: `256x256`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `icons/icon-384x384.png`,
                        sizes: `384x384`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `icons/icon-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
                gcm_sender_id: '370236002280',
                gcm_user_visible_only: true,
                crossOrigin: `use-credentials`,
                // TODO: add translations and support for language routes e.g:
                // localize: [
                //     {
                //       start_url: '/de/',
                //       lang: 'de',
                //       name: 'Die coole Anwendung',
                //       short_name: 'Coole Anwendung',
                //       description: 'Die Anwendung macht coole Dinge und macht Ihr Leben besser.',
                //     },
                //   ],
            },
        },
        {
            resolve: 'gatsby-plugin-svgr',
            options: {
                rule: {
                    include: /svg/, // See below to configure properly
                },
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                stages: ['develop'],
                extensions: ['js', 'ts', 'jsx', 'tsx'],
                exclude: ['node_modules', '.cache', 'public'],
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [
                    {
                        userAgent: '*',
                        allow: '/',
                        disallow: [
                            '/404/',
                            '/homepage/',
                            '/landing/',
                            '/endpoint/',
                            '/livechat/',
                            '/storybook/',
                        ],
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-NF7884S',
                includeInDevelopment: false,
            },
        },
        {
            resolve: 'gatsby-plugin-anchor-links',
            options: {
                offset: -100,
                duration: 0,
            },
        },
        'gatsby-plugin-use-query-params',
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
            options: {
                analyzerMode: 'disabled',
                generateStatsFile: process.env.GENERATE_JSON_STATS === 'true',
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/`],
                workboxConfig: {
                    runtimeCaching: [
                        {
                            urlPattern: /\.(png|jpe?g|svg|gif|webp|ico|woff2?|ttf|otf|css|scss)$/,
                            handler: `StaleWhileRevalidate`,
                        },
                        {
                            urlPattern: /^.*$/,
                            handler: `StaleWhileRevalidate`,
                        },
                    ],
                },
            },
        },
    ],
}
