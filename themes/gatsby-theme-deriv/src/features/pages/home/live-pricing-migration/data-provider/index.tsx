import React, { MutableRefObject, ReactNode, useEffect, useRef, useState, createContext } from 'react'
import { type FirebaseApp, initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, Database, type DatabaseReference } from 'firebase/database'
import { initialLiveMarketData } from '../utils'
import { LiveMarketRawData } from './types'
import { firebaseConfig } from 'common/constants'
import useBuildVariant from 'features/hooks/use-build-variant'

export type LiveMarketType = {
    liveData: LiveMarketRawData
    liveError?: unknown
    dbRef: MutableRefObject<DatabaseReference>
}

export const LiveMarketContext = createContext<LiveMarketType>({
    liveData: initialLiveMarketData,
    dbRef: null,
})

const LiveMarketProvider = ({ children }: { children: ReactNode }) => {
    const { region } = useBuildVariant()
    const [liveData, setLiveData] = useState<LiveMarketRawData>(initialLiveMarketData)
    const [liveError, setLiveError] = useState({})
    const firebaseAppRef = useRef<FirebaseApp>()
    const firebaseDbRef = useRef<Database>()
    const commoditiesRef = useRef<DatabaseReference>()

    useEffect(() => {
        firebaseAppRef.current = initializeApp(firebaseConfig, 'firebaseConfig')
        firebaseDbRef.current = getDatabase(firebaseAppRef.current)
    }, [])

    useEffect(() => {
        commoditiesRef.current = ref(firebaseDbRef.current, region === "eu" ? 'eu/mkt' : 'row/mkt')
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
    }, [region])

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
