import { useEffect, useRef } from 'react'
import { RudderStack } from '@deriv/analytics/lib'
import { GrowthBook } from '@growthbook/growthbook-react'
import { useAnalyticData } from 'features/hooks/analytic/use-analytic-data'
import { getClientInformation, getDomain, getLanguage } from 'common/utility'
import { growthbook_client_key } from 'common/constants'

export const useGrowthBook = () => {
    const growthbook = useRef<GrowthBook>()
    const { anonymous_id } = useAnalyticData()

    useEffect(() => {
        growthbook.current = new GrowthBook({
            apiHost: 'https://cdn.growthbook.io',
            clientKey: growthbook_client_key ?? ' ',
            enableDevMode: true,
            attributes: {
                id: anonymous_id,
            },
            trackingCallback: (experiment, result) => {
                RudderStack.track('experiment_viewed', {
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
            RudderStack.identifyEvent(client_information.loginid, {
                language,
            })
        }
    }, [])

    return {
        ebook_stocks_heading:
            growthbook.current?.context.features?.['ebook-stocks-heading']?.defaultValue,
        homepage: growthbook.current?.context.features?.['homepage']?.defaultValue,
    }
}
