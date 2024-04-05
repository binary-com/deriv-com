import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
// import useRegion from 'components/hooks/use-region'
import featuresConfig from '../../../static/appConfig'

const thirdPartyFlagsConfig = {
    databaseURL: process.env.GATSBY_DATABASE_URL,
}

const useThirdPartyFlags = (featurePath) => {
    const [data, setData] = useState(featuresConfig)
    const [feature, setFeature] = useState(null)

    useEffect(() => {
        const app = initializeApp(thirdPartyFlagsConfig, 'thirdPartyFlagsConfig')
        const db = getDatabase(app)

        // let fetchedData = featuresConfig
        const starCountRef = ref(db, 'remote_config/deriv-com')
        const flagsData = onValue(
            starCountRef,
            (snapshot) => {
                setData(snapshot.val())
            },
            (error) => {
                console.error(error)
            },
        )
        return flagsData
    }, [])

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
