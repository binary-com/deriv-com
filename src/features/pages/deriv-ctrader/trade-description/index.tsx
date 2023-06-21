import React from 'react'
import { WhatIsTradeDescription } from './data'
import { description_box } from './description.module.scss'
import TradeDescription from 'features/components/templates/trade-platform/trade-description'
import FlexBoxContainer from 'features/components/atoms/flex-box/box'

const CTraderTradeDescription = () => {
    return (
        <FlexBoxContainer className={description_box}>
            <TradeDescription
                title={WhatIsTradeDescription.title}
                subtitle={WhatIsTradeDescription.subtitle}
            />
        </FlexBoxContainer>
    )
}

export default CTraderTradeDescription
