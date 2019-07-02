import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import { Link as GatsbyLink } from 'gatsby'

// TODO: refactor this component
class LanguageSwitcher extends Component {
    constructor(props) {
        super(props)
        const { i18n } = this.props
        this.state = { language: i18n.language }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ language: nextProps.i18n.language })
    }

    renderLanguageChoice({ code, label }) {
        return (
            <GatsbyLink
                key={code}
                to={`${code === 'en' ? '/' : '/' + code}`}
                hrefLang={code}
            >
                {label}
            </GatsbyLink>
        )
    }

    render() {
        const languages = [
            { code: 'en', label: 'English' },
            { code: 'sv', label: 'Svenska' },
        ]

        return (
            <div>
                {languages.map(language => this.renderLanguageChoice(language))}
            </div>
        )
    }
}

export default withTranslation()(LanguageSwitcher)
