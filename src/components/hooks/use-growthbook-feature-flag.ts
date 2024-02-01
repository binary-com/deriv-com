import { useState, useEffect } from 'react'
import { Analytics } from '@deriv-com/analytics'

const useGrowthbookFeatureFlag = <T>(featureFlag: string, defaultValue: T) => {
    const [featureFlagValue, setFeatureFlagValue] = useState<T>(defaultValue)

    useEffect(() => {
        const value = (Analytics.getFeatureValue(featureFlag, defaultValue) || defaultValue) as T
        setFeatureFlagValue(value)
    }, [featureFlag, defaultValue])

    return featureFlagValue
}

export default useGrowthbookFeatureFlag
