import React from 'react'
import ETFSteps from './etf-steps'
import WhyETFTrade from './why-etf-trade'
import HomePage from './home-page'
import InstrumentsTableEtf from './instruments-etf'

const ETFMarket = () => {
    return (
        <div>
            <HomePage />

            <InstrumentsTableEtf />
            <WhyETFTrade />
            <ETFSteps />
        </div>
    )
}

export default ETFMarket
