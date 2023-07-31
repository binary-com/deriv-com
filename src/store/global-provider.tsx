import React from 'react'
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react'
import { BreakpointsProvider } from './breakpoints-context'
import { PopupProvider } from './popup-context'
import { RegionProvider } from './region-context'
import { WebsiteStatusProvider } from './website-status-context'
import { MediaContextProvider } from 'themes/media'
import { getClientInformation, getDomain, getLanguage } from 'common/utility'

type GlobalProviderProps = { children: React.ReactNode }

let growthbook
if (typeof window !== 'undefined') {
    import('@deriv/analytics').then(({ RudderStack }) => {
        RudderStack.init()
        growthbook = new GrowthBook({
            apiHost: 'https://cdn.growthbook.io',
            clientKey: 'sdk-0aHHaxKhwn0bP1HE',
            enableDevMode: true,
            trackingCallback: (experiment, result) => {
                RudderStack.track('Experiment Viewed', {
                    experimentId: experiment.key,
                    variationId: result.variationId,
                })
            },
        })
        growthbook.loadFeatures({ autoRefresh: true })

        const language = getLanguage()
        const domain = getDomain()
        const client_information = getClientInformation(domain)

        if (client_information) {
            RudderStack.identifyEvent(client_information.loginid, {
                language,
            })
        }
    })
}

const GlobalProvider = ({ children }: GlobalProviderProps) => (
    <GrowthBookProvider growthbook={growthbook}>
        <BreakpointsProvider>
            <PopupProvider>
                <WebsiteStatusProvider>
                    <RegionProvider>
                        <MediaContextProvider>{children}</MediaContextProvider>
                    </RegionProvider>
                </WebsiteStatusProvider>
            </PopupProvider>
        </BreakpointsProvider>
    </GrowthBookProvider>
)

export default GlobalProvider
