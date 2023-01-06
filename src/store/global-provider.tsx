import React from 'react'
import { AcademyProvider } from './academy-context'
import { BreakpointsProvider } from './breakpoints-context'
import { PopupProvider } from './popup-context'
import { RegionProvider } from './region-context'
import { WebsiteStatusProvider } from './website-status-context'
import { MediaContextProvider } from 'themes/media'

const GlobalProvider = ({ children }: { children: React.ReactNode }) => (
    <AcademyProvider>
        <BreakpointsProvider>
            <PopupProvider>
                <WebsiteStatusProvider>
                    <RegionProvider>
                        <MediaContextProvider>{children}</MediaContextProvider>
                    </RegionProvider>
                </WebsiteStatusProvider>
            </PopupProvider>
        </BreakpointsProvider>
    </AcademyProvider>
)

export default GlobalProvider
