import React from 'react'
import Loadable from '@loadable/component'
import styled from 'styled-components'
import CFDWarningBanner from './cfd-warning-banner'
import { useIsRtl } from 'components/hooks/use-isrtl'

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
        <OverlayContainer is_rtl={is_rtl}>
            <LiveChat />
            <WhatsApp />
            <CFDWarningBanner is_ppc={is_ppc} />
        </OverlayContainer>
    )
}

export default LayoutOverlay
