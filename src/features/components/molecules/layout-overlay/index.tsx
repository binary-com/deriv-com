import React from 'react'
import { overlay_container } from './layout-overlay.module.scss'
import LiveChatButton from './live-chat-button'
import WhatsappButton from './whats-app-button'
import CookieBanner from './cookie-banner'
import CfdWarningBanner from './cfd-warning-banner'
import Flex from 'features/components/atoms/flex-box'
import { useIsRtl } from 'components/hooks/use-isrtl'

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
                    <CookieBanner />
                </Flex.Box>
                <Flex.Box direction="col">
                    <LiveChatButton />
                    <WhatsappButton />
                </Flex.Box>
            </Flex.Box>
            <CfdWarningBanner />
        </Flex.Box>
    )
}

export default LayoutOverlay
