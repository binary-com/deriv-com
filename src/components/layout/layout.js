import React from 'react'
import PropTypes from 'prop-types'

import Nav from './nav'
import Footer from './footer'
import GlobalStyle from '../../themes/global-style'
import i18next from '../config'

const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale } }) => {
    i18next.changeLanguage(locale)

    return (
        <LocaleContext.Provider value={{ locale }}>
            <GlobalStyle />
            <Nav />
            <main>{children}</main>
            <Footer />
        </LocaleContext.Provider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
