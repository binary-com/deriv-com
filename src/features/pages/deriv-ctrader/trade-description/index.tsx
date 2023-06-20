import React from 'react'
import { WhatIsTradeDescription } from './data'
import TradeDescription from 'features/components/templates/trading-platform/trade-description'

const CTraderTradeDescription = () => {
    return (
        <TradeDescription
            title={WhatIsTradeDescription.title}
            subtitle={WhatIsTradeDescription.subtitle}
        />
    )
}

export default CTraderTradeDescription
