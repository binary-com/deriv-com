import { defineConfig } from 'cypress'

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
        },
    },

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },

    env: {
        baseUrl: 'http://localhost:8000/',
        baseUrlEu: 'http://eu.localhost:8000/',
    },
})
