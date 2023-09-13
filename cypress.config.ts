import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'https://deriv.com',
    },
    env: {
        email: 'test@example.com',
        baseUrl: 'https://deriv.com',
        base_url_eu: 'https://eu.deriv.com',
        languages: [
            'en',
            'es',
            'fr',
            'it',
            'pl',
            'pt',
            'ru',
            'th',
            'vi',
            'tr',
            'zh-cn',
            'zh-tw',
            'bn',
            'ar',
            'ko',
            'de',
        ],
    },
})
