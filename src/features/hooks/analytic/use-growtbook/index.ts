import { useRef } from 'react'
import { GrowthBook } from '@growthbook/growthbook-react'
import { isBrowser } from 'common/utility'

export const useGrowthBook = () => {
    const gb = useRef<GrowthBook>()
    gb.current = isBrowser() && window._growthbook
    const growthbook = gb.current

    // calls tracking feature trackingCallback()
    const test_toggle_aa_test = growthbook.evalFeature('test-toggle-aa-test')

    // fetch feature flag from growthbook by name
    return {
        test_toggle_aa_test: test_toggle_aa_test.experimentResult.name,
    }
}
