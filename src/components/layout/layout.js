import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Nav from './nav'
import Footer from './footer'

const Main = styled.main`
    padding-top: 7.2rem;
`

const Layout = ({ children }) => (
    <>
        <Nav />
        <Main>{children}</Main>
        <Footer />
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
