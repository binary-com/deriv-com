import React from 'react'
import Loadable from '@loadable/component'
import styled from 'styled-components'
import { useIsRtl } from 'components/hooks/use-isrtl'
import BannerAlert from 'components/custom/_banner-alert'
import { bannerTypes } from 'common/constants'

const LiveChat = Loadable(() => import('./livechat'))
const WhatsApp = Loadable(() => import('./whatsapp'))

type TProps = {
    is_ppc: boolean
}

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

const LayoutOverlay = ({ is_ppc = false }: TProps) => {
    const is_rtl = useIsRtl()

    return (
        <OverlayContainer is_rtl={is_rtl} id="overlay-container">
            <LiveChat />
            <WhatsApp />
            <BannerAlert bannerType={bannerTypes.cookieBanner} />
        </OverlayContainer>
    )
}

export default LayoutOverlay
