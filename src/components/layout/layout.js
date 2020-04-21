import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import Footer from './footer'
import Copyright from './copyright'
import { Nav, NavStatic, NavPartners, NavCareers, NavInterim } from './nav'
import CookieBanner from 'components/custom/cookie-banner'
import { Show } from 'components/containers'
import { isEuCountry } from 'common/country-base'

const Main = styled.main`
    padding-top: ${(props) => props.padding_top || '7rem'};
    background: var(--color-white);
    height: 100%;
    position: relative;
`

const Layout = ({ children, type, interim_type, padding_top, no_login_signup }) => {
    const is_static = type === 'static'
    // Handle navigation types
    let Navigation = <></>
    let FooterNav = <></>
    switch (type) {
        case 'static':
            Navigation = <NavStatic />
            break
        case 'interim':
            Navigation = <NavInterim interim_type={interim_type} />
            FooterNav = <Copyright />
            break
        case 'partners':
            Navigation = <NavPartners no_login_signup={no_login_signup} />
            FooterNav = <Footer has_banner_cookie={show_cookie_banner} />
            break
        case 'careers':
            Navigation = <NavCareers />
            FooterNav = <Footer has_banner_cookie={show_cookie_banner} />
            break
        default:
            Navigation = <Nav />
            FooterNav = <Footer has_banner_cookie={show_cookie_banner} />
            break
    }

    // Handle cookie banners
    const [show_cookie_banner, setShowCookieBanner] = React.useState(false)
    React.useEffect(() => {
        const clients_country = Cookies.get('clients_country')
        if (isEuCountry(clients_country)) {
            const has_cookie = Cookies.get('has_cookie_accepted')
            setShowCookieBanner(!has_cookie)
        }
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
            <Show.Eu>
                {show_cookie_banner && (
                    <CookieBanner onAccept={onAccept} is_open={show_cookie_banner} />
                )}
            </Show.Eu>
            {FooterNav}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    interim_type: PropTypes.string,
    no_login_signup: PropTypes.bool,
    padding_top: PropTypes.string,
    type: PropTypes.string,
}

export default Layout
