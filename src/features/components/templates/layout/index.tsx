import React, { ReactNode } from 'react'
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import PpcProvider from 'features/contexts/ppc-campaign/ppc.provider'
import { getLanguage, isBrowser } from 'common/utility'
import BrowserUpdateAlert from 'features/components/molecules/browser-update-alert'
import apiManager from 'common/websocket'
import 'swiper/swiper-bundle.min.css'
import 'features/styles/app.scss'

const LayoutOverlay = loadable(() =>
    pMinDelay(import('features/components/molecules/layout-overlay'), 5000),
)
interface LayoutProps {
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    disable_ws?: boolean
    children: ReactNode
}

const Layout = ({
    children,
    is_ppc = false,
    is_ppc_redirect = false,
    disable_ws = false,
}: LayoutProps) => {
    const { has_platform } = usePlatformQueryParam()
    if (isBrowser() && !disable_ws) {
        const currentLanguage = getLanguage() ?? 'en'
        apiManager.init(currentLanguage)
    }

    //Handle page layout when redirection from mobile app.
    if (has_platform) {
        return <>{children}</>
    }

    return (
        <PpcProvider is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect}>
            <main>{children}</main>
            <BrowserUpdateAlert />
            <LayoutOverlay />
        </PpcProvider>
    )
}

export default Layout
