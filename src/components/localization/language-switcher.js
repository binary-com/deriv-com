import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import { Link as GatsbyLink } from 'gatsby'
import language_config from '../../../i18n-config'

const languages = Object.keys(language_config)
class LanguageSwitcher extends Component {
    constructor(props) {
        super(props)
        const { i18n } = this.props
        // TODO: use state for active language styling
        this.state = { language: i18n.language }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ language: nextProps.i18n.language })
    }

    renderLanguageChoice(lang, id) {
        const { display_name, is_default } = language_config[lang]
        const to = `/${is_default ? '' : lang}`

        return (
            <li key={id}>
                <GatsbyLink to={to} hrefLang={lang}>
                    {display_name}
                </GatsbyLink>
            </li>
        )
    }

    render() {
        return <ul>{languages.map(this.renderLanguageChoice)}</ul>
    }
}

export default withTranslation()(LanguageSwitcher)
