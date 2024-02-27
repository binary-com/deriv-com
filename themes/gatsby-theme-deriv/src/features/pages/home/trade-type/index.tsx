import React from 'react'
import { Features } from '@deriv-com/blocks'
import { EUCards, RowCards } from './data'
import { Localize } from 'components/localization'
import useBuildVariant from 'features/hooks/use-build-variant'

const TradeTypeSection = () => {
    const { region } = useBuildVariant()
    const heading =
        region === 'eu' ? (
            <Localize translate_text="_t_Trade CFDs and multipliers_t_" />
        ) : (
            <Localize translate_text="_t_Trade CFDs, options, and multipliers_t_" />
        )
        
    return (
        <Features.Card
            hasPadding
            title={heading}
            cols="three"
            cards={region === 'eu' ? EUCards : RowCards}
            className="!bg-background-secondary-container"
        />
    )
}

export default TradeTypeSection
