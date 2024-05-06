import React, { useEffect, useState } from 'react'
import pMinDelay from 'p-min-delay'
import loadable from '@loadable/component'
import { overlay_container } from './layout-overlay.module.scss'
import { getLocationPathname } from 'common/utility'
import Flex from 'features/components/atoms/flex-box'
import { useIsRtl } from 'components/hooks/use-isrtl'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'
import { useCookieBanner } from 'components/hooks/use-cookie-banner'

const LiveChatButton = loadable(() => pMinDelay(import('./live-chat-button'), 5000))
const WhatsappButton = loadable(() => pMinDelay(import('./whats-app-button'), 5000))
const CookieBanner = loadable(() => pMinDelay(import('./cookie-banner'), 5000))
const WarningBanner = loadable(() =>
    pMinDelay(import('features/components/quill/layout-overlay/warnings-alerts'), 5000),
)

const defaultProps = {
    hide_live_chat: false,
}

const LayoutOverlay = ({ hide_live_chat }: { hide_live_chat: boolean } = defaultProps) => {
    const cookie = useCookieBanner()
    const is_rtl = useIsRtl()
    const isLiveChat = useThirdPartyFlags('chat.live_chat')
    const isWhatsappChat = useThirdPartyFlags('chat.whatsapp_chat')
    const path_name = getLocationPathname()
    const is_deriv_prime = path_name.includes('deriv-prime')
    const [trigger_warning_popuop, setTriggerWarningPopup] = useState(false)

    useEffect(() => setTriggerWarningPopup(!cookie?.should_show), [cookie.should_show])

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
                {cookie.should_show && !trigger_warning_popuop && (
                    <Flex.Box justify={is_rtl ? 'end' : 'start'} basis="6-12" grow={'1'}>
                        <CookieBanner onCookieBannerClose={() => setTriggerWarningPopup(true)} />
                    </Flex.Box>
                )}

                <Flex.Box justify={'center'} grow={'1'}>
                    <WarningBanner trigger_warning_popuop={trigger_warning_popuop} />
                </Flex.Box>

                {!hide_live_chat && (
                    <Flex.Box direction="col">
                        {isLiveChat && <LiveChatButton />}
                        {!is_deriv_prime && isWhatsappChat && <WhatsappButton />}
                    </Flex.Box>
                )}
            </Flex.Box>
        </Flex.Box>
    )
}

export default LayoutOverlay
