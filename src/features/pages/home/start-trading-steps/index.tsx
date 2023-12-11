import React from 'react'
import { Features } from '@deriv-com/blocks'
import { Button } from '@deriv/quill-design'
import { EUCards, RowCards } from './data'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const StartTradingSteps = () => {
    const { is_eu } = useRegion()
    return (
        <Features.Card
            title={<Localize translate_text="_t_Start trading in 3 simple steps_t_" />}
            cta={<Button size="lg">Open demo Account</Button>}
            cols="three"
            variant="ContentTop"
            cards={is_eu ? EUCards : RowCards}
        />
    )
}
export default StartTradingSteps
