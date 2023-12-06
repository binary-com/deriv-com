import { Features } from '@deriv-com/blocks'
import React from 'react'
import { cards } from './data'
import { localize } from 'components/localization'

const OtherMarkets = () => {
    return (
        <>
            <Features.Card
                className="!bg-background-primary-base"
                title={localize('_t_Other markets to trade_t_')}
                cards={cards}
                cols="three"
            />
        </>
    )
}

export default OtherMarkets
