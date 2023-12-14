/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactNode, useCallback } from 'react'
import {
    LanguageProvider,
    SharedLink,
    SharedLinkProps,
    SharedLinkProvider,
} from '@deriv-com/providers'
import { main_wrapper } from './style.module.scss'
import { langItemsROW } from './data'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import PpcProvider from 'features/contexts/ppc-campaign/ppc.provider'
import { getLanguage, isBrowser } from 'common/utility'
import LayoutOverlay from 'features/components/molecules/layout-overlay'
import BrowserUpdateAlert from 'features/components/molecules/browser-update-alert'
import apiManager from 'common/websocket'
import 'swiper/swiper-bundle.min.css'
import 'features/styles/app.scss'
import { useLangDirection } from 'components/hooks/use-lang-direction'
import { LocaleContext, LocalizedLink } from 'components/localization'
import useLangSwitcher from 'features/components/molecules/language-switcher/useLangSwitcher'
interface LayoutProps {
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    hide_layout_overlay?: boolean
    children: ReactNode
}

if (isBrowser()) {
    const currentLanguage = getLanguage() ?? 'en'
    apiManager.init(currentLanguage)
}

const Layout = ({
    children,
    is_ppc = false,
    is_ppc_redirect = false,
    hide_layout_overlay = false,
}: LayoutProps) => {
    const { has_platform } = usePlatformQueryParam()

    const lang_direction = useLangDirection()
    const { locale } = React.useContext(LocaleContext)
    const formatted_lang = locale.replace('_', '-')

    React.useEffect(() => {
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

    const GatsbySharedLink: SharedLink = ({ href = '/', ...rest }: SharedLinkProps) => {
        const link = href as `/${string}`
        const isExternalUrl = /(http(s?)):\/\//i.test(link.toString())
        if (isExternalUrl) {
            return (
                // @ts-ignore
                <LocalizedLink to={link} external {...rest} />
            )
        }
        return (
            // @ts-ignore
            <LocalizedLink to={link} {...rest} />
        )
    }

    //Handle page layout when redirection from mobile app.
    if (has_platform) {
        return <>{children}</>
    }

    return (
        <SharedLinkProvider DerivLink={GatsbySharedLink}>
            <PpcProvider is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect}>
                <LanguageProvider
                    langItems={langItemsROW}
                    onLangSelect={onLanguageChange}
                    activeLanguage={activeLang}
                >
                    <main className={main_wrapper}>{children}</main>
                    <BrowserUpdateAlert />
                    {!hide_layout_overlay && <LayoutOverlay />}
                </LanguageProvider>
            </PpcProvider>
        </SharedLinkProvider>
    )
}

export default Layout
