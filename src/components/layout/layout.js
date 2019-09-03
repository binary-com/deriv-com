import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Nav from './nav'
import Footer from './footer'
import device from 'themes/device'

const Main = styled.main`
    padding-top: 12rem;

    @media ${device.tabletL} {
        padding-top: 9rem;
    }
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
