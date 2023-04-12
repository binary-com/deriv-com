import React, { ReactNode, Ref } from 'react'
import Loadable from '@loadable/component'
import styled, { StyleSheetManager } from 'styled-components'
import { LocationProvider } from './location-context'
import NavStatic from './nav/nav-static'
import Nav from './nav/nav'
import NavTransparent from './nav/nav-transparent'
import NavCareers from './nav/nav-careers'
import NavPartners from './nav/nav-partner'
import NavMarkets from './nav/nav-markets'
import NavInterim from './nav/nav-interim'
import NavSecurity from './nav/nav-security'
import NavJumpIndice from './nav/nav-jump-indices'
import Footer from './footer'
import LayoutOverlay from './layout-overlay'
import EURedirect, { useModal } from 'components/custom/_eu-redirect-modal'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import NonEuRedirectPopUp from 'components/custom/_non-eu-redirect-popup'
import BrowserUpdateAlertModal from 'components/layout/modal/browser_update_alert_modal'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import usePopup from 'components/hooks/use-popup'
import GlobalStyle from 'themes/global-style'
import { plugin } from 'themes/plugin'
import { getLanguage, isBrowser } from 'common/utility'
import apiManager from 'common/websocket'
import RebrandingLayout from 'features/components/templates/layout'
import RebrandingFooter from 'features/components/templates/footer'
import MainNav from 'features/components/templates/navigation/main-nav'

const LoadableFooter = Loadable(() => import('./footer'))
const BeSquareFooter = Loadable(() => import('./besquare/footer'))

type LayoutProps = {
    children: ReactNode
    interim_type?: 'affiliate' | 'dbot' | 'deriv' | 'dmt5' | 'faq'
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    margin_top?: number | string
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

const Main = styled.main<MainType>`
    margin-top: ${(props) => (props.margin_top && `${props.margin_top}rem`) || '7rem'};
    background: var(--color-white);
    height: 100%;
    position: relative;
`

if (isBrowser()) {
    const currentLanguage = getLanguage() ?? 'en'
    apiManager.init(currentLanguage)
}

const Layout = ({
    children,
    interim_type,
    is_ppc = false,
    is_ppc_redirect = false,
    margin_top = '',
    no_login_signup = false,
    type = '',
}: LayoutProps) => {
    const [is_mounted] = usePageLoaded()
    const { show_non_eu_popup, setShowNonEuPopup } = usePopup()
    const [show_modal, toggleModal, closeModal] = useModal()
    const [modal_payload, setModalPayload] = React.useState({} as ModalPayloadType)
    const { has_platform } = usePlatformQueryParam()

    const is_static = type === 'static'

    // Handle navigation types
    let Navigation
    switch (type) {
        case 'noNav':
            Navigation = <></>
            break
        case 'static':
            Navigation = <NavStatic />
            break
        case 'interim':
            Navigation = <NavInterim interim_type={interim_type} />
            break
        case 'partners':
            Navigation = <NavPartners hide_login_signup={no_login_signup} />
            break
        case 'markets':
            Navigation = <NavMarkets />
            break
        case 'security':
            Navigation = <NavSecurity />
            break
        case 'ebook':
            Navigation = <Nav hide_signup_login />
            break
        case 'landing-page':
            Navigation = <NavInterim landing_type />
            break
        case 'jump-indices':
            Navigation = <NavJumpIndice />
            break
        case 'besquare':
            Navigation = <NavCareers is_besquare />
            break
        case 'careers':
            Navigation = <NavCareers />
            break
        case 'transparent':
            Navigation = <NavTransparent is_ppc_redirect={is_ppc_redirect} is_ppc={is_ppc} />
            break
        case 'payment-methods':
            Navigation = <Nav />
            break
        default:
            Navigation = <Nav is_ppc_redirect={is_ppc_redirect} is_ppc={is_ppc} />
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
        <RebrandingLayout is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect}>
            {/* {Navigation} */}
            <MainNav />
            <LocationProvider
                has_mounted={is_mounted}
                toggleModal={toggleModal}
                setModalPayload={setModalPayload}
            >
                <GlobalStyle />
                <StyleSheetManager stylisPlugins={[plugin]}>
                    <>
                        <Main margin_top={margin_top} is_static={is_static}>
                            {children}
                        </Main>
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
                        <BrowserUpdateAlertModal />
                        {show_non_eu_popup && (
                            <NonEuRedirectPopUp
                                is_open={show_non_eu_popup}
                                setShowNonEuPopup={setShowNonEuPopup}
                            />
                        )}
                        <LayoutOverlay is_ppc={is_ppc} />
                    </>
                </StyleSheetManager>
            </LocationProvider>
            <RebrandingFooter />
        </RebrandingLayout>
    )
}

export default Layout
