import React from 'react'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'
import i18next from './config'

// HOC that pre renders a page with the translated language
// Without this HOC the page will be translated on the client side dynamically
export const WithIntl = () => WrappedComponent => {
    const WrapWithIntl = ({ pageContext }, props) => {
        if (pageContext) {
            const current_language = pageContext.locale
            if (current_language && current_language !== i18next.language) {
                i18next.changeLanguage(current_language)
            }
        }
        WrapWithIntl.propTypes = {
            pageContext: PropTypes.shape({
                locale: PropTypes.string,
            }),
        }
        return (
            <I18nextProvider i18n={i18next}>
                <WrappedComponent {...props} language={i18next.language} />
            </I18nextProvider>
        )
    }
    return WrapWithIntl
}
