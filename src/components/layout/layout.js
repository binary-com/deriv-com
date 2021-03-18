import React from 'react'
import Loadable from '@loadable/component'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useGTMData from '../hooks/gtm-data-hooks'
import Copyright from './copyright'
import { Nav, NavStatic, NavPartners, NavInterim } from './nav'
import BeSquareNav from './besquare/nav'
import BeSquareFooter from './besquare/footer'
import { NavCareers } from './nav-careers'
import { NavP2P } from './nav-p2p'
import { LocationProvider } from './location-context'
import EURedirect, { useModal } from 'components/custom/_eu-redirect-modal.js'
import CookieBanner from 'components/custom/cookie-banner'
import { CookieStorage } from 'common/storage'
import { cfd_warning_height, isBrowser } from 'common/utility'
import { DerivStore } from 'store'
import { LogInContext } from 'components/layout/log-in-context'
import { Localize } from 'components/localization'
import { Text } from 'components/elements'
import device from 'themes/device'
import { Container } from 'components/containers'

const Footer = Loadable(() => import('./footer'))
const LiveChat = Loadable(() => import('./livechat'))

const has_dataLayer = isBrowser() && window.dataLayer

const TRACKING_STATUS_KEY = 'tracking_status'
const tracking_status_cookie = new CookieStorage(TRACKING_STATUS_KEY)

const CFDWrapper = styled.section`
    background-color: var(--color-grey-25);
    background-size: cover;
    height: ${cfd_warning_height.desktop}rem;
    display: flex;
    align-items: center;

    @media ${device.tabletS} {
        height: ${cfd_warning_height.tablet}rem;
    }
`

const CFDContainer = styled(Container)`
    @media ${device.tabletL} {
        width: 95%;
    }
`

const CFDText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 14px;
    }

    @media ${device.tablet} {
        font-size: 12px;
    }

    @media ${device.mobileL} {
        font-size: 10px;
    }
`

export const CFDWarning = ({ is_ppc }) => {
    const { is_eu_country } = React.useContext(DerivStore)
    return is_ppc || is_eu_country ? (
        <CFDWrapper>
            <CFDContainer>
                <CFDText>
                    <Localize
                        translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. <0>71% of retail investor accounts lose money when trading CFDs with this provider.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                        components={[<strong key={0} />]}
                    />
                </CFDText>
            </CFDContainer>
        </CFDWrapper>
    ) : (
        <></>
    )
}

const Main = styled.main`
    margin-top: ${(props) =>
        props.use_eu_margin
            ? (props.margin_top && `${props.margin_top + cfd_warning_height.desktop}rem`) ||
              `${7 + cfd_warning_height.desktop}rem`
            : (props.margin_top && `${props.margin_top}rem`) || `7rem`};
    background: var(--color-white);
    height: 100%;
    position: relative;

    @media ${device.tabletS} {
        margin-top: ${(props) =>
            props.use_eu_margin
                ? (props.margin_top && `${props.margin_top + cfd_warning_height.tablet}rem`) ||
                  `${7 + cfd_warning_height.tablet}rem`
                : (props.margin_top && `${props.margin_top}rem`) || `7rem`};
    }
`

const Layout = ({
    children,
    interim_type,
    is_ppc,
    is_ppc_redirect,
    margin_top,
    nav_type,
    no_live_chat,
    no_login_signup,
    type,
}) => {
    const { is_eu_country } = React.useContext(DerivStore)
    const { is_logged_in } = React.useContext(LogInContext)
    const [has_mounted, setMounted] = React.useState(false)
    const [show_cookie_banner, setShowCookieBanner] = React.useState(false)
    const [show_modal, toggleModal, closeModal] = useModal()
    const [modal_payload, setModalPayload] = React.useState({})
    const [gtm_data, setGTMData] = useGTMData()

    const is_static = type === 'static'
    //this pages do not show a banner (cfd) on top of nav. so no need to adjust top margin of main for these pages
    const no_warning_pages = ['static', 'careers']
    //cfd warning should be shown for pay per click even if the client is not from eu
    const should_use_eu_margin = !no_warning_pages.includes(type) && (is_eu_country || is_ppc)

    // Every layout change will trigger scroll to top
    React.useEffect(() => {
        if (isBrowser()) {
            window.scrollTo(0, 0)
        }
    }, [])

    // Allow tracking cookie banner setup
    React.useEffect(() => {
        if (typeof is_eu_country === 'boolean') {
            const tracking_status = tracking_status_cookie.get(TRACKING_STATUS_KEY)
            if (is_eu_country && !tracking_status) setShowCookieBanner(true)
            const allow_tracking =
                (!is_eu_country || tracking_status === 'accepted') && !gtm_data && has_dataLayer

            if (allow_tracking) {
                setGTMData({ event: 'allow_tracking' })
            }
            setMounted(true)
        }
    }, [is_eu_country])

    const onAccept = () => {
        tracking_status_cookie.set(TRACKING_STATUS_KEY, 'accepted')

        if (!gtm_data && has_dataLayer) setGTMData({ event: 'allow_tracking' })

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
            Navigation = <NavStatic is_ppc={is_ppc} />
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
            FooterNav = <Footer no_language={true} type={type} />
            break
        case 'p2p':
            Navigation = <NavP2P nav_type={nav_type} />
            FooterNav = <Copyright />
            break
        case 'be-square':
            Navigation = <BeSquareNav />
            FooterNav = <BeSquareFooter />
            break
        default:
            Navigation = (
                <Nav
                    is_ppc_redirect={is_ppc_redirect}
                    is_ppc={is_ppc}
                    is_logged_in={is_logged_in}
                />
            )
            FooterNav = <Footer is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect} />
            break
    }

    return (
        <LocationProvider
            has_mounted={has_mounted}
            show_cookie_banner={show_cookie_banner}
            toggleModal={toggleModal}
            setModalPayload={setModalPayload}
        >
            {Navigation}
            <Main
                margin_top={margin_top}
                is_static={is_static}
                use_eu_margin={should_use_eu_margin}
            >
                {children}
            </Main>
            {show_cookie_banner && (
                <CookieBanner
                    onAccept={onAccept}
                    onDecline={onDecline}
                    is_open={show_cookie_banner}
                />
            )}
            {!no_live_chat && <LiveChat is_logged_in={is_logged_in} />}
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

CFDWarning.propTypes = {
    is_ppc: PropTypes.bool,
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    interim_type: PropTypes.string,
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    margin_top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    nav_type: PropTypes.string,
    no_live_chat: PropTypes.bool,
    no_login_signup: PropTypes.bool,
    type: PropTypes.string,
}

export default Layout
