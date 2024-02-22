import React, { useEffect, useState } from 'react'
import { Features } from '@deriv-com/blocks'
import { EUCards, RowCards } from './data'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'

const StartTradingSteps = () => {
    const { is_eu } = useRegion()
    const [cards, setCards] = useState(RowCards)

    useEffect(() => {
        if (is_eu) setCards(EUCards)
    }, [is_eu])

    return (
        <Features.Card
            hasPadding
            className="xl:[&>*:nth-child(1)]:!px-50"
            title={<Localize translate_text="_t_Start trading in 3 simple steps_t_" />}
            cta={
                <div className="hidden lg:block">
                    <TradersHubCtaButton className="flex" />
                </div>
            }
            cols="three"
            variant="ContentTop"
            cards={cards}
        />
    )
}
export default StartTradingSteps
