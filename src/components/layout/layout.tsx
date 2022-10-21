import React, { useState, ReactNode, Ref } from 'react'
import Loadable from '@loadable/component'
import styled from 'styled-components'
import { closestMatch, distance } from 'closest-match'
import useGTMData from '../hooks/use-gtm-data'
import { LocationProvider } from './location-context'
import NavAcademy from './nav/nav-academy'
import NavStatic from './nav/nav-static'
import Nav from './nav/nav'
import NavTransparent from './nav/nav-transparent'
import NavCareers from './nav/nav-careers'
import NavPartners from './nav/nav-partner'
import NavInterim from './nav/nav-interim'
import NavSecurity from './nav/nav-security'
import NavJumpIndice from './nav/nav-jump-indices'
import EURedirect, { useModal } from 'components/custom/_eu-redirect-modal'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import NonEuRedirectPopUp from 'components/custom/_non-eu-redirect-popup'
import { useCountryRule } from 'components/hooks/use-country-rule'
import CookieBanner from 'components/custom/cookie-banner'
import { CookieStorage } from 'common/storage'
import { isBrowser, handleRedirect, isEuDomain } from 'common/utility'
import { Localize } from 'components/localization'
import { Text } from 'components/elements'
import UKAccountClosureModal from 'components/layout/modal/uk_account_closure_modal'
import device from 'themes/device'
import { DerivStore, useDerivWS } from 'store'
import { Container } from 'components/containers'
import { loss_percent } from 'common/constants'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

type CFDWarningProps = {
    is_ppc: boolean
}

type LayoutProps = {
    children: ReactNode
    interim_type?: 'affiliate' | 'dbot' | 'deriv' | 'dmt5' | 'faq'
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    margin_top?: number | string
    no_live_chat?: boolean
    no_login_signup?: boolean
    type?: string
}

type MainType = {
    is_static?: boolean
    margin_top?: number | string
}

export type ModalPayloadType = {
    to: string
    ref: Ref<HTMLAnchorElement>
    rel: string
    target: string
    aria_label: string
}

const Footer = Loadable(() => import('./footer'))
const BeSquareFooter = Loadable(() => import('./besquare/footer'))
const LiveChat = Loadable(() => import('./livechat'))
const WhatsApp = Loadable(() => import('./whatsapp'))

const has_dataLayer = isBrowser() && window.dataLayer

const TRACKING_STATUS_KEY = 'tracking_status'
const tracking_status_cookie = new CookieStorage(TRACKING_STATUS_KEY)

const CFDWrapper = styled.section`
    background-color: var(--color-grey-25);
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 7.4rem;
    height: fit-content;
    padding: 1.7rem 0 1.5rem;
    position: fixed;
    bottom: 0;
    box-shadow: inset 0 1px 0 0 var(--color-grey-21);
    z-index: 100;
    @media (max-width: 826px) {
        padding: 0.8rem 0;
        height: 12.4rem;
    }
    @media (max-width: 710px) {
        height: 10.8rem;
    }
    @media (max-width: 538px) {
        height: 14rem;
    }
`

const CFDContainer = styled(Container)`
    @media ${device.bp1060} {
        width: 90%;
    }
    @media ${device.tabletL} {
        width: 95%;
    }
    @media ${device.tabletS} {
        margin: 1rem auto;
    }
    @media ${device.mobileL} {
        margin: 2rem auto;
    }
    @media ${device.mobileM} {
        margin: 1rem auto;
    }
`

const CFDText = styled(Text)`
    font-size: 14px;

    @media ${device.tablet} {
        font-size: 12px;
    }
    @media ${device.mobileL} {
        font-size: 10px;
    }
`

