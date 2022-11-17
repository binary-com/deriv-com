import React from 'react'
import GlobalStyle from 'themes/global-style'

type LocalseContextWrapperProps = {
    children: React.ReactNode
    pageContext: { locale: string; pathname: string }
}

type WrapPagesWithLocaleContextProps = {
    element: React.ReactNode
    props: LocalseContextWrapperProps
}

export const LocaleContext = React.createContext(null)

export const LocaleContextWrapper = ({
    children,
    pageContext: { locale, pathname },
}: LocalseContextWrapperProps) => {
    return (
        <LocaleContext.Provider value={{ locale, pathname }}>
            <GlobalStyle />
            {children}
        </LocaleContext.Provider>
    )
}

// Language passed here from createPages
export const WrapPagesWithLocaleContext = ({ element, props }: WrapPagesWithLocaleContextProps) => {
    return <LocaleContextWrapper {...props}>{element}</LocaleContextWrapper>
}
