const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            // alias: {
            //     common: path.resolve(__dirname, 'src/common'),
            //     components: path.resolve(__dirname, 'src/components'),
            //     images: path.resolve(__dirname, 'src/images'),
            //     pages: path.resolve(__dirname, 'src/pages'),
            //     themes: path.resolve(__dirname, 'src/themes'),
            // },
        },
    })
}
