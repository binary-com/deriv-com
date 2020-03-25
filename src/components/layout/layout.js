import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Footer from './footer'
import { Nav, NavStatic, NavPartners, NavCareers } from './nav'

const Main = styled.main`
    padding-top: ${props => props.padding_top || '7rem'};
    background: var(--color-white);
    height: 100%;
`

const Layout = ({ children, type, padding_top, no_login_signup }) => {
    const is_static = type === 'static'
    let Navigation = <></>
    switch (type) {
        case 'static':
            Navigation = <NavStatic />
            break
        case 'partners':
            Navigation = <NavPartners no_login_signup={no_login_signup} />
            break
        case 'careers':
            Navigation = <NavCareers />
            break
        default:
            Navigation = <Nav />
            break
    }
    return (
        <>
            {Navigation}
            <Main padding_top={padding_top} is_static={is_static}>
                {children}
            </Main>
            {!is_static && <Footer />}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    no_login_signup: PropTypes.bool,
    padding_top: PropTypes.string,
    type: PropTypes.string,
}

export default Layout
