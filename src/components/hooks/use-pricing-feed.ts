import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
import { firebaseConfig } from 'common/constants'
import useRegion from 'components/hooks/use-region'

const usePricingFeed = () => {
    const [prev_data, setPerData] = useState(null)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const { is_eu } = useRegion()

    useEffect(() => {
        const app = initializeApp(firebaseConfig)
        const db = getDatabase(app)

        const commoditiesRef = ref(db, is_eu ? 'eu/mkt' : 'row/mkt')
        const unsubscribe = onValue(
            commoditiesRef,
            (snapshot) => {
                setData((old) => {
                    setPerData(old)
                    return snapshot.val()
                })
            },
            (err) => {
                setError(err)
            },
        )
        return unsubscribe
    }, [is_eu])
    // console.log('unsubscribe==>', { data, prev_data })

    return {
        error,
        data,
        prev_data,
    }
}

export default usePricingFeed
