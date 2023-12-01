import React from 'react'
import { what_is_trade_description } from './data'
import { description_box } from './description.module.scss'
import TradeDescription from 'features/components/templates/trade-platform/trade-description'
import FlexBoxContainer from 'features/components/atoms/flex-box/box'

const CTraderTradeDescription = () => {
    return (
        <FlexBoxContainer className={description_box}>
            <TradeDescription
                title={what_is_trade_description.title}
                subtitle={what_is_trade_description.subtitle}
            />
        </FlexBoxContainer>
    )
}

export default CTraderTradeDescription
