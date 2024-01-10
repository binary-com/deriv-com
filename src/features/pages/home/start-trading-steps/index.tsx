import React from 'react'
import { Features } from '@deriv-com/blocks'
import { LabelPairedGridLgBoldIcon } from '@deriv/quill-icons'
import { EUCards, RowCards } from './data'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'

const StartTradingSteps = () => {
    const { is_eu } = useRegion()
    return (
        <Features.Card
            className="xl:[&>*:nth-child(1)]:!px-50"
            title={<Localize translate_text="_t_Start trading in 3 simple steps_t_" />}
            cta={
                <div className="flex w-full justify-center">
                    <TradersHubCtaButton icon={LabelPairedGridLgBoldIcon} iconPosition="start" />
                </div>
            }
            cols="three"
            variant="ContentTop"
            cards={is_eu ? EUCards : RowCards}
        />
    )
}
export default StartTradingSteps
