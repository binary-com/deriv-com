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

// function getStatus(current, previous){
//     if(current > previous) return "up"
//     if(current < previous) return "down"
//     return "remain"
// }

const LiveMarketProvider = ({ children }: { children: ReactNode }) => {
    const [liveData, setLiveData] = useState<LiveMarketRawData>(initialLiveMarketData)
    // const [testData, setTestData] = useState<object>({})
    const [liveError, setLiveError] = useState({})
    const { is_eu } = useRegion()
    const firebaseAppRef = useRef<FirebaseApp>()
    const firebaseDbRef = useRef<Database>()
    const commoditiesRef = useRef<DatabaseReference>()

    useEffect(() => {
        firebaseAppRef.current = initializeApp(firebaseConfig)
        firebaseDbRef.current = getDatabase(firebaseAppRef.current)
    }, [])

    useEffect(() => {
        commoditiesRef.current = ref(firebaseDbRef.current, is_eu ? 'eu/mkt' : 'row/mkt')
        onValue(
            commoditiesRef.current,
            (snapshot) => {
                setLiveData(snapshot.val())
                // setTestData((prev) => {
                //     const object = snapshot.val();
                //     if(prev){
                //         for (const category in object) {
                //             for (const symbol in object[category]) {
                //                 object[category][symbol]['status'] = getStatus(object[category][symbol].mid, prev[category][symbol].mid);
                //             }
                //         }
                //     }
                //     return object;
                // })
            },
            (error) => setLiveError(error),
        )
    }, [is_eu])

    // console.log("==>", {testData})

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
