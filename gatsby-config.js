module.exports = {
    pathPrefix: process.env.PATH_PREFIX || '/deriv-com/', // For non CNAME GH-pages deployment
    siteMetadata: {
        title: 'Deriv.com',
        description:
            'Deriv.com gives everyone an easy way to participate in the financial markets. Trade with as little as $1 USD on major currencies, stocks, indices, and commodities.',
        author: 'Deriv.com',
        siteUrl: 'https://www.deriv.com',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-remove-serviceworker',
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
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svg/, // See below to configure properly
                },
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ['develop'],
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
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
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-NF7884S',
                includeInDevelopment: false,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        {
            resolve: 'gatsby-plugin-csp',
            options: {
                disableOnDev: true,
                reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
                mergeScriptHashes: true, // you can disable scripts sha256 hashes
                mergeStyleHashes: true, // you can disable styles sha256 hashes
                mergeDefaultDirectives: true,
                directives: {
                    'script-src':
                        "'self' 'unsafe-inline' www.google-analytics.com d33wubrfki0l68.cloudfront.net cdn.trackjs.com www.googletagmanager.com cdn.crowdin.com",
                    'style-src': "'self' 'unsafe-inline' cdn.crowdin.com ",
                    'img-src': "'self' data: www.google-analytics.com",
                    // you can add your directives or override defaults
                },
            },
        },
    ],
}
