import React from 'react'
import { BreakpointsProvider } from './breakpoints-context'
import { PopupProvider } from './popup-context'
import { RegionProvider } from './region-context'
import { WebsiteStatusProvider } from './website-status-context'
import DerivGrowthBookProvider from './growthbook-context'
import { MediaContextProvider } from 'themes/media'

type GlobalProviderProps = { children: React.ReactNode }

const GlobalProvider = ({ children }: GlobalProviderProps) => (
    <DerivGrowthBookProvider>
        <BreakpointsProvider>
            <PopupProvider>
                <WebsiteStatusProvider>
                    <RegionProvider>
                        <MediaContextProvider>{children}</MediaContextProvider>
                    </RegionProvider>
                </WebsiteStatusProvider>
            </PopupProvider>
        </BreakpointsProvider>
    </DerivGrowthBookProvider>
)

export default GlobalProvider
