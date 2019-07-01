import React from 'react'
import PropTypes from 'prop-types'

import Nav from './nav'
import Footer from './footer'
import GlobalStyle from '../../themes/global-style'

const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale } }) => {
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
