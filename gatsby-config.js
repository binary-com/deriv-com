require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})
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
                ],
                serialize: ({ site, allSitePage }) =>
                    allSitePage.edges.map((edge) => {
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
                        const links = languages.map((locale) => {
                            if (locale !== 'ach' && locale) {
                                const replaced_locale = locale.replace('_', '-')

                                const is_default = locale === 'en' || locale === 'x-default'
                                const href_locale = is_default ? '' : `/${replaced_locale}`
                                const href = `${site.siteMetadata.siteUrl}${href_locale}${current_page}`

                                return { lang: replaced_locale, url: href }
                            }
                        })

                        return {
                            url: site.siteMetadata.siteUrl + edge.node.path,
                            changefreq: `monthly`,
                            priority,
                            links,
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
                        disallow: ['/404/', '/homepage/', '/landing/'],
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
        {
            resolve: 'gatsby-source-prismic',
            options: {
                // The name of your prismic.io repository. This is required.
                // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
                // is 'gatsby-source-prismic-test-site.prismic.io'.
                repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,

                // An API access token to your prismic.io repository. This is optional.
                // You can generate an access token in the "API & Security" section of
                // your repository settings. Setting a "Callback URL" is not necessary.
                // The token will be listed under "Permanent access tokens".
                accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,

                // If you provide a release ID, the plugin will fetch data from Prismic
                // for a specific release. A Prismic release is a way to gather a
                // collection of changes for a future version of your website. Note that
                // if you add changes to a release, you'll need to rebuild your website
                // to see them.
                // See: https://user-guides.prismic.io/en/collections/22653-releases-scheduling#the-basics-of-a-release
                // releaseID: 'example-eiyaingiefahyi7z',

                // Set a link resolver function used to process links in your content.
                // Fields with rich text formatting or links to internal content use this
                // function to generate the correct link URL.
                // The document node, field key (i.e. API ID), and field value are
                // provided to the function, as seen below. This allows you to use
                // different link resolver logic for each field if necessary.
                // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
                // linkResolver: ({ node, key, value }) => (doc) => {
                // Your link resolver
                // },

                // Set a list of links to fetch and be made available in your link
                // resolver function.
                // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
                // fetchLinks: [
                // Your list of links
                // ],

                // Set an HTML serializer function used to process formatted content.
                // Fields with rich text formatting use this function to generate the
                // correct HTML.
                // The document node, field key (i.e. API ID), and field value are
                // provided to the function, as seen below. This allows you to use
                // different HTML serializer logic for each field if necessary.
                // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
                // htmlSerializer: ({ node, key, value }) => (type, element, content, children) => {
                // Your HTML serializer
                // },

                // Provide an object of Prismic custom type JSON schemas to load into
                // Gatsby. This is required.
                schemas: {
                    blog_post: require('./src/schemas/blog_post.json'),
                },

                // Set a default language when fetching documents. The default value is
                // '*' which will fetch all languages.
                // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
                lang: '*',

                // Add the Prismic Toolbar script to the site. Defaults to false.
                // Set to "legacy" if your repository requires the older toolbar script.
                // See: https://prismic.io/docs/rest-api/beyond-the-api/the-preview-feature
                prismicToolbar: true,

                // Set a function to determine if images are downloaded locally and made
                // available for gatsby-transformer-sharp for use with gatsby-image.
                // The document node, field key (i.e. API ID), and field value are
                // provided to the function, as seen below. This allows you to use
                // different logic for each field if necessary.
                // This defaults to always return false.
                // shouldDownloadImage: ({ node, key, value }) => {
                // Return true to download the image or false to skip.
                // },

                // Provide a default set of Imgix image transformations applied to
                // Imgix-backed gatsby-image fields. These options will override the
                // defaults set by Prismic.
                // See: https://docs.imgix.com/apis/url
                // imageImgixParams: {
                //     auto: 'compress,format',
                //     fit: 'max',
                //     q: 50,
                // },

                // Provide a default set of Imgix image transformations applied to
                // the placeholder images of Imgix-backed gatsby-image fields. These
                // parameters will be applied over those provided in the above
                // `imageImgixParams` option.
                // See: https://docs.imgix.com/apis/url
                // imagePlaceholderImgixParams: {
                //     w: 100,
                //     blur: 15,
                //     q: 50,
                // },

                // Set the prefix for the filename where type paths for your schemas are
                // stored. The filename will include the MD5 hash of your schemas after
                // the prefix.
                // This defaults to 'prismic-typepaths---${repositoryName}'.
                // typePathsFilenamePrefix: 'prismic-typepaths---gatsby-source-prismic-test-site',
            },
        },
    ],
}
