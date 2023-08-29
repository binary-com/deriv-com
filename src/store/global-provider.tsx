import React from 'react'
import { RudderStack } from '@deriv/analytics'
import { BreakpointsProvider } from './breakpoints-context'
import { PopupProvider } from './popup-context'
import { RegionProvider } from './region-context'
import { WebsiteStatusProvider } from './website-status-context'
import { MediaContextProvider } from 'themes/media'

// TODO: Remove this temporary debug logs
// eslint-disable-next-line
// @ts-ignore
typeof window !== 'undefined' && (window.RudderStack = RudderStack)
// eslint-disable-next-line
console.log(
    process.env.RUDDERSTACK_URL,
    process.env.RUDDERSTACK_STAGING_KEY,
    process.env.RUDDERSTACK_PRODUCTION_KEY,
)

type GlobalProviderProps = { children: React.ReactNode }

const GlobalProvider = ({ children }: GlobalProviderProps) => (
    <BreakpointsProvider>
        <PopupProvider>
            <WebsiteStatusProvider>
                <RegionProvider>
                    <MediaContextProvider>{children}</MediaContextProvider>
                </RegionProvider>
            </WebsiteStatusProvider>
        </PopupProvider>
    </BreakpointsProvider>
)

export default GlobalProvider
