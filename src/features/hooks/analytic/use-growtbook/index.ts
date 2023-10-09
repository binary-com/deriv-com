import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { isMobile } from 'react-device-detect'
import { Growthbook } from 'analytics'
import { useAnalyticData } from 'features/hooks/analytic/use-analytic-data'
import useWebsiteStatus from 'components/hooks/use-website-status'
import { getLanguage, isBrowser } from 'common/utility'

export const useGrowthBook = () => {
    const growthbook = Growthbook.getInstance()
    const { anonymous_id } = useAnalyticData()
    const { website_status } = useWebsiteStatus()

    useEffect(() => {
        growthbook.setAttributes({
            id: anonymous_id,
            country: website_status?.clients_country || ' ',
            user_language: Cookies.get('user_language') || getLanguage(),
            device_language: (isBrowser() && navigator?.language) || ' ',
            device_type: isMobile ? 'mobile' : 'web',
        })
    }, [])

    // calls tracking feature trackingCallback()
    const test_toggle_aa_test = growthbook.useFeatureIsOn('test-toggle-aa-test')

    return {
        test_toggle_aa_test,
    }
}
