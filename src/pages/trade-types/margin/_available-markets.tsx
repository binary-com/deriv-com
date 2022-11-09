import React from 'react'
import AvailableMarkets from 'features/trade-types/carousels/available-markets'
import { margins_avialable_markets } from 'features/trade-types/carousels/available-markets/data'

const MarginAvailableMarkets = () => {
    return <AvailableMarkets items={margins_avialable_markets} />
}

export default MarginAvailableMarkets
