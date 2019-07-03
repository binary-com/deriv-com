import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { str as crc32 } from 'crc-32'

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    resources: {
        sv: {
            translations: require('../../translations/sv/messages.json'),
        },
        en: {
            translations: require('../../translations/en/messages.json'),
        },
        de: {
            translations: require('../../translations/de/messages.json'),
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
        hashTransKey(defaultValue) {
            return crc32(defaultValue)
        },
    },
})

i18n.languages = ['sv', 'en', 'de']

export const localize = (string, values) => {
    return i18n.t(crc32(string), { defaultValue: string, ...values })
}
export default i18n
