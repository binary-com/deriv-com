import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from '../../themes/global-style'

export const LocaleContext = React.createContext()

export const LocaleContextWrapper = ({ children, pageContext: { locale } }) => (
    <LocaleContext.Provider value={{ locale }}>
        <GlobalStyle />
        {children}
    </LocaleContext.Provider>
)

// Language passed here from createPages
export const WrapPagesWithLocaleContext = ({ element, props }) => {
    return <LocaleContextWrapper {...props}>{element}</LocaleContextWrapper>
}
