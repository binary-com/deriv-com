import React from 'react'
import { Features } from '@deriv-com/blocks'
import { cards } from './data'
import { localize } from 'components/localization'

const PlatformsToTrade = () => {
    return (
        <>
            <Features.Card
                className="!bg-background-primary-base"
                title={localize('_t_Platforms to trade forex_t_')}
                cards={cards}
                cols="three"
            />
        </>
    )
}
export default PlatformsToTrade
