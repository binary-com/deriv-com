module.exports = {
    pathPrefix: process.env.PATH_PREFIX || '/deriv-com/', // For non CNAME GH-pages deployment
    siteMetadata: {
        title: 'Deriv.com',
        description:
            'Deriv.com gives everyone an easy way to participate in the financial markets. Trade with as little as $1 USD on major currencies, stocks, indices, and commodities.',
        author: 'Deriv.com',
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
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: `src/images/common/logo.png`,
                icons: [
                    {
                        src: `/favicons/favicon-192x192.png`,
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: `/favicons/favicon-160x160.png`,
                        sizes: '160x160',
                        type: 'image/png',
                    },
                    {
                        src: `/favicons/favicon-96x96.png`,
                        sizes: '96x96',
                        type: 'image/png',
                    },
                    {
                        src: `/favicons/favicon-32x32.png`,
                        sizes: '32x32',
                        type: 'image/png',
                    },
                    {
                        src: `/favicons/favicon-16x16.png`,
                        sizes: '16x16',
                        type: 'image/png',
                    },
                ],
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
            resolve: 'gatsby-plugin-stylelint',
            options: {
                emitErrors: false,
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
            resolve: `gatsby-plugin-portal`,
            options: {
                key: 'modal',
                id: 'modal',
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // 'gatsby-plugin-offline',
    ],
}
