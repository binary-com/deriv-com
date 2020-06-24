import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { navigate } from 'gatsby'
import language_config from '../../../i18n-config'
import Dropdown from './language-dropdown'
import { isProduction } from 'common/websocket/config'

const languages = Object.keys(language_config)

const disabled_lang = ['ach', 'fr']

class LanguageSwitch extends Component {
    constructor(props) {
        super(props)
        const { i18n } = this.props
        this.state = { language: i18n.language }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ language: nextProps.i18n.language })
    }
    renderLanguageChoice = (lang) => {
        if (disabled_lang.includes(lang) && isProduction()) return
        const { display_name, path, short_name } = language_config[lang]
        const current_short_name = language_config[this.state.language].short_name
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
    getCurrentLanguage() {
        const { short_name, path } = language_config[this.state.language]
        return { short_name, path }
    }

    handleSelect = (e) => {
        const { id } = e.target
        const current_lang = localStorage.getItem('i18n') || 'en'
        const path = id === '/en/' ? '/' : id

        if (!(`/${current_lang}` === id)) {
            const current_path = window.location.pathname
            const current_hash = window.location.hash
            const destination_path = `${path}${
                current_lang === 'en'
                    ? current_path.replace(/\//u, '')
                    : current_path.replace(/\/.+?\//u, '')
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

    render() {
        return (
            <Dropdown
                onChange={this.handleSelect}
                option_list={languages.map(this.renderLanguageChoice)}
                default_option={this.getCurrentLanguage()}
                has_short_name={!!this.props.short_name}
                is_high_nav={!!this.props.is_high_nav}
            />
        )
    }
}

export const LanguageSwitcher = withTranslation()(LanguageSwitch)

LanguageSwitch.propTypes = {
    i18n: PropTypes.shape({
        language: PropTypes.string,
    }),
    is_high_nav: PropTypes.bool,
    short_name: PropTypes.string,
}
