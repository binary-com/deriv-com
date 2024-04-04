module.exports = {
    // A set of global variables that need to be available in all test environments
    globals: {},

    // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    testEnvironmentOptions: {
        url: 'http://localhost:8000'
    },

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: false,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: ['<rootDir>/themes/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/public/**', '!**/static/**'],

    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: ['lcov'],

    // The directory where Jest should output its coverage files
    coverageDirectory: './coverage/',

    // The glob patterns Jest uses to detect test files
    testMatch: ['<rootDir>/themes/gatsby-theme-deriv/src/features/**/__tests__/**/?(*.)+(spec).[jt]s?(x)'],

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // A map from regular expressions to paths to transformers
    transform: {
        '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
        '^.+\\.svg$': '<rootDir>/svgTransform.js',
    },

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script|gbimage-bridge|p-min-delay|uuid)/)`],

    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
        '^common/(.*)$': '<rootDir>/themes/gatsby-theme-deriv/src/common/$1',
        '^components/(.*)$': '<rootDir>/themes/gatsby-theme-deriv/src/components/$1',
        '^features/(.*)$': '<rootDir>/themes/gatsby-theme-deriv/src/features/$1',
        '^images/(.*)$': '<rootDir>/themes/gatsby-theme-deriv/src/images/$1',
        '^lotties/(.*)$': '<rootDir>/themes/gatsby-theme-deriv/src/lotties/$1',
        '^pages/(.*)$': '<rootDir>/themes/gatsby-theme-deriv/src/pages/$1',
        '^store/(.*)$': '<rootDir>/themes/gatsby-theme-deriv/src/store/$1',
        '^templates': '<rootDir>/themes/gatsby-theme-deriv/src/templates/$1',
        '^themes/(.*)$': '<rootDir>/themes/gatsby-theme-deriv/src/themes/$1',
        '^translations/(.*)$': '<rootDir>/themes/gatsby-theme-deriv/src/translations/$1',
        '^types/(.*)$': '<rootDir>/themes/gatsby-theme-deriv/src/types/$1',
    },

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>*/public`, `<rootDir>/themes/gatsby-theme-deriv/src/features/pages` ],

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules'],

    // The paths to modules that run some code to configure or set up the testing environment before each test
    setupFiles: [`<rootDir>/loadershim.js`],

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

    // Automatically clear mock calls, instances and results before every test
    clearMocks: true,
}
