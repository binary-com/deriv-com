import React, { ReactNode } from 'react'
import Footer from '../footer'
import apiManager from 'features/websocket'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import PpcProvider from 'features/contexts/ppc-campaign/ppc.provider'
import { isBrowser } from 'common/utility'
import NonEuRedirectAlert from 'features/components/molecules/non-eu-redirect-alert'
import BrowserUpdateAlert from 'features/components/molecules/browser-update-alert'
import LayoutOverlay from 'features/components/molecules/layout-overlay'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import 'features/styles/app.scss'
interface LayoutProps {
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    children: ReactNode
}

if (isBrowser()) {
    apiManager.init()
}

const Layout = ({ children, is_ppc = false, is_ppc_redirect = false }: LayoutProps) => {
    const { has_platform } = usePlatformQueryParam()

    //Handle page layout when redirection from mobile app.
    if (has_platform) {
        return <>{children}</>
    }

    return (
        <PpcProvider is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect}>
            <main>{children}</main>
            <Footer />
            <NonEuRedirectAlert />
            <BrowserUpdateAlert />
            <LayoutOverlay />
        </PpcProvider>
    )
}

export default Layout
