import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { navigate } from 'gatsby'
import language_config from '../../../i18n-config'
import { Dropdown } from 'components/elements'
import { isProduction } from 'common/websocket/config'

const languages = Object.keys(language_config)

class LanguageSwitch extends Component {
    constructor(props) {
        super(props)
        const { i18n } = this.props
        this.state = { language: i18n.language }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ language: nextProps.i18n.language })
    }
    displayName = () => {}
    renderLanguageChoice = (lang) => {
        if (lang === 'ach' && isProduction()) return
        const { display_name, path, short_name } = language_config[lang]
        const current_short_name = language_config[this.state.language].short_name
        const is_selected = current_short_name === short_name
        const to = `/${path}/`
        let text = this.props.short_name === 'true' ? short_name : display_name

        return {
            value: to,
            text: text,
            is_selected,
        }
    }
    getCurrentLanguage() {
        const { display_name, short_name } = language_config[this.state.language]
        return this.props.short_name === 'true' ? short_name : display_name
    }

    handleSelect = (e) => {
        const { id } = e.target
        const current_lang = localStorage.getItem('i18n') || 'en'
        const path = id === '/en' ? '/' : id

        if (!(`/${current_lang}` === id)) {
            if (path === '/ach') {
                localStorage.setItem('i18n', 'ach')
                window.location.href = '/ach'
            } else {
                /*
                can be something like /es/about/
                or just /about/
                or just /
            */
                const current_path = window.location.pathname
                const current_hash = window.location.hash

                const destination_path = `${path}${
                    current_lang === 'en' ? current_path : current_path.replace(/\/.+?\//u, '/')
                }${current_hash}`

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
            />
        )
    }
}

export const LanguageSwitcher = withTranslation()(LanguageSwitch)

LanguageSwitch.propTypes = {
    i18n: PropTypes.shape({
        language: PropTypes.string,
    }),
    short_name: PropTypes.string,
}
