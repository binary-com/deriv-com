import { defineConfig } from 'cypress'
require('dotenv').config()

export default defineConfig({
  e2e: {
    baseUrl: process.env.GATSBY_BASE_URL
  },
})
