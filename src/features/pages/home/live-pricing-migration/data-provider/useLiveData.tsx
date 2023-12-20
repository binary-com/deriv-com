import { useContext, useDeferredValue, useMemo } from 'react'
import { LiveMarketRawData, MarketName } from './types'
import { LiveMarketContext } from '.'

const useLiveData = <T extends MarketName>(marketName: T | T[]) => {
    const { liveData, dbRef, liveError } = useContext(LiveMarketContext)

    const marketData: LiveMarketRawData[T] = useMemo(() => {
        if (Array.isArray(marketName)) {
            return marketName.reduce(
                (acc, current) => ({ ...acc, ...liveData[current] }),
                {} as LiveMarketRawData[T],
            )
        } else {
            return liveData[marketName]
        }
    }, [marketName, liveData])

    const data = useDeferredValue(marketData)

    return { data, liveError, dbRef }
}

export default useLiveData
