import React, { lazy, Suspense } from 'react'
import clsx from 'clsx'
import pMinDelay from 'p-min-delay'
import loadable from '@loadable/component'
import CfdWarningBanner from './cfd-warning-banner'
import { useIsRtl } from 'components/hooks/use-isrtl'

const LiveChatButton = loadable(() => pMinDelay(import('./live-chat-button'), 5000))
const WhatsappButton = loadable(() => pMinDelay(import('./whats-app-button'), 5000))
const CookieBanner = lazy(() => import('./cookie-banner'))

const LayoutOverlay = () => {
    const is_rtl = useIsRtl()

    return (
        <div
            className="flex flex-col justify-end items-stretch w-full fixed pointer-events-none inset-50 z-40"
            id="overlay-container"
        >
            <div
                className={clsx(
                    'flex flex-col-reverse justify-between items-end',
                    is_rtl ? 'md:flex-row-reverse' : 'md:flex-row',
                )}
            >
                <div
                    className={clsx(
                        'flex basis-6/12 flex-grow',
                        is_rtl ? 'justify-end' : 'justify-start',
                    )}
                >
                    <Suspense fallback={<></>}>
                        <CookieBanner />
                    </Suspense>
                </div>
                <div className="flex flex-col">
                    <LiveChatButton />
                    <WhatsappButton />
                </div>
            </div>
            <CfdWarningBanner />
        </div>
    )
}

export default LayoutOverlay
