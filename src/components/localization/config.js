import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { str as crc32 } from 'crc-32'
import language_config from '../../../i18n-config'

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

i18n.languages = Object.keys(language_config)

export const localize = (string, values) =>
    i18n.t(crc32(string), { defaultValue: string, ...values })

export default i18n
