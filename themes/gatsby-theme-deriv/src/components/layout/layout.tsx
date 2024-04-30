/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactNode, Ref, useCallback, useContext, useEffect, useState } from 'react'
import loadable from '@loadable/component'
import styled from 'styled-components'
import { LanguageProvider, SharedLinkProvider } from '@deriv-com/providers'
import { LocationProvider } from './location-context'
import LayoutOverlay from 'features/components/molecules/layout-overlay'
import EURedirect, { useModal } from 'components/custom/_eu-redirect-modal'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { getLanguage, isBrowser } from 'common/utility'
import apiManager from 'common/websocket'
import StaticNav from 'features/components/templates/navigation/static-nav'
import BugBountyNav from 'features/components/templates/navigation/bug-bounty-nav'
import CareerNav from 'features/components/templates/navigation/career-nav'
import PpcProvider from 'features/contexts/ppc-campaign/ppc.provider'
import AffiliateNav from 'features/components/templates/navigation/affiliates-nav'
import BannerAlert from 'components/custom/_banner-alert'
import { bannerTypes } from 'common/constants'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import { useLangDirection } from 'components/hooks/use-lang-direction'
import { LocaleContext } from 'components/localization'
import useLangSwitcher from 'features/components/molecules/language-switcher/useLangSwitcher'
import { langItemsROW } from 'features/components/templates/layout/data'
import PartnersNav from 'features/components/templates/navigation/partners-nav'
import GatsbySharedLink from 'features/components/quill/shared-link'
import WarningBanner from 'features/components/quill/layout-overlay/warning-banner'
import { BuildVariantContextType } from 'features/contexts/build-variant/build-variant.context'
import BuildVariantProvider from 'features/contexts/build-variant/build-variant.provider'

const RebrandingFooter = loadable(() => import('features/components/templates/footer'))

type LayoutProps = {
    children: ReactNode
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    padding_top?: string
    type?: string
    show_footer?: boolean
    region: BuildVariantContextType['region']
}

type MainType = {
    is_static?: boolean
    padding_top?: string
    type?: string
}

export type ModalPayloadType = {
    to: string
    ref: Ref<HTMLAnchorElement>
    rel: string
    target: string
    aria_label: string
}

const Main = styled.main<MainType>`
    padding-top: ${({ padding_top, type }) =>
        padding_top ? `${padding_top}rem` : type === 'careers' ? '11rem' : '8rem'};
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
    default: <MainRowNavigation />,
    static: <StaticNav />,
    interim: <StaticNav />,

    partners: <PartnersNav />,

    markets: <MainRowNavigation />,

    security: <BugBountyNav />,

    ebook: <StaticNav />,

    'landing-page': <StaticNav />,

    'jump-indices': <StaticNav />,

    besquare: <CareerNav />,

    careers: <CareerNav />,

    'payment-methods': <MainRowNavigation />,

    affiliates: <AffiliateNav />,
}

const Layout = ({
    children,
    is_ppc = false,
    is_ppc_redirect = false,
    padding_top,
    type = 'default',
    show_footer = true,
    region = 'row',
}: LayoutProps) => {
    const [is_mounted] = usePageLoaded()
    const [show_modal, toggleModal, closeModal] = useModal()
    const [modal_payload, setModalPayload] = useState({} as ModalPayloadType)
    const { has_platform } = usePlatformQueryParam()

    const is_static = type === 'static'

    const lang_direction = useLangDirection()
    const { locale } = useContext(LocaleContext)
    const formatted_lang = locale.replace('_', '-')

    useEffect(() => {
        document.body.dir = lang_direction
        document.documentElement.lang = formatted_lang
    }, [lang_direction, formatted_lang])

    //need to update the language data and type
    //here using langauge data from `i18n-config.js`
    const { onSwitchLanguage, currentLang } = useLangSwitcher()
    const activeLang = langItemsROW[currentLang.path.replace('-', '')]

    const onLanguageChange = useCallback(
        (event) => {
            onSwitchLanguage(`/${event.path}/`)
        },
        [onSwitchLanguage],
    )

    //Handle page layout when redirection from mobile app.
    if (has_platform) {
        return (
            <Main padding_top="0" is_static={is_static}>
                {children}
            </Main>
        )
    }
    return (
        <BuildVariantProvider region={region}>
            <SharedLinkProvider DerivLink={GatsbySharedLink}>
                <PpcProvider is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect}>
                    <LanguageProvider
                        langItems={langItemsROW}
                        onLangSelect={onLanguageChange}
                        activeLanguage={activeLang}
                    >
                        <WarningBanner/>
                        {Navs[type]}
                        <LocationProvider
                            has_mounted={is_mounted}
                            toggleModal={toggleModal}
                            setModalPayload={setModalPayload}
                        >
                            <div className="styled-layout">
                                <Main padding_top={padding_top} type={type} is_static={is_static}>
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
                    </LanguageProvider>
                </PpcProvider>
            </SharedLinkProvider>
        </BuildVariantProvider>
    )
}

export default Layout
