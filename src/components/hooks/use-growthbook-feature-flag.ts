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

    console.log('this is my region ? =======>', Analytics.getInstances()?.ab?.GrowthBook?.ready)

    useEffect(() => {
        // Set the renderer for GrowthBook to update the value when the feature flag changes
        Analytics.getInstances()?.ab?.GrowthBook?.setRenderer(() => {
            console.log(
                'this is my region ? =======>',
                Analytics.getInstances()?.ab?.GrowthBook?.ready,
            )

            const value = Analytics?.getFeatureValue(featureFlag)
            setFeatureFlagValue(value)
        })
    }, [featureFlag])

    return { isFeatureOn, featureFlagValue }
}

export default useGrowthbookFeatureFlag
