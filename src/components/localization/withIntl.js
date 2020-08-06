import React from 'react'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'
import i18next from './config'
import { initializeWebsocket } from 'common/websocket/initial-render-socket'
import { isBrowser } from 'common/utility'

// HOC that pre renders a page with the translated language (during build)
// Without this HOC the page will be translated on the client side dynamically
export const WithIntl = () => (WrappedComponent) => {
    const WrapWithIntl = ({ pageContext }, props) => {
        const addResources = (pc, language) => {
            if (pc && pc.localeResources) {
                if (!i18next.hasResourceBundle(language, 'translations')) {
                    i18next.addResourceBundle(language, 'translations', { ...pc.localeResources })
                }
            }
        }

        if (pageContext) {
            const current_language = pageContext.locale
            if (current_language && current_language !== i18next.language) {
                addResources(pageContext, current_language)
                i18next.changeLanguage(current_language)
                if (isBrowser) {
                    const normalize_lang = current_language && current_language.replace('_', '-')
                    initializeWebsocket(normalize_lang)
                }
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
