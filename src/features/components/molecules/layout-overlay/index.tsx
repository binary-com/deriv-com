import React, { lazy, useEffect, useState } from 'react'
import pMinDelay from 'p-min-delay'
import loadable from '@loadable/component'
import { overlay_container } from './layout-overlay.module.scss'
import Flex from 'features/components/atoms/flex-box'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { getLocationPathname, getLanguage } from 'common/utility'
import SuspenseHelper from 'features/components/atoms/suspense-helper'

const LiveChatButton = loadable(() => pMinDelay(import('./live-chat-button'), 5000))
const WhatsappButton = loadable(() => pMinDelay(import('./whats-app-button'), 5000))
const CookieBanner = lazy(() => import('./cookie-banner'))
const CfdWarningBanner = lazy(() => import('./cfd-warning-banner'))

const LayoutOverlay = () => {
    const is_rtl = useIsRtl()
    const [is_home, setIsHome] = useState(false)

    const isHomePage = () => {
        const currentPath = getLocationPathname()
        const language = getLanguage()

        return currentPath === `/${language}/` || currentPath === '/'
    }
    useEffect(() => {
        setIsHome(isHomePage())
    }, [])
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
                    <SuspenseHelper fallback={<></>}>
                        <CookieBanner />
                    </SuspenseHelper>
                </Flex.Box>
                <Flex.Box direction="col">
                    <LiveChatButton />
                    <WhatsappButton />
                </Flex.Box>
            </Flex.Box>
            {is_home && (
                <SuspenseHelper fallback={<></>}>
                    <CfdWarningBanner />
                </SuspenseHelper>
            )}
        </Flex.Box>
    )
}

export default LayoutOverlay
