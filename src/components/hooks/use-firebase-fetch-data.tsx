import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
import { firebaseConfig } from 'common/constants'
import useRegion from 'components/hooks/use-region'

const useFetchFirebaseData = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const { is_eu } = useRegion()

    useEffect(() => {
        const app = initializeApp(firebaseConfig)
        const db = getDatabase(app)

        const commoditiesRef = is_eu ? ref(db, 'eu/market') : ref(db, 'row/market')
        const unsubscribe = onValue(
            commoditiesRef,
            (snapshot) => {
                setData(snapshot.val())
            },
            (err) => {
                setError(err)
            },
        )

        return unsubscribe
    }, [is_eu])

    return { data, error }
}

export default useFetchFirebaseData
