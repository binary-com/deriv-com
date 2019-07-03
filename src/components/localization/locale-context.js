import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from '../../themes/global-style'
const LocaleContext = React.createContext()

const LocaleContextWrapper = ({ children, pageContext: { locale } }) => (
    <LocaleContext.Provider value={{ locale }}>
        <GlobalStyle />
        {children}
    </LocaleContext.Provider>
)

// Language passed here from createPages
const WrapPagesWithLocaleContext = ({ element, props }) => {
    return <LocaleContextWrapper {...props}>{element}</LocaleContextWrapper>
}

export { LocaleContext, LocaleContextWrapper, WrapPagesWithLocaleContext }
