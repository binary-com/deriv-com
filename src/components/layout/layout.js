import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Footer from './footer'
import { Nav, NavStatic, NavPartners } from './nav'

const Main = styled.main`
    padding-top: ${props => props.padding_top || '7rem'};
    background: var(--color-white);
    height: ${props => (props.is_static ? 'calc(100vh - 10.4rem)' : '100%')};
`

const Layout = ({ children, type, padding_top }) => {
    let Navigation = <></>
    switch (type) {
        case 'static':
            Navigation = <NavStatic />
            break
        case 'partners':
            Navigation = <NavPartners />
            break
        default:
            Navigation = <Nav />
            break
    }
    return (
        <>
            {Navigation}
            <Main padding_top={padding_top} is_static={type === 'static'}>
                {children}
            </Main>
            {(type === 'static' || type === 'partners') && <Footer />}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    padding_top: PropTypes.string,
    type: PropTypes.string,
}

export default Layout
