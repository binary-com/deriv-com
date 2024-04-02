import React from 'react'
import pMinDelay from 'p-min-delay'
import loadable from '@loadable/component'
import { overlay_container } from './layout-overlay.module.scss'
import CfdWarningBanner from './cfd-warning-banner'
import Flex from 'features/components/atoms/flex-box'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'

const LiveChatButton = loadable(() => pMinDelay(import('./live-chat-button'), 2000))
const WhatsappButton = loadable(() => pMinDelay(import('./whats-app-button'), 2000))
const CookieBanner = loadable(() => pMinDelay(import('./cookie-banner'), 2000))

const LayoutOverlay = () => {
    const is_rtl = useIsRtl()
    const [is_mounted] = usePageLoaded()
    const isLiveChat = useThirdPartyFlags('chat.live_chat')
    const isWhatsappChat = useThirdPartyFlags('chat.whatsapp_chat')

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
                    {isLiveChat && <LiveChatButton />}
                    {isWhatsappChat && <WhatsappButton />}
                </Flex.Box>
            </Flex.Box>
            {is_mounted && <CfdWarningBanner />}
        </Flex.Box>
    )
}

export default LayoutOverlay
