import React, { useEffect, useRef } from 'react'
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react'
import { useAnalyticData } from 'features/hooks/analytic/use-analytic-data'
import { getClientInformation, getDomain, getLanguage } from 'common/utility'
import { growthbook_client_key } from 'common/constants'

const DerivGrowthBookProvider = ({ children }: { children: React.ReactNode }) => {
    const { anonymous_id } = useAnalyticData()
    const growthbook = useRef<GrowthBook>()
    useEffect(() => {
        growthbook.current = new GrowthBook({
            apiHost: 'https://cdn.growthbook.io',
            clientKey: growthbook_client_key,
            enableDevMode: true,
            attributes: {
                id: anonymous_id,
            },
            trackingCallback: (experiment, result) => {
                window.rudderanalytics.track('experiment_viewed', {
                    experimentId: experiment.key,
                    variationId: result.variationId,
                })
            },
        })
        growthbook.current.loadFeatures({
            autoRefresh: true,
        })

        const language = getLanguage()
        const domain = getDomain()
        const client_information = getClientInformation(domain)

        if (client_information) {
            window.rudderanalytics.identifyEvent(client_information.loginid, {
                language,
            })
        }
    }, [])

    return <GrowthBookProvider growthbook={growthbook.current}>{children}</GrowthBookProvider>
}

export default DerivGrowthBookProvider
