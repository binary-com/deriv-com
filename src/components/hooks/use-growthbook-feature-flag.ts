import { useState, useEffect, useMemo } from 'react'
import { Analytics } from '@deriv-com/analytics'

interface UseGrowthbookFeatureFlagArgs {
    featureFlag: string
}

const useGrowthbookFeatureFlag = ({ featureFlag }: UseGrowthbookFeatureFlagArgs) => {
    const [featureFlagValue, setFeatureFlagValue] = useState(
        Analytics?.getFeatureValue(featureFlag),
    )

    const isFeatureOn = useMemo(() => typeof featureFlagValue !== 'undefined', [featureFlagValue])

    useEffect(() => {
        // Set the renderer for GrowthBook to update the value when the feature flag changes
        Analytics?.getInstances()?.ab?.GrowthBook?.setRenderer(() => {
            const value = Analytics?.getFeatureValue(featureFlag)
            setFeatureFlagValue(value)
        })
    }, [featureFlag])

    return { isFeatureOn, featureFlagValue }
}

export default useGrowthbookFeatureFlag
