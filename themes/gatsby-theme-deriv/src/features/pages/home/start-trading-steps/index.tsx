import React from 'react'
import { Features } from '@deriv-com/blocks'
import { EUCards, RowCards } from './data'
import { Localize } from 'components/localization'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'
import useBuildVariant from 'features/hooks/use-build-variant'

const StartTradingSteps = () => {
    const {region} = useBuildVariant()

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
            cards={region === "eu" ? EUCards : RowCards}
        />
    )
}
export default StartTradingSteps
