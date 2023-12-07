import { Features } from '@deriv-com/blocks'
import React from 'react'
import { cards } from '../../forex/other-markets/data'
import { localize } from 'components/localization'

const OtherMarkets = () => {
    const filteredCards = cards.filter((card) => card.header !== localize('_t_Commodities_t_'))

    return (
        <>
            <Features.Card
                className="!bg-background-primary-base"
                title={localize('_t_Other markets to trade_t_')}
                cards={filteredCards}
                cols="three"
            />
        </>
    )
}

export default OtherMarkets
