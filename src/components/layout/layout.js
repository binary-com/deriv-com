import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Nav, NavStatic } from './nav'
import Footer from './footer'

const Main = styled.main`
    padding-top: 7rem;
`

const Layout = ({ children, is_static }) => (
    <>
        {is_static ? <NavStatic /> : <Nav />}
        <Main>{children}</Main>
        {!is_static && <Footer />}
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    is_static: PropTypes.bool,
}

export default Layout
