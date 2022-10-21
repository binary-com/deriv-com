/**
 * This file helps jest to transform ts,tsx,js and jsx files
 * It is used in jest.config.js
 */

 const babelOptions = {
    presets: [
        'babel-preset-gatsby',
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
}

module.exports = require('babel-jest').default.createTransformer(babelOptions)
