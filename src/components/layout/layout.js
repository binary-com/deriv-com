import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import Footer from './footer'
import { Nav, NavStatic, NavPartners, NavCareers } from './nav'
import CookieBanner from 'components/custom/cookie-banner'

const Main = styled.main`
    padding-top: ${(props) => props.padding_top || '7rem'};
    background: var(--color-white);
    height: 100%;
    position: relative;
`

const Layout = ({ children, type, padding_top, no_login_signup }) => {
    const is_static = type === 'static'
    // Handle navigation types
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

    // Handle cookie banners
    const [show_cookie_banner, setShowCookieBanner] = React.useState(false)
    React.useEffect(() => {
        const has_cookie = Cookies.get('has_cookie_accepted')
        setShowCookieBanner(!has_cookie)
    }, [])
    const onAccept = () => {
        Cookies.set('has_cookie_accepted', 1)
        setShowCookieBanner(false)
    }
    return (
        <>
            {Navigation}
            <Main padding_top={padding_top} is_static={is_static}>
                {children}
            </Main>
            {show_cookie_banner && (
                <CookieBanner onAccept={onAccept} is_open={show_cookie_banner} />
            )}
            {!is_static && <Footer has_banner_cookie={show_cookie_banner} />}
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
