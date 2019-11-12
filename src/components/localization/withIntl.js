import React from 'react'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'
import i18next from './config'
import { initializeWebsocket } from 'common/initial-render-socket'

// HOC that pre renders a page with the translated language
// Without this HOC the page will be translated on the client side dynamically
export const WithIntl = () => WrappedComponent => {
    const WrapWithIntl = ({ pageContext }, props) => {
        const addResources = (pc, language) => {
            console.log('addResource: ', pc)
            if (pc && pc.localeResources) {
                if (!i18next.hasResourceBundle(language, 'translation')) {
                    i18next.addResourceBundle(language, 'translation', { ...pc.localeResources })
                }
            }
        }

        if (pageContext) {
            const current_language = pageContext.locale
            if (current_language && current_language !== i18next.language) {
                // i18next.addResourceBundle(
                //     current_language,
                //     'translations',
                //     { pageContext.localeResources },
                //     true,
                //     true,
                // )
                console.log(i18next.hasResourceBundle(current_language, 'translation'))
                addResources(pageContext, current_language)
                console.log(i18next)
                i18next.changeLanguage(current_language)
                if (typeof window !== 'undefined') {
                    initializeWebsocket(current_language)
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
