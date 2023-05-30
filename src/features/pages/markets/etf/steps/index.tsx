import React from 'react'
import { ETFStepItems } from './data'
import TradeStepsWrapper from 'features/components/organisms/markets/markets-trade-steps/trade-steps-wrapper'

const Steps = () => {
    return (
        <TradeStepsWrapper
            data={ETFStepItems}
            header="_t_Start trading ETFs on Deriv in 3 simple steps_t_"
        />
    )
}

export default Steps
