import { useContext, useDeferredValue, useMemo } from 'react'
import { LiveMarketRawData, MarketName } from './types'
import { LiveMarketContext } from '.'

const useLiveData = <T extends MarketName>(marketName: T) => {
    const { liveData, dbRef, liveError } = useContext(LiveMarketContext)

    const marketData: LiveMarketRawData[T] = useMemo(() => {
        return liveData[marketName]
    }, [marketName, liveData])

    const data = useDeferredValue(marketData)

    return { data, liveError, dbRef }
}

export default useLiveData
