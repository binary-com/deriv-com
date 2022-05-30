import i18n, { use, t } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { str as crc32 } from 'crc-32'
import language_config from '../../../i18n-config'
// Language Icons
import English from 'images/svg/flags/en.svg'
import Persian from 'images/svg/flags/fa.svg'
import French from 'images/svg/flags/fr.svg'
import Malay from 'images/svg/flags/ms.svg'
import Russian from 'images/svg/flags/ru.svg'
import Tagalog from 'images/svg/flags/tl.svg'
import Tamil from 'images/svg/flags/ta.svg'
import Chinese from 'images/svg/flags/zh.svg'

export const language_images = [
    {
        id: 'en',
        icon: English,
    },
    {
        id: 'fa',
        icon: Persian,
    },
    {
        id: 'fr',
        icon: French,
    },
    {
        id: 'ms',
        icon: Malay,
    },
    {
        id: 'ru',
        icon: Russian,
    },
    {
        id: 'tl',
        icon: Tagalog,
    },
    {
        id: 'ta',
        icon: Tamil,
    },
    {
        id: 'zh',
        icon: Chinese,
    },
]

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

export default i18n
