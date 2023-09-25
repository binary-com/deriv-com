import { useRef } from 'react'
import { GrowthBook } from '@growthbook/growthbook-react'

export const useGrowthBook = () => {
    const growthbook = useRef<GrowthBook>()
    growthbook.current = window._growthbook

    // calls tracking feature trackingCallback()
    growthbook.current.isOn('test-toggle-aa-test')

    // fetch feature flag from growthbook by name
    const test_toggle_aa_test =
        growthbook.current.context.features['test-toggle-aa-test'].defaultValue

    return {
        test_toggle_aa_test,
    }
}
