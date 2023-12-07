import React from 'react'
import HeroBanner from './hero-banner'
import WhyTradeInDeriv from './why-trade-in-deriv'
import PlatformsToTrade from './platforms-available'
import TradingInDeriv from './trading-in-deriv'
import OtherMarkets from './other-markets'
import FAQSection from './faq-section'

const StocksAndIndicesContent = () => {
    return (
        <>
            <HeroBanner />
            <PlatformsToTrade />
            <WhyTradeInDeriv />

            <TradingInDeriv />
            <OtherMarkets />
            <FAQSection />
        </>
    )
}

export default StocksAndIndicesContent