export const CFDWarning = ({ is_ppc }: CFDWarningProps) => {
    const { is_uk_eu } = useCountryRule()

    if (is_ppc || is_uk_eu) {
        return (
            <CFDWrapper>
                <CFDContainer>
                    <CFDText>
                        <Localize
                            translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. <0>{{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                            values={{ loss_percent }}
                            components={[<strong key={0} />]}
                        />
                    </CFDText>
                </CFDContainer>
            </CFDWrapper>
        )
    }
    return <></>
}

const Main = styled.main<MainType>`
    margin-top: ${(props) => (props.margin_top && `${props.margin_top}rem`) || '7rem'};
    background: var(--color-white);
    height: 100%;
    position: relative;
`

const Layout = ({
    children,
    interim_type,
    is_ppc = false,
    is_ppc_redirect = false,
    margin_top = '',
    no_live_chat = false,
    no_login_signup = false,
    type = '',
}: LayoutProps) => {
    const [is_mounted] = usePageLoaded()
    const { show_non_eu_popup, setShowNonEuPopup, academy_data } = React.useContext(DerivStore)
    const { is_loading, is_uk_eu } = useCountryRule()
    const [show_cookie_banner, setShowCookieBanner] = React.useState(false)
    const [show_modal, toggleModal, closeModal] = useModal()
    const [modal_payload, setModalPayload] = React.useState({} as ModalPayloadType)
    const [gtm_data, setGTMData] = useGTMData()
    const [is_redirection_applied, setRedirectionApplied] = useState(false)
    const { send } = useDerivWS()
    const { has_platform } = usePlatformQueryParam()

    const is_static = type === 'static'

    // Allow tracking cookie banner setup
    React.useEffect(() => {
        if (!is_loading) {
            const tracking_status = tracking_status_cookie.get(TRACKING_STATUS_KEY)
            const is_tracking_accepted = tracking_status === 'accepted'
            const allow_tracking = (!is_uk_eu || is_tracking_accepted) && !gtm_data && has_dataLayer

            if (is_uk_eu && !tracking_status) setShowCookieBanner(true)

            if (allow_tracking) {
                window.onload = () => {
                    window.setTimeout(() => {
                        if (is_tracking_accepted) {
                            setGTMData({ event: 'allow_tracking' })
                        }
                    }, 2000)
                }
            }
        }
    }, [is_uk_eu])

    React.useEffect(() => {
        if (!is_redirection_applied) {
            send({ website_status: 1 }, (response) => {
                if (!response.error) {
                    const {
                        website_status: { clients_country },
                    } = response

                    const current_client_country = clients_country || ''
                    const client_information_cookie = new CookieStorage('client_information')
                    const residence = client_information_cookie.get('residence')
                    setRedirectionApplied(true)
                    !isEuDomain() &&
                        handleRedirect(residence, current_client_country, window.location.hostname)
                }
            })
        }
    }, [is_redirection_applied])

    React.useEffect(() => {
        if (window.location.pathname.includes('academy/blog/posts/')) {
            const slugs = academy_data.blog.map((item) => item.slug)
            const current_page = window.location.pathname.split('/')[4]
            if (!slugs.includes(current_page)) {
                const closest_slug = closestMatch(current_page, slugs)
                const character_distance = distance(current_page, closest_slug)
                if (character_distance < 10) {
                    window.location.pathname = `academy/blog/posts/${closest_slug}`
                }
            }
        }
    }, [])

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
    let Navigation
    let FooterNav = <></>
    switch (type) {
        case 'academy':
            Navigation = <NavAcademy />
            FooterNav = <Footer academy={true} />
            break
        case 'static':
            Navigation = <NavStatic is_ppc={is_ppc} />
            break
        case 'interim':
            Navigation = <NavInterim interim_type={interim_type} />
            break
        case 'partners':
            Navigation = <NavPartners hide_login_signup={no_login_signup} />
            FooterNav = <Footer />
            break
        case 'security':
            Navigation = <NavSecurity />
            FooterNav = <Footer />
            break
        case 'ebook':
            Navigation = <Nav hide_signup_login />
            FooterNav = <Footer />
            break
        case 'landing-page':
            Navigation = <NavInterim landing_type />
            FooterNav = <Footer no_footer_links />
            break
        case 'jump-indices':
            Navigation = <NavJumpIndice />
            FooterNav = <Footer is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect} />
            break
        case 'besquare':
            Navigation = <NavCareers is_besquare />
            FooterNav = <BeSquareFooter />
            break
        case 'careers':
            Navigation = <NavCareers />
            FooterNav = <Footer no_language={true} type={type} />
            break
        case 'transparent':
            Navigation = <NavTransparent is_ppc_redirect={is_ppc_redirect} is_ppc={is_ppc} />
            FooterNav = <Footer is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect} />
            break
        default:
            Navigation = <Nav is_ppc_redirect={is_ppc_redirect} is_ppc={is_ppc} />
            FooterNav = <Footer is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect} />
            break
    }
    //Handle page layout when redirection from mobile app.
    if (has_platform) {
        return (
            <Main margin_top={'0'} is_static={is_static}>
                {children}
            </Main>
        )
    }
    return (
        <LocationProvider
            has_mounted={is_mounted}
            show_cookie_banner={show_cookie_banner}
            toggleModal={toggleModal}
            setModalPayload={setModalPayload}
        >
            {Navigation}
            <Main margin_top={margin_top} is_static={is_static}>
                {children}
            </Main>
            {show_cookie_banner && (
                <CookieBanner
                    onAccept={onAccept}
                    onDecline={onDecline}
                    is_open={show_cookie_banner}
                />
            )}

            {!no_live_chat && <LiveChat is_banner_shown={show_cookie_banner} />}
            <WhatsApp />
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
            <UKAccountClosureModal />
            {show_non_eu_popup && (
                <NonEuRedirectPopUp
                    is_open={show_non_eu_popup}
                    setShowNonEuPopup={setShowNonEuPopup}
                />
            )}
        </LocationProvider>
    )
}

export default Layout
