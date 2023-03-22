import React from 'react'
import { overlay_container } from './layout-overlay.module.scss'
import LiveChatButton from './live-chat-button'
import WhatsappButton from './whats-app-button'
import CookieBanner from './cookie-banner'
import CfdWarningBanner from './cfd-warning-banner'
import Container from 'features/components/atoms/container'

const LayoutOverlay = () => {
    return (
        <Container.Fixed className={overlay_container}>
            <LiveChatButton />
            <WhatsappButton />
            <CookieBanner />
            <CfdWarningBanner />
        </Container.Fixed>
    )
}

export default LayoutOverlay
