import React from 'react'
import PropTypes from 'prop-types'

import Nav from './nav'
import Footer from './footer'
import GlobalStyle from '../../themes/global-style'

const Layout = ({ children }) => (
    <>
        <GlobalStyle />
        <Nav />
        <main>{children}</main>
        <Footer />
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
