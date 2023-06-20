import React from 'react'
import { trading_platform_features } from './data'
import TradingPlatformWhatHave from 'features/components/templates/trading-platform/what-have'

const CTraderTradeFeatures = () => {
    return <TradingPlatformWhatHave trading_platform_what_have={trading_platform_features} />
}

export default CTraderTradeFeatures
