import React from 'react'
import { selling_points } from './data'
import TradePlatformNumbers from 'features/components/templates/trading-platform/trade-numbers'

const CTraderNumbers = () => {
    return <TradePlatformNumbers trading_platform_numbers={selling_points} />
}

export default CTraderNumbers
