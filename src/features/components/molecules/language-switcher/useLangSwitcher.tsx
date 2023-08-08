import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import { navigate } from 'gatsby'
import language_config from '../../../../../i18n-config'
import { nonENLangUrlReplace, setCookiesWithDomain } from 'common/utility'
import { isProduction } from 'common/websocket/config'
import { useClientInformation } from 'components/hooks/use-client-information'
import apiManager from 'common/websocket'

type TLanguageObject = {
    key: string
    url: string
    display_name: string
    path: string
}

type i18nLangConfigObject = {
    is_default: boolean
    path: string
    display_name: string
    short_name: string
    affiliate_lang: number
}

const supported_languages = Object.keys(language_config)
const disabled_lang = ['ach']

const languages: TLanguageObject[] = supported_languages.map((langItem) => {
    if (disabled_lang.includes(langItem) && isProduction()) return

    const { display_name, path } = language_config[langItem]
    const to = `/${path}/`
    const text = display_name

    return {
        key: langItem,
        url: to,
        display_name: text,
        path,
    }
})

const useLangSwitcher = () => {
    const { i18n } = useTranslation()
    const client_information = useClientInformation()

    const language = i18n.language ?? 'en'

    const currentLang: i18nLangConfigObject = useMemo(() => {
        return language_config[language]
    }, [language])

    useEffect(() => {
        if (!Cookies.get('lang_is_fixed')) {
            if (client_information?.preferred_language) {
                const lang = client_information.preferred_language.toLowerCase()
                if (lang !== language) {
                    const replaced_lang = lang.replace('_', '-')
                    i18n.changeLanguage(replaced_lang)
                }
            }
        }
    }, [i18n, language])

    const isSelected = (key: string) => {
        const { short_name } = language_config[key]
        const current_short_name = language_config[language].short_name
        const is_selected = current_short_name === short_name
        return is_selected
    }

    const onSwitchLanguage = (url: string) => {
        const current_lang = language || 'en'
        const path = url === '/en/' ? '/' : url
        const selected_language = url.replaceAll(/\//g, '')
        const selected_language_code = selected_language.replaceAll('-', '_')

        if (`/${current_lang}/` !== url) {
            const current_path = window.location.pathname
            const current_hash = window.location.hash
            const destination_lang =
                current_lang === 'en'
                    ? current_path.replace(/\//u, '')
                    : nonENLangUrlReplace(current_path)

            const destination_path = `${path}${destination_lang}${current_hash}`
            setCookiesWithDomain('user_language', url.replace(/\//g, ''))

            if (path === '/ach/') {
                localStorage.setItem('i18n', 'ach')
                window.location.href = destination_path
            } else {
                /*
                can be something like /es/about/
                or just /about/
                or just /
            */

                apiManager.reset(selected_language_code)
                navigate(destination_path, { state: { hrefLang: path } })
            }
        }
    }

    return { languages, onSwitchLanguage, isSelected, currentLang }
}

export default useLangSwitcher
