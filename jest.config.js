module.exports = {
    transform: {
        '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
        '^.+\\.svg$': 'jest-svg-transformer',
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
        '^common(.*)$': '<rootDir>/src/common$1',
        '^components(.*)$': '<rootDir>/src/components$1',
        '^images(.*)$': '<rootDir>/src/images$1',
        '^themes(.*)$': '<rootDir>/src/themes$1',
        '^store(.*)$': '<rootDir>/src/store$1',
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/loadershim.js`],
}
