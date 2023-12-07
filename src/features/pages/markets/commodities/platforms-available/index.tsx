import React from 'react'
import { Features } from '@deriv-com/blocks'
import { cards } from '../../forex/platforms-available/data'
import { localize } from 'components/localization'

const PlatformsToTrade = () => {
    const filteredCards = cards.filter((card) => {
        const headerText = card.header.toLowerCase()
        return (
            headerText.includes('deriv mt5') ||
            headerText.includes('deriv x') ||
            headerText.includes('deriv ctrader')
        )
    })
    return (
        <>
            <Features.Card
                className="!bg-background-primary-base"
                title={localize('_t_Platforms to trade Commodities_t_')}
                cards={filteredCards}
                cols="three"
            />
        </>
    )
}
export default PlatformsToTrade
