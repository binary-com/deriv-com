import { useEffect, useState } from 'react'
import featuresConfig from '../../../static/appConfig'

const useThirdPartyFlags = (featurePath) => {
    const [data] = useState(featuresConfig)
    const [feature, setFeature] = useState(null)

    useEffect(() => {
        const pathParts = featurePath.split('.')
        let currentFeature = data
        for (const part of pathParts) {
            if (currentFeature[part] === undefined) {
                return // Feature path does not exist
            }
            currentFeature = currentFeature[part]
        }
        if (typeof currentFeature === 'object') {
            setFeature(currentFeature)
        } else {
            if (featurePath === 'maintenance_mode_content') {
                setFeature(currentFeature)
            } else {
                setFeature(Boolean(currentFeature))
            }
        }
    }, [data, featurePath])

    return feature
}
export default useThirdPartyFlags
