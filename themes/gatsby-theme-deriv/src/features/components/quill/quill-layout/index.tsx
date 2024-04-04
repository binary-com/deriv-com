import React, { ReactNode, useCallback, useContext, useEffect } from 'react'
import { LanguageProvider, SharedLinkProvider } from '@deriv-com/providers'
import { BreakpointProvider, ThemeProvider } from '@deriv/quill-design'
import BrowserUpdateAlert from '../browser-update-alert'
import LayoutOverlay from '../layout-overlay'
import GatsbySharedLink from '../shared-link'
import WarningBanner from '../layout-overlay/warning-banner'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import PpcProvider from 'features/contexts/ppc-campaign/ppc.provider'
import { getLanguage, isBrowser } from 'common/utility'
import apiManager from 'common/websocket'
import { useLangDirection } from 'components/hooks/use-lang-direction'
import { LocaleContext } from 'components/localization'
import useLangSwitcher from 'features/components/molecules/language-switcher/useLangSwitcher'
import { langItemsROW } from 'features/pages/home/data'
import FloatingCtaProvider from 'features/contexts/floating-cta/cta.provider'
import BuildVariantProvider from 'features/contexts/build-variant/build-variant.provider'
import { BuildVariantContextType } from 'features/contexts/build-variant/build-variant.context'

interface LayoutProps {
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    hide_layout_overlay?: boolean
    children: ReactNode
    region: BuildVariantContextType['region']
}

if (isBrowser()) {
    const currentLanguage = getLanguage() ?? 'en'
    apiManager.init(currentLanguage)
}

const QuillLayout = ({
    children,
    is_ppc = false,
    is_ppc_redirect = false,
    hide_layout_overlay = false,
    region = 'row',
}: LayoutProps) => {
    const { has_platform } = usePlatformQueryParam()

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
        return <>{children}</>
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
                        <BreakpointProvider>
                            <ThemeProvider theme="light">
                                <FloatingCtaProvider>
                                    <WarningBanner/>
                                    <main className="relative max-w-[256rem] mx-auto">
                                        {children}
                                    </main>
                                    <BrowserUpdateAlert />
                                    {!hide_layout_overlay && <LayoutOverlay />}
                                </FloatingCtaProvider>
                            </ThemeProvider>
                        </BreakpointProvider>
                    </LanguageProvider>
                </PpcProvider>
            </SharedLinkProvider>
        </BuildVariantProvider>
    )
}

export default QuillLayout
