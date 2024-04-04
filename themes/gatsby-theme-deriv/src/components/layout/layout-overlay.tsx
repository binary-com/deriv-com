import React from 'react'
import Loadable from '@loadable/component'
import styled from 'styled-components'
import { useIsRtl } from 'components/hooks/use-isrtl'
import BannerAlert from 'components/custom/_banner-alert'
import { bannerTypes } from 'common/constants'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'

const LiveChat = Loadable(() => import('./livechat'))
const WhatsApp = Loadable(() => import('./whatsapp'))

const OverlayContainer = styled.div<{ is_rtl: boolean }>`
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: ${({ is_rtl }) => (is_rtl ? 'flex-start' : 'flex-end')};
`

const LayoutOverlay = () => {
    const is_rtl = useIsRtl()
    const isLiveChat = useThirdPartyFlags('chat.live_chat')
    const isWhatsappChat = useThirdPartyFlags('chat.whatsapp_chat')

    return (
        <OverlayContainer is_rtl={is_rtl} id="overlay-container">
            {isLiveChat && <LiveChat />}
            {isWhatsappChat && <WhatsApp />}
            <BannerAlert bannerType={bannerTypes.cookieBanner} />
        </OverlayContainer>
    )
}

export default LayoutOverlay
