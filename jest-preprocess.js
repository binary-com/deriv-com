const babelOptions = {
    presets: [
        'babel-preset-gatsby',
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
}

module.exports = require('babel-jest').default.createTransformer(babelOptions)
