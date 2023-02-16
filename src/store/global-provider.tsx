import React from 'react'
import { BreakpointsProvider } from './breakpoints-context'
import { PopupProvider } from './popup-context'
import { RegionProvider } from './region-context'
import { WebsiteStatusProvider } from './website-status-context'
import { MediaContextProvider } from 'themes/media'

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
