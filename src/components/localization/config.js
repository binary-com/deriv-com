import i18n, { use, t } from 'i18next'
import { initReactI18next } from 'react-i18next'
// import { str as crc32 } from 'crc-32'
import language_config from '../../../i18n-config'

use(initReactI18next).init({
    ns: ['translations'],
    defaultNS: 'translations',

    // To investigate react-i18next translation issues enable this
    debug: false,

    interpolation: {
        escapeValue: false,
    },
    // we need this in development, when we are adding new keys and they are not present we have to show the en text extracted from key
    parseMissingKeyHandler: (key) => {
        console.log('missing_key : ', key)
        const regex = new RegExp(/(_t_)(?<pure_text>.*?)(_t_)/g)
        const result = regex.exec(key)
        console.log('missing_key result: ', result)
        return result?.[2] ?? `_untranslated_${key}_untranslated_`
    },

    react: {
        wait: true,
        useSuspense: false,
        hashTransKey(defaultValue) {
            return defaultValue
        },
    },
})

i18n.languages = Object.keys(language_config)

export const localize = (string, values) => t(string, { defaultValue: string, ...values })

export default i18n
