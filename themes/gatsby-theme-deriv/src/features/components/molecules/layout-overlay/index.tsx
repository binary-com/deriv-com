import React, { useCallback } from 'react'
import pMinDelay from 'p-min-delay'
import loadable from '@loadable/component'
import { overlay_container } from './layout-overlay.module.scss'
import CfdWarningBanner from './cfd-warning-banner'
import Flex from 'features/components/atoms/flex-box'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'
import { useCookieBanner } from 'components/hooks/use-cookie-banner'

const LiveChatButton = loadable(() => pMinDelay(import('./live-chat-button'), 5000))
const WhatsappButton = loadable(() => pMinDelay(import('./whats-app-button'), 5000))
const CookieBanner = loadable(() => pMinDelay(import('./cookie-banner'), 5000))
const WarningBanner = loadable(() =>
    pMinDelay(import('features/components/quill/layout-overlay/warnings-alerts'), 5000),
)

const LayoutOverlay = () => {
    const cookie = useCookieBanner()
    const is_rtl = useIsRtl()
    const [is_mounted] = usePageLoaded()
    const isLiveChat = useThirdPartyFlags('chat.live_chat')
    const isWhatsappChat = useThirdPartyFlags('chat.whatsapp_chat')

    const popup_show = useCallback(() => {
        return cookie?.should_show ? (
            <div
                className={clsx(
                    'flex basis-6/12 flex-grow',
                    is_rtl ? 'justify-end' : 'justify-start',
                )}
            >
                <CookieBanner />
            </div>
        ) : (
            <div className={'flex flex-grow justify-center'}>
                <WarningBanner />
            </div>
        )
    }, [cookie?.should_show])

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
                {popup_show()}
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
