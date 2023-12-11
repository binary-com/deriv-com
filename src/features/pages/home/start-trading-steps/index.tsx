import React from 'react'
import { Features } from '@deriv-com/blocks'
import { EUCards, RowCards } from './data'
import StartTradingCtaButton from './cta-button'
import { localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const StartTradingSteps = () => {
    const { is_eu } = useRegion()
    return (
        <Features.Card
            title={localize('_t_Start trading in 3 simple steps_t_')}
            cta={<StartTradingCtaButton />}
            cols="three"
            variant="ContentTop"
            cards={is_eu ? EUCards : RowCards}
        />
    )
}
export default StartTradingSteps
