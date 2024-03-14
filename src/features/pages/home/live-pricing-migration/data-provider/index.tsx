import React, { MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react'
import { type FirebaseApp, initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, Database, type DatabaseReference } from 'firebase/database'
import { initialLiveMarketData } from '../utils'
import { LiveMarketRawData } from './types'
import { firebaseConfig } from 'common/constants'
import useRegion from 'components/hooks/use-region'

export type LiveMarketType = {
    liveData: LiveMarketRawData
    liveError?: unknown
    dbRef: MutableRefObject<DatabaseReference>
}

export const LiveMarketContext = React.createContext<LiveMarketType>({
    liveData: initialLiveMarketData,
    dbRef: null,
})

const LiveMarketProvider = ({ children }: { children: ReactNode }) => {
    const [liveData, setLiveData] = useState<LiveMarketRawData>(initialLiveMarketData)
    const [liveError, setLiveError] = useState({})
    const { is_eu } = useRegion()
    const firebaseAppRef = useRef<FirebaseApp>()
    const firebaseDbRef = useRef<Database>()
    const commoditiesRef = useRef<DatabaseReference>()

    useEffect(() => {
        firebaseAppRef.current = initializeApp(firebaseConfig, 'firebaseConfig')
        firebaseDbRef.current = getDatabase(firebaseAppRef.current)
    }, [])

    useEffect(() => {
        commoditiesRef.current = ref(firebaseDbRef.current, is_eu ? 'eu/mkt' : 'row/mkt')
        const unsubscribe = onValue(
            commoditiesRef.current,
            (snapshot) => {
                setLiveData(snapshot.val())
            },
            (err) => {
                setLiveError(err)
            },
        )
        return unsubscribe
    }, [is_eu])

    return (
        <LiveMarketContext.Provider
            value={{
                liveData,
                liveError,
                dbRef: commoditiesRef,
            }}
        >
            {children}
        </LiveMarketContext.Provider>
    )
}

export default LiveMarketProvider
