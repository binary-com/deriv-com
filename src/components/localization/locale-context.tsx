import React from 'react'
import { StyleSheetManager } from 'styled-components'
import GlobalStyle from 'themes/global-style'
import { plugin } from 'themes/plugin'

type LocaleContextWrapperProps = {
    children: React.ReactNode
    pageContext: { locale: string; pathname: string }
}

type WrapPagesWithLocaleContextProps = {
    element: React.ReactNode
    props: LocaleContextWrapperProps
}

export const LocaleContext = React.createContext(null)

export const LocaleContextWrapper = ({
    children,
    pageContext: { locale, pathname },
}: LocaleContextWrapperProps) => {
    return (
        <LocaleContext.Provider value={{ locale, pathname }}>
            <GlobalStyle />
            <StyleSheetManager stylisPlugins={[plugin]}>{children}</StyleSheetManager>
        </LocaleContext.Provider>
    )
}

export const WrapPagesWithLocaleContext = ({ element, props }: WrapPagesWithLocaleContextProps) => {
    return <LocaleContextWrapper {...props}>{element}</LocaleContextWrapper>
}
