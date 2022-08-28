// disable-translation
import i18n, { use, t } from 'i18next'
import { initReactI18next } from 'react-i18next'
// import { str as crc32 } from 'crc-32'
import language_config from '../../../i18n-config'

use(initReactI18next).init({
    ns: ['translations'],
    defaultNS: 'translations',

    // To investigate react-i18next translation issues enable this
    debug: false,

    // the default nsSeparator is `:`, since we don't use the namespaces feature, some of our keys contain `:` and it causes some problems in translation
    // for example if we have a key like '_t_Example:_t_', i18n will look in "_t_Example" namespace for '_t_' as key.
    nsSeparator: '::',
    interpolation: {
        escapeValue: false,
    },
    // we need this in development, when we are adding new keys and they are not present we have to show the en text extracted from key
    parseMissingKeyHandler: (key) => {
        const regex = new RegExp(/(_t_)(?<pure_text>.*?)(_t_)/g)
        const result = regex.exec(key)
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
