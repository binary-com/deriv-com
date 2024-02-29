import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
import featuresConfig from '../../../static/appConfig'
import { thirdPartyFlagsConfig } from 'common/constants'

const useFeatureFlags = (featureKey) => {
    const [data, setData] = useState(featuresConfig)
    const [feature, setFeature] = useState(null)

    useEffect(() => {
        const app = initializeApp(thirdPartyFlagsConfig, 'thirdPartyFlagsConfig')
        const db = getDatabase(app)

        const remoteConfigRef = ref(db, 'remote_config/deriv-com')
        const flagsData = onValue(
            remoteConfigRef,
            (snapshot) => {
                const firebaseData = snapshot.val()
                setData(firebaseData)
            },
            (error) => {
                console.error(error)
            },
        )
        return () => flagsData()
    }, [])

    useEffect(() => {
        const featureValue = data[featureKey]
        setFeature(featureValue === undefined ? null : Boolean(featureValue))
    }, [data, featureKey])

    return feature
}

export default useFeatureFlags
