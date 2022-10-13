const path = require('path')

module.exports = {
    // You will want to change this to wherever your Stories will live
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config) => {
        // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
        config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
        // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
        config.module.rules[0].use[0].options.plugins.push(
            require.resolve('babel-plugin-remove-graphql-queries'),
        )
        config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules']

        return config
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
}
