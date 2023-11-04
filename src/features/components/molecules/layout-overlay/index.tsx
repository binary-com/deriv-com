import React, { Suspense, lazy } from 'react'
import pMinDelay from 'p-min-delay'
import loadable from '@loadable/component'
import { overlay_container } from './layout-overlay.module.scss'
import CfdWarningBanner from './cfd-warning-banner'
import Flex from 'features/components/atoms/flex-box'
import { useIsRtl } from 'components/hooks/use-isrtl'

const LiveChatButton = loadable(() => pMinDelay(import('./live-chat-button'), 3000))
const CookieBanner = lazy(() => pMinDelay(import('./cookie-banner'), 5000))

const LayoutOverlay = () => {
    const is_rtl = useIsRtl()
    return (
        <Flex.Box
            id="overlay-container"
            container="fixed"
            align="stretch"
            justify={'end'}
            direction="col"
            className={overlay_container}
        >
            <Flex.Box
                id="overlay-container"
                direction="col-reverse"
                md={{ direction: is_rtl ? 'row-reverse' : 'row' }}
                justify="between"
                align="end"
            >
                <Flex.Box justify={is_rtl ? 'end' : 'start'} basis="6-12" grow={'1'}>
                    <Suspense fallback={<></>}>
                        <CookieBanner />
                    </Suspense>
                </Flex.Box>
                <Flex.Box direction="col">
                    <LiveChatButton />
                </Flex.Box>
            </Flex.Box>
            <CfdWarningBanner />
        </Flex.Box>
    )
}

export default LayoutOverlay
