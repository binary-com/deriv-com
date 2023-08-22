import { defineConfig } from 'cypress'
require('dotenv').config()

export default defineConfig({
  e2e: {
    baseUrl: 'https://staging.deriv.com',
  },
})
