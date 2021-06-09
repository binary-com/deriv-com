const language_config = require(`./i18n-config.js`)

module.exports = {
    // pathPrefix: process.env.PATH_PREFIX || '/deriv-com/', // For non CNAME GH-pages deployment
    siteMetadata: {
        title: 'Deriv',
        description:
            'Deriv.com gives everyone an easy way to participate in the financial markets. Trade with as little as $1 USD on major currencies, stocks, indices, and commodities.',
        author: 'Deriv.com',
        siteUrl: 'https://deriv.com',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/common`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                exclude: [
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
                ],
                serialize: ({ site, allSitePage }) =>
                    allSitePage.edges.map((edge) => {
                        const ignore_localized_regex = /careers/;
                        const path = edge.node.path
                        let priority = 0.7
                        const languages = Object.keys(language_config)
                        if (path === '/') {
                            priority = 1.0
                        } else if (path.match(/dbot|dtrader|dmt5|about/)) {
                            priority = 1.0
                        } else {
                            languages.forEach((lang) => {
                                if (path === `/${lang}/`) {
                                    priority = 1.0
                                }
                            })
                        }

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
                        const ignore_localized = current_page.match(ignore_localized_regex);
                        const links = languages.map((locale) => {
                            if (locale !== 'ach' && locale) {
                                const replaced_locale = locale.replace('_', '-')
                                const is_default = locale === 'en' || locale === 'x-default'
                                const href_locale = (is_default) ? '' : `/${replaced_locale}`
                                const href = `${site.siteMetadata.siteUrl}${href_locale}${current_page}`
                                return { lang: replaced_locale, url: href }
                            }
                        })

                        return {
                            url: site.siteMetadata.siteUrl + edge.node.path,
                            changefreq: `monthly`,
                            priority,
                            links: !ignore_localized ? links : null,
                        }
                    }),
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
                background_color: '#0e0e0e',
                theme_color: '#ff444f',
                display: 'standalone',
                icon: './favicons/favicon-512x512.png',
                icons: [
                    {
                        src: `./favicons/favicon-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `./favicons/favicon-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
                gcm_sender_id: '370236002280',
                gcm_user_visible_only: true,
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
                extensions: ['js'],
                exclude: ['node_modules', '.cache', 'public'],
            },
        },
        {
            resolve: 'gatsby-plugin-stylelint',
            options: {
                emitErrors: false,
                files: ['src/**/*.js'],
                lintDirtyModulesOnly: true,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [
                    {
                        userAgent: '*',
                        allow: '/',
                        disallow: ['/404/', '/homepage/', '/landing/', '/endpoint/'],
                    },
                ],
            },
        },
        'gatsby-plugin-anchor-links',
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#85ACB0`,
                showSpinner: false,
                minimum: 0.4,
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-NF7884S',
                includeInDevelopment: false,
            },
        },
        'gatsby-plugin-remove-serviceworker',
        {
            resolve: 'gatsby-plugin-anchor-links',
            options: {
                offset: -100,
            },
        },
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
            options: {
                production: true,
                disable: !process.env.ANALYZE_BUNDLE_SIZE,
                generateStatsFile: true,
                analyzerMode: 'static',
            },
        },
    ],
}
