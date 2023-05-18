import React from 'react'
import ETFSteps from './etf-steps'
import WhyETFTrade from './why-etf-trade'
import HomePage from './home-page'

const ETFMarket = () => {
    return (
        <div>
            <HomePage />
            <WhyETFTrade />
            <ETFSteps />
        </div>
    )
}

export default ETFMarket
