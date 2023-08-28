import React, { ReactNode, Ref } from 'react'
import styled from 'styled-components'
import { LocationProvider } from './location-context'
import LayoutOverlay from './layout-overlay'
import EURedirect, { useModal } from 'components/custom/_eu-redirect-modal'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { getLanguage, isBrowser } from 'common/utility'
import apiManager from 'common/websocket'
import MainNav from 'features/components/templates/navigation/main-nav'
import StaticNav from 'features/components/templates/navigation/static-nav'
import PaymentAgentAffiliateNav from 'features/components/templates/navigation/payment-agent-nav'
import BugBountyNav from 'features/components/templates/navigation/bug-bounty-nav'
import CareerNav from 'features/components/templates/navigation/career-nav'
import MarketNav from 'features/components/templates/navigation/market-nav'
import RebrandingFooter from 'features/components/templates/footer'
import PpcProvider from 'features/contexts/ppc-campaign/ppc.provider'
import BannerAlert from 'components/custom/_banner-alert'
import { bannerTypes } from 'common/constants'

// const LoadableFooter = Loadable(() => import('./footer'))
// const BeSquareFooter = Loadable(() => import('./besquare/footer'))

type LayoutProps = {
    children: ReactNode
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    padding_top?: string
    type?: string
    show_footer?: boolean
}

type MainType = {
    is_static?: boolean
    padding_top?: string
}

export type ModalPayloadType = {
    to: string
    ref: Ref<HTMLAnchorElement>
    rel: string
    target: string
    aria_label: string
}

const Main = styled.main<MainType>`
    padding-top: ${({ padding_top }) => (padding_top && `${padding_top}rem`) || '7rem'};
    background: var(--color-white);
    height: 100%;
    position: relative;
    position: relative;
    max-inline-size: 256rem;
    margin-inline: auto;
`

if (isBrowser()) {
    const currentLanguage = getLanguage() ?? 'en'
    apiManager.init(currentLanguage)
}

const Navs = {
    noNav: null,
    default: <MainNav />,
    static: <StaticNav />,
    interim: <StaticNav />,

    partners: <PaymentAgentAffiliateNav />,

    markets: <MarketNav />,

    security: <BugBountyNav />,

    ebook: <StaticNav />,

    'landing-page': <StaticNav />,

    'jump-indices': <StaticNav />,

    besquare: <CareerNav />,

    careers: <CareerNav />,

    'payment-methods': <MainNav />,
}

const Layout = ({
    children,
    is_ppc = false,
    is_ppc_redirect = false,
    padding_top,
    type = 'default',
    show_footer = true,
}: LayoutProps) => {
    const [is_mounted] = usePageLoaded()
    const [show_modal, toggleModal, closeModal] = useModal()
    const [modal_payload, setModalPayload] = React.useState({} as ModalPayloadType)
    const { has_platform } = usePlatformQueryParam()

    const is_static = type === 'static'

    //Handle page layout when redirection from mobile app.
    if (has_platform) {
        return (
            <Main padding_top="0" is_static={is_static}>
                {children}
            </Main>
        )
    }
    return (
        <PpcProvider is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect}>
            {Navs[type]}
            <LocationProvider
                has_mounted={is_mounted}
                toggleModal={toggleModal}
                setModalPayload={setModalPayload}
            >
                <div className="styled-layout">
                    <Main padding_top={padding_top} is_static={is_static}>
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
                    <BannerAlert bannerType={bannerTypes.outdatedBrowserBanner} />
                    <LayoutOverlay is_ppc={is_ppc} />
                </div>
            </LocationProvider>
            {show_footer && <RebrandingFooter />}
        </PpcProvider>
    )
}

export default Layout
