import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    resources: {
        sv: {
            translations: require('../locales/sv/messages.json'),
        },
        en: {
            translations: require('../locales/en/messages.json'),
        },
    },
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,

    interpolation: {
        escapeValue: false,
    },

    react: {
        wait: true,
        useSuspense: false,
    },
})

i18n.languages = ['sv', 'en']

export default i18n
