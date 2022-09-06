import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheetManager } from 'styled-components'
import GlobalStyle from 'themes/global-style'
import { plugin } from 'themes/plugin'

export const LocaleContext = React.createContext()

export const LocaleContextWrapper = ({ children, pageContext: { locale, pathname } }) => {
    return (
        <LocaleContext.Provider value={{ locale, pathname }}>
            <GlobalStyle />
            {/* {children} */}
            {/* {children} */}
            <StyleSheetManager stylisPlugins={[plugin]}>{children}</StyleSheetManager>
        </LocaleContext.Provider>
    )
}

LocaleContextWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    pageContext: PropTypes.shape({
        locale: PropTypes.string,
        pathname: PropTypes.string,
    }),
}

// Language passed here from createPages
export const WrapPagesWithLocaleContext = ({ element, props }) => {
    return <LocaleContextWrapper {...props}>{element}</LocaleContextWrapper>
}

WrapPagesWithLocaleContext.propTypes = {
    element: PropTypes.element.isRequired,
    props: PropTypes.object,
}
