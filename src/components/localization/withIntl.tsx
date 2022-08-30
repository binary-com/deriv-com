import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18next from './config'
import { isBrowser } from 'common/utility'

type PageContextType = {
    locale: string
}

type WrapWithIntl = {
    pageContext: PageContextType
}

type WithIntlProps = React.FC<{
    language: string
    pageContext: PageContextType
}>

// HOC that pre renders a page with the translated language (during build)
// Without this HOC the page will be translated on the client side dynamically
export const WithIntl = () => (WrappedComponent: WithIntlProps) => {
    const WrapWithIntl = ({ pageContext, ...props }: WrapWithIntl) => {
        const addResources = (pc, language) => {
            if (pc && pc.localeResources) {
                if (!i18next.hasResourceBundle(language, 'translations')) {
                    i18next.addResourceBundle(language, 'translations', {
                        ...pc.localeResources,
                    })
                }
            }
        }

        if (pageContext) {
            const current_language = pageContext.locale
            if (current_language && current_language !== i18next.language) {
                addResources(pageContext, current_language)
                i18next.changeLanguage(current_language)
                if (isBrowser()) {
                    const normalize_lang = current_language && current_language.replace('_', '-')
                    localStorage.setItem('i18n', normalize_lang)
                }
            }
        }
        return (
            <I18nextProvider i18n={i18next}>
                <WrappedComponent
                    {...props}
                    language={i18next.language}
                    pageContext={pageContext}
                />
            </I18nextProvider>
        )
    }
    return WrapWithIntl
}
