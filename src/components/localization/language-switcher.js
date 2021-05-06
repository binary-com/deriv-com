import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { navigate } from 'gatsby'
import language_config from '../../../i18n-config'
import Dropdown from './language-dropdown'
import { isProduction } from 'common/websocket/config'
import { nonENLangUrlReplace } from 'common/utility'

const languages = Object.keys(language_config)

const disabled_lang = ['ach']

const LanguageSwitch = ({ i18n, is_high_nav, short_name }) => {
    const [language, setLanguage] = React.useState(i18n.language)

    React.useEffect(() => {
        setLanguage(i18n.language)
    }, [i18n.language])

    const renderLanguageChoice = (lang) => {
        if (disabled_lang.includes(lang) && isProduction()) return
        const { display_name, path, short_name } = language_config[lang]
        const current_short_name = language_config[language].short_name
        const is_selected = current_short_name === short_name
        const to = `/${path}/`
        let text = display_name

        return {
            value: to,
            text: text,
            is_selected,
            path,
        }
    }
    const getCurrentLanguage = () => {
        const { short_name, path } = language_config[language]
        return { short_name, path }
    }

    const handleSelect = (e) => {
        const { id } = e.target
        const current_lang = language || 'en'
        const path = id === '/en/' ? '/' : id

        if (`/${current_lang}/` !== id) {
            const current_path = window.location.pathname
            const current_hash = window.location.hash
            const destination_path = `${path}${current_lang === 'en'
                ? current_path.replace(/\//u, '')
                : nonENLangUrlReplace(current_path)
                }${current_hash}`

            if (path === '/ach/') {
                localStorage.setItem('i18n', 'ach')
                window.location.href = destination_path
            } else {
                /*
                can be something like /es/about/
                or just /about/
                or just /
            */
                navigate(destination_path, { hrefLang: path })
            }
        }
    }

    return (
        <Dropdown
            onChange={handleSelect}
            option_list={languages.map(renderLanguageChoice)}
            default_option={getCurrentLanguage()}
            has_short_name={!!short_name}
            is_high_nav={!!is_high_nav}
        />
    )
}

LanguageSwitch.propTypes = {
    i18n: PropTypes.shape({
        language: PropTypes.string,
    }),
    is_high_nav: PropTypes.bool,
    short_name: PropTypes.string,
}

export const LanguageSwitcher = withTranslation()(LanguageSwitch)
