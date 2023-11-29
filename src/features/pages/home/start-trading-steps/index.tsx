import React from 'react'
import { Features } from '@deriv-com/blocks'
import { Button } from '@deriv/quill-design'
import { Cards } from './data'
import { localize } from 'components/localization'

const StartTradingSteps = () => {
    return (
        <Features.Card
            title={localize('_t_Start trading in 3 simple steps_t_')}
            cta={<Button size="lg">Open demo Account</Button>}
            cols="three"
            cards={Cards}
        />
    )
}
export default StartTradingSteps
