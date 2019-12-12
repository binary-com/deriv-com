import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import Variables from '../../themes/variables'
import Reset from '../../themes/reset'
import device from '../../themes/device'
import Footer from './footer'
import { Nav, NavStatic } from './nav'

const GlobalStyle = createGlobalStyle`
    ${Reset}
    ${Variables}

    * {
        &, &::before, &::after {
            box-sizing: border-box;
        }
    }
    html {
        font-size: 62.5%; /* 1rem = 10px */
        box-sizing: border-box;

        @media ${device.desktopL} {
            font-size: 75.5%; /* 1rem = 12px */
        }
        @media ${device.laptop} {
            font-size: 58%; /* 1rem = 9px */
        }
        @media ${device.tabletL} {
            font-size: 50%; /* 1rem = 8px */
        }
    }
    body {
        font-family: 'IBM Plex Sans', sans-serif;
        margin: 0;
        padding: 0;
        background: var(--color-green);
    }
`

const Main = styled.main`
    padding-top: 7rem;
    background: var(--color-white);
    height: ${props => (props.is_static ? '92vh' : '100%')};
`

const Layout = ({ children, is_static }) => (
    <>
        {is_static ? <NavStatic /> : <Nav />}
        <Main is_static={is_static}>
            <GlobalStyle />
            {children}
        </Main>
        {!is_static && <Footer />}
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    is_static: PropTypes.bool,
}
export default Layout
