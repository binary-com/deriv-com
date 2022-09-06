import i18n, { use, t } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { str as crc32 } from 'crc-32'
import language_config from '../../../i18n-config'
import ns1 from '../../translations/en.json'

export const defaultNS = 'translations'
export const resources = {
    en: {
        ns1,
    },
} as const

use(initReactI18next).init({
    ns: ['translations'],
    defaultNS,

    // To investigate react-i18next translation issues enable this
    debug: false,

    interpolation: {
        escapeValue: false,
    },

    react: {
        useSuspense: false,
        hashTransKey(defaultValue) {
            return crc32(defaultValue)
        },
    },
    resources,
})

i18n.languages = Object.keys(language_config)

export const localize = (string: string, values?: { search: string }) =>
    t(String(crc32(string)), { defaultValue: string, ...values })

export default i18n
