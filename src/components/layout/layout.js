import React from 'react'
import Loadable from '@loadable/component'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Footer from './footer'
import Copyright from './copyright'
import { Nav, NavStatic, NavPartners, NavInterim } from './nav'
import { NavCareers } from './nav-careers'
import { NavP2P } from './nav-p2p'
import { LocationProvider } from './location-context'
import EURedirect, { useModal } from 'components/custom/_eu-redirect-modal.js'
import CookieBanner from 'components/custom/cookie-banner'
import { CookieStorage } from 'common/storage'
import { isBrowser } from 'common/utility'
import { DerivStore } from 'store'

const LiveChat = Loadable(() => import('./livechat'))

const Main = styled.main`
    padding-top: ${(props) => props.padding_top || '7rem'};
    background: var(--color-white);
    height: 100%;
    position: relative;
`

const has_dataLayer = isBrowser() && window.dataLayer

const TRACKING_STATUS_KEY = 'tracking_status'
const tracking_status_cookie = new CookieStorage(TRACKING_STATUS_KEY)

const Layout = ({
    children,
    type,
    interim_type,
    padding_top,
    no_login_signup,
    no_live_chat,
    nav_type,
}) => {
    const { is_eu_country } = React.useContext(DerivStore)
    const [has_mounted, setMounted] = React.useState(false)
    const [show_cookie_banner, setShowCookieBanner] = React.useState(false)
    const [show_modal, toggleModal, closeModal] = useModal()
    const [modal_payload, setModalPayload] = React.useState({})
    const LC_API = (isBrowser() && window.LC_API) || {}
    const [is_livechat_interactive, setLiveChatInteractive] = React.useState(false)

    const is_static = type === 'static'

    // Every layout change will trigger scroll to top
    React.useEffect(() => {
        if (isBrowser()) {
            window.scrollTo(0, 0)
        }
    }, [])

    // Allow tracking cookie banner setup
    React.useEffect(() => {
        const tracking_status = tracking_status_cookie.get(TRACKING_STATUS_KEY)
        if (is_eu_country && !tracking_status) setShowCookieBanner(true)

        const allow_tracking = (!is_eu_country || tracking_status === 'accepted') && has_dataLayer

        if (allow_tracking) window.dataLayer.push({ event: 'allow_tracking' })
        setMounted(true)
    }, [is_eu_country])

    const onAccept = () => {
        tracking_status_cookie.set(TRACKING_STATUS_KEY, 'accepted')

        if (has_dataLayer) window.dataLayer.push({ event: 'allow_tracking' })

        setShowCookieBanner(false)
    }

    const onDecline = () => {
        tracking_status_cookie.set(TRACKING_STATUS_KEY, 'declined')
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
            FooterNav = <Footer />
            break
        case 'careers':
            Navigation = <NavCareers />
            FooterNav = <Footer no_language={true} />
            break
        case 'p2p':
            Navigation = <NavP2P nav_type={nav_type} />
            FooterNav = <Copyright />
            break
        default:
            Navigation = <Nav />
            FooterNav = <Footer />
            break
    }

    return (
        <LocationProvider
            has_mounted={has_mounted}
            show_cookie_banner={show_cookie_banner}
            toggleModal={toggleModal}
            setModalPayload={setModalPayload}
            is_livechat_interactive={is_livechat_interactive}
            LC_API={LC_API}
        >
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
            {!no_live_chat && (
                <LiveChat
                    LC_API={LC_API}
                    is_livechat_interactive={is_livechat_interactive}
                    setLiveChatInteractive={setLiveChatInteractive}
                />
            )}
            {FooterNav}
            <EURedirect
                toggle={toggleModal}
                is_open={show_modal}
                closeModal={closeModal}
                to={modal_payload.to}
                target={modal_payload.target}
                rel={modal_payload.rel}
                ref={modal_payload.ref}
                aria_label={modal_payload.aria_label}
            />
        </LocationProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    interim_type: PropTypes.string,
    nav_type: PropTypes.string,
    no_live_chat: PropTypes.bool,
    no_login_signup: PropTypes.bool,
    padding_top: PropTypes.string,
    type: PropTypes.string,
}

export default Layout
