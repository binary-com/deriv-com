import React, { Component } from 'react'
import i18next from './config'
import { I18nextProvider } from 'react-i18next'

// HOC that renders a translated page
const WrapWithIntl = () => WrappedComponent => {
    const WithIntl = ({ pageContext }, props) => {
        if (pageContext) {
            const current_language = pageContext.locale
            if (current_language && current_language !== i18next.language) {
                i18next.changeLanguage(current_language)
            }
        }

        return (
            <I18nextProvider i18n={i18next}>
                <WrappedComponent {...props} language={i18next.language} />
            </I18nextProvider>
        )
    }
    return WithIntl
}
export default WrapWithIntl
