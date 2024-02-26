import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
// import useRegion from 'components/hooks/use-region'
import featuresConfig from '../../../static/appConfig'

const thirdPartyFlagsConfig = {
    databaseURL: 'https://deriv-static-staging.firebaseio.com',
}

const useThirdPartyFlags = () => {
    const [data, setData] = useState(featuresConfig)
    const [error, setError] = useState(featuresConfig)
    // const { is_eu } = useRegion()

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
                console.log(error)
                setError(featuresConfig)
            },
        )
        return flagsData
    }, [data, error])

    return [error, data]
}

export default useThirdPartyFlags
