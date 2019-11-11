import React from 'react'
import Loadable from 'react-loadable'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Nav, NavStatic } from './nav'
import { InfiniteLoader } from 'components/elements'

const Main = styled.main`
    padding-top: 7rem;
    background: var(--color-white);
`

const Footer = Loadable({
    loader: () => import('./footer'),
    loading: InfiniteLoader,
})

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
