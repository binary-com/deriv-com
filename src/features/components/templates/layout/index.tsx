import React, { ReactNode, useState } from 'react'
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import PpcProvider from 'features/contexts/ppc-campaign/ppc.provider'
import CfdWarningBanner from 'features/components/molecules/layout-overlay/cfd-warning-banner'
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
    children: ReactNode
}

if (isBrowser()) {
    const currentLanguage = getLanguage() ?? 'en'
    apiManager.init(currentLanguage)
}

const Layout = ({ children, is_ppc = false, is_ppc_redirect = false }: LayoutProps) => {
    const { has_platform } = usePlatformQueryParam()
    const [expanded, setExpanded] = useState(false)

    const toggleExpansion = () => {
        setExpanded((prev) => !prev)
    }
    //Handle page layout when redirection from mobile app.
    if (has_platform) {
        return <>{children}</>
    }

    return (
        <PpcProvider is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect}>
            <main>{children}</main>
            <BrowserUpdateAlert />
            <LayoutOverlay expanded={expanded} />
            <CfdWarningBanner expanded={expanded} toggleExpansion={toggleExpansion} />
        </PpcProvider>
    )
}

export default Layout
