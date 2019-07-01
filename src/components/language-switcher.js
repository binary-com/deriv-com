/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'

class LanguageSwitcher extends Component {
    constructor(props) {
        super(props)
        const { i18n } = this.props
        this.state = { language: i18n.language }

        this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ language: nextProps.i18n.language })
    }

    handleChangeLanguage(lng) {
        const { i18n } = this.props
        i18n.changeLanguage(lng)
    }

    renderLanguageChoice({ code, label }) {
        return (
            <button key={code} onClick={() => this.handleChangeLanguage(code)}>
                {label}
            </button>
        )
    }

    render() {
        const languages = [
            { code: 'en', label: 'English' },
            { code: 'sv', label: 'Svenska' },
        ]

        return (
            <div className="LanguageSwitcher">
                {languages.map(language => this.renderLanguageChoice(language))}
            </div>
        )
    }
}

export default withTranslation('messages')(LanguageSwitcher)
