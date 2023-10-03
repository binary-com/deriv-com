import { useRef } from 'react'
import Cookies from 'js-cookie'
import { isMobile } from 'react-device-detect'
import { RudderStack } from '@deriv/analytics'
import { GrowthBook } from '@growthbook/growthbook-react'
import { useAnalyticData } from 'features/hooks/analytic/use-analytic-data'
import useWebsiteStatus from 'components/hooks/use-website-status'
import { getLanguage, isBrowser } from 'common/utility'
import { growthbook_client_key, growthbook_decryption_key } from 'common/constants'

export const useGrowthBook = () => {
    const { anonymous_id } = useAnalyticData()
    const { website_status } = useWebsiteStatus()

    const gb = new GrowthBook({
        apiHost: 'https://cdn.growthbook.io',
        clientKey: growthbook_client_key,
        decryptionKey: growthbook_decryption_key,
        enableDevMode: true,
        subscribeToChanges: true,
        attributes: {
            id: anonymous_id,
            country: website_status?.clients_country || ' ',
            user_language: Cookies.get('user_language') || getLanguage(),
            device_language: (isBrowser() && navigator?.language) || ' ',
            device_type: isMobile ? 'mobile' : 'web',
        },
        trackingCallback: (experiment, result) => {
            RudderStack.track(
                'experiment_viewed',
                {
                    experimentId: experiment.key,
                    variationId: result.variationId,
                },
                { is_anonymous: !!anonymous_id },
            )
        },
        // use it for development and testing purpose
        // onFeatureUsage: (featureKey, result) => {
        //     console.log('feature', featureKey, 'has value', result.value)
        // },
    })
    gb.loadFeatures()
    const growthbook = useRef<GrowthBook>(gb)

    // calls tracking feature trackingCallback()
    const test_toggle_aa_test =
        isBrowser() && growthbook.current?.evalFeature('test-toggle-aa-test')

    return {
        test_toggle_aa_test: test_toggle_aa_test?.experimentResult?.name,
    }
}
