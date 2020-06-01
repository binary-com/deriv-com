import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import Footer from './footer'
import Copyright from './copyright'
import { Nav, NavStatic, NavPartners, NavCareers, NavInterim } from './nav'
import { LocationProvider } from './location-context'
import CookieBanner from 'components/custom/cookie-banner'
import { isEuCountry } from 'common/country-base'
import { BinarySocketBase } from 'common/websocket/socket_base'

const Main = styled.main`
    padding-top: ${(props) => props.padding_top || '7rem'};
    background: var(--color-white);
    height: 100%;
    position: relative;
`

const is_browser = typeof window !== 'undefined'
const cookie_expires = 7

const Layout = ({ children, type, interim_type, padding_top, no_login_signup }) => {
    const [clients_country, setClientCountry] = React.useState(false)
    const [show_cookie_banner, setShowCookieBanner] = React.useState(false)
    const is_static = type === 'static'

    React.useEffect(() => {
        const clients_country = Cookies.get('clients_country')
        if (clients_country) setClientCountry(clients_country)
        else {
            const binary_socket = BinarySocketBase.init()

            binary_socket.onopen = () => {
                binary_socket.send(JSON.stringify({ website_status: 1 }))
            }

            binary_socket.onmessage = (msg) => {
                const response = JSON.parse(msg.data)

                Cookies.set('clients_country', response.website_status.clients_country, {
                    expires: cookie_expires,
                })

                binary_socket.close()
            }
        }
    }, [])

    React.useEffect(() => {
        const is_eu_country = isEuCountry(clients_country)
        const tracking_status = Cookies.get('tracking_status')

        if (is_eu_country && !tracking_status) {
            setShowCookieBanner(true)
        }

        if ((!is_eu_country || tracking_status === 'accepted') && is_browser && window.datalayer) {
            window.datalayer.push({ event: 'allow_tracking' })
        }
    }, [clients_country])

    const onAccept = () => {
        Cookies.set('tracking_status', 'accepted', {
            expires: cookie_expires,
        })

        if (is_browser && window.datalayer) {
            window.datalayer.push({ event: 'allow_tracking' })
        }

        setShowCookieBanner(false)
    }

    const onDecline = () => {
        Cookies.set('tracking_status', 'declined', {
            expires: cookie_expires,
        })
        setShowCookieBanner(false)
    }

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
            FooterNav = <Footer has_banner_cookie={show_cookie_banner} no_language={true} />
            break
        default:
            Navigation = <Nav />
            FooterNav = <Footer has_banner_cookie={show_cookie_banner} />
            break
    }

    return (
        <LocationProvider is_eu_country={isEuCountry(clients_country)}>
            {Navigation}
            <Main padding_top={padding_top} is_static={is_static}>
                {children}
            </Main>

            {show_cookie_banner && (
                <CookieBanner
                    onAccept={onAccept}
                    onDecline={onDecline}
                    is_open={show_cookie_banner}
                />
            )}
            {FooterNav}
        </LocationProvider>
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
