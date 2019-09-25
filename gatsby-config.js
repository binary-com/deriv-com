module.exports = {
    // pathPrefix: process.env.PATH_PREFIX || '/deriv-com/', // For non CNAME GH-pages deployment
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
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                exclude: [
                    '/404',
                    '/*/404',
                    '/404.html',
                    '/*/404.html',
                    '/check-email',
                    '/*/check-email',
                ],
            },
        },
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
    ],
}
