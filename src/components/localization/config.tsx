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

/**
 * @description if you need the direction of the current language please use this function ( without react life-cycles), if you need react life-cycles please use useLangDirection hook
 * @returns {"ltr" | "rtl"} the current language direction
 */
export const get_lang_direction = () => {
    return i18n.dir()
}

/**
 * @description if you need to check if current language's direction is `rtl` use this function ( without react life-cycles), if you need react life-cycles please use useIsRtl hook
 * @returns {boolean} if the current direction is "rtl" returns true
 */
export const is_rtl = () => {
    return get_lang_direction() === 'rtl'
}

export default i18n
