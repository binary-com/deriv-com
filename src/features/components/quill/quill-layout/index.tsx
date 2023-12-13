import React, { ReactNode } from 'react'
import BrowserUpdateAlert from '../browser-update-alert'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import PpcProvider from 'features/contexts/ppc-campaign/ppc.provider'
import { getLanguage, isBrowser } from 'common/utility'
import LayoutOverlay from 'features/components/molecules/layout-overlay'
import apiManager from 'common/websocket'
import './global.css'
import '@deriv-com/blocks/style.css'
import '@deriv-com/components/style.css'

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

const QuillLayout = ({
    children,
    is_ppc = false,
    is_ppc_redirect = false,
    hide_layout_overlay = false,
}: LayoutProps) => {
    const { has_platform } = usePlatformQueryParam()

    //Handle page layout when redirection from mobile app.
    if (has_platform) {
        return <>{children}</>
    }

    return (
        <PpcProvider is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect}>
            <main className="mx-auto relative max-w-[256rem]">{children}</main>
            <BrowserUpdateAlert />
            {!hide_layout_overlay && <LayoutOverlay />}
        </PpcProvider>
    )
}

export default QuillLayout
