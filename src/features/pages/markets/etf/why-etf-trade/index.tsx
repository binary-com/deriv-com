import React from 'react'
import { ETFTradeBenefitItems } from './data'
import TradeBenefitWrapper from 'features/components/organisms/markets/greyed-container/trade-benefit-wrapper'

const WhyETFTrade = () => {
    return (
        <TradeBenefitWrapper data={ETFTradeBenefitItems} header="_t_Why trade ETFs on Deriv_t_" />
    )
}

export default WhyETFTrade
