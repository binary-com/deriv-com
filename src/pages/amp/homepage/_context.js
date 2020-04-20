import React from 'react'

const UrlContext = React.createContext(true)

export const UrlProvider = UrlContext.Provider
export const UrlConsumer = UrlContext.Consumer
export const getSignupUrl = (lang, search) => {
    return `${lang === 'en' ? '' : `/${lang}`}/signup/${search}`
}

export default UrlContext
