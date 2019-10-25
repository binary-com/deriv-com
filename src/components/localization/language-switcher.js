import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { navigate } from 'gatsby'
import language_config from '../../../i18n-config'
import { Dropdown } from 'components/elements'

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

    renderLanguageChoice(lang, idx) {
        const { display_name, path } = language_config[lang]
        const to = `/${path}`

        return (
            <option key={idx} value={to}>
                {display_name}
            </option>
        )
    }

    handleSelect = e => {
        const { value } = e.target

        const path = value === '/en' ? '/' : value
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
            const current_lang = localStorage.getItem('i18n') || 'en'

            const destination_path = `${path}${
                current_lang === 'en'
                    ? current_path
                    : current_path.replace(/\/.+?\//u, '/')
            }${current_hash}`

            navigate(destination_path, { hrefLang: path })
        }
    }

    render() {
        return (
            <Dropdown
                onChange={this.handleSelect}
                value={`/${this.state.language}`}
            >
                {languages.map(this.renderLanguageChoice)}
            </Dropdown>
        )
    }
}

export const LanguageSwitcher = withTranslation()(LanguageSwitch)

LanguageSwitch.propTypes = {
    i18n: PropTypes.shape({
        language: PropTypes.string,
    }),
}
