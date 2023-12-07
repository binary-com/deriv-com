import React from 'react'
import { Features } from '@deriv-com/blocks'
import { cards } from '../../forex/trading-in-deriv/data'
import { localize } from 'components/localization'

const TradingInDeriv = () => {
    return (
        <>
            <Features.Card
                className="!bg-background-primary-base"
                title={localize('_t_Trading Commodities on Deriv_t_')}
                cards={cards}
                cols="three"
            />
        </>
    )
}
export default TradingInDeriv
