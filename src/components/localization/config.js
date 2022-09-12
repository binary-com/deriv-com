import i18n, { use, t } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { str as crc32 } from 'crc-32'
import language_config from '../../../i18n-config'

use(initReactI18next).init({
    ns: ['translations'],
    defaultNS: 'translations',

    // To investigate react-i18next translation issues enable this
    debug: false,

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

export const localize = (string, values) => t(crc32(string), { defaultValue: string, ...values })

/**
 * @description if you need the direction of the current languge please use this fucntion ( without react life-cycles), if you need react life-cycles please use useLangDirection hook
 * @returns {"ltr" | "rtl"} the current language direction
 */
export const get_lang_direction = () => {
    return i18n.dir(i18n.language)
}

/**
 * @description if you need to check if current language's direction is `rtl` use this function ( without react life-cycles), if you need react life-cycles please use useIsRtl hook
 * @returns {boolean} if the current direction is "rtl" returns true
 */
export const is_rtl = () => {
    return get_lang_direction() === 'rtl'
}

export default i18n
