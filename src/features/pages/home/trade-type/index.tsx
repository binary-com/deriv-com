import React from 'react'
import { Features } from '@deriv-com/blocks'
import { EUCards, RowCards } from './data'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const TradeTypeSection = () => {
    const { is_eu } = useRegion()
    const heading = is_eu ? (
        <Localize translate_text="_t_Trade CFDs & Multipliers_t_" />
    ) : (
        <Localize translate_text="_t_Trade CFDs, Options, or Multipliers_t_" />
    )
    return (
        <Features.Card
            hasPadding
            title={heading}
            cols="three"
            cards={is_eu ? EUCards : RowCards}
            className="!bg-background-secondary-container"
        />
    )
}

export default TradeTypeSection
