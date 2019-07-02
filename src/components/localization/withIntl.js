import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18next from './config'

// HOC that pre renders a page with the translated language
// Without this HOC the page will be translated on the client side dynamically
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
