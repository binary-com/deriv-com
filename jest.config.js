const { defaults } = require('jest-config')
module.exports = {
    transform: {
        '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
        '^.+\\.svg$': '<rootDir>/svgTransform.js',
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
        '^components/(.*)$': '<rootDir>/src/components/$1',
        '^themes/(.*)$': '<rootDir>/src/themes/$1',
        '^common/(.*)$': '<rootDir>/src/common/$1',
        '^images/(.*)$': '<rootDir>/src/images/$1',
        '^store': '<rootDir>/src/store/index.tsx',
        '^gatsby-page-utils/(.*)$': `gatsby-page-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
        '^gatsby-core-utils/(.*)$': `gatsby-core-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
        '^gatsby-plugin-utils/(.*)$': [`gatsby-plugin-utils/dist/$1`, `gatsby-plugin-utils/$1`], // Workaround for https://github.com/facebook/jest/issues/9771
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/loadershim.js`],
    testEnvironment: 'jsdom',
}
