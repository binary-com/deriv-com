import React from 'react'
import Steps from './steps'
import WhyTrade from './why-trade'
import Banner from './banner'
import InstrumentsTable from './instruments'
import OtherMarkets from './other-markets'
import InstrumentsContent from './instrumental-content.tsx'
import TradeTypes from './trades-available'

const ETFMarket = () => {
    return (
        <>
            <Banner />
            <TradeTypes />
            <InstrumentsTable />
            <InstrumentsContent />
            <WhyTrade />
            <Steps />
            <OtherMarkets />
        </>
    )
}

export default ETFMarket
