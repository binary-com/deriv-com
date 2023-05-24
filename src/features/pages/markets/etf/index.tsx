import React from 'react'
import ETFSteps from './etf-steps'
import WhyETFTrade from './why-etf-trade'
import HomePage from './home-page'
import InstrumentsTableEtf from './instruments-etf'
import OtherMarkets from './other-markets'
import InstrumentsContentEtf from './instrumental-etf-content.tsx'
import TradeTypes from './trades-available'

const ETFMarket = () => {
    return (
        <>
            <HomePage />
            <TradeTypes />
            <InstrumentsTableEtf />
            <InstrumentsContentEtf />
            <WhyETFTrade />
            <ETFSteps />
            <OtherMarkets />
        </>
    )
}

export default ETFMarket
