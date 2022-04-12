const { defaults } = require('jest-config')
module.exports = {
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: 'http://localhost:8000',
    collectCoverage: false,
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
    coverageReporters: ['lcov'],
    coverageDirectory: './coverage/',
    testMatch: ['<rootDir>/src/**/__tests__/**/?(*.)+(spec).[jt]s?(x)'],
    testURL: `http://localhost`,
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
        '^.+\\.svg$': '<rootDir>/svgTransform.js',
    },
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
        '^common/(.*)$': '<rootDir>/src/common/$1',
        '^components/(.*)$': '<rootDir>/src/components/$1',
        '^images/(.*)$': '<rootDir>/src/images/$1',
        '^lotties/(.*)$': '<rootDir>/src/lotties/$1',
        '^pages/(.*)$': '<rootDir>/src/pages/$1',
        '^store': '<rootDir>/src/store/index.tsx',
        '^templates': '<rootDir>/src/templates/$1',
        '^themes/(.*)$': '<rootDir>/src/themes/$1',
        '^translations/(.*)$': '<rootDir>/src/translations/$1',
        '^types/(.*)$': '<rootDir>/src/types/$1',
        '^gatsby-page-utils/(.*)$': `gatsby-page-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
        '^gatsby-core-utils/(.*)$': `gatsby-core-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
        '^gatsby-plugin-utils/(.*)$': [`gatsby-plugin-utils/dist/$1`, `gatsby-plugin-utils/$1`], // Workaround for https://github.com/facebook/jest/issues/9771
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    moduleDirectories: ['node_modules', 'bower_components'],
    setupFiles: [`<rootDir>/loadershim.js`],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
}
