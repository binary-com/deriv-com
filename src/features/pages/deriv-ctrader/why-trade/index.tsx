import React from 'react'
import { trading_platform_why_trade } from './data'
import TradingPlatformWhyTrade from 'features/components/templates/trade-platform/why-trade'

const CTraderWhyTrade = () => {
    return (
        <TradingPlatformWhyTrade
            title={'_t_Why trade with Deriv cTrader_t_'}
            card_data={trading_platform_why_trade}
        />
    )
}

export default CTraderWhyTrade
