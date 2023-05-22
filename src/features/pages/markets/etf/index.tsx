import React from 'react'
import ETFSteps from './etf-steps'
import WhyETFTrade from './why-etf-trade'
import HomePage from './home-page'
import InstrumentsTableEtf from './instruments-etf'
import OtherMarkets from './other-markets'

const ETFMarket = () => {
    return (
        <div>
            <HomePage />

            <InstrumentsTableEtf />
            <WhyETFTrade />
            <ETFSteps />
            <OtherMarkets />
        </div>
    )
}

export default ETFMarket
