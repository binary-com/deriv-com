import React from 'react'
import Steps from './steps'
import WhyTrade from './why-trade'
import Banner from './banner'
import InstrumentsTable from './instruments'
import InstrumentsContent from './instrumental-content'
import TradeTypes from './trades-available'
import CheckTrading from './check-trading'
import SignupPublic from 'features/components/templates/signup/with-banner'
import Flex from 'features/components/atoms/flex-box'
import OtherMarketsSlider from 'features/components/molecules/other-markets-slider'
import Layout from 'features/components/templates/layout'
import MarketNav from 'features/components/templates/navigation/market-nav'
import Footer from 'features/components/templates/footer/'

const ETFMarket = () => {
    return (
        <Layout>
            <MarketNav />
            <Banner />
            <TradeTypes />
            <Flex.Box
                justify="center"
                align="center"
                direction="col"
                as="section"
                padding_inline="8x"
                md={{ pb: '20x' }}
            >
                <InstrumentsTable />
                <InstrumentsContent />
            </Flex.Box>
            <CheckTrading />
            <WhyTrade />
            <Steps />
            <OtherMarketsSlider current_market="etfs" />
            <SignupPublic />
            <Footer />
        </Layout>
    )
}

export default ETFMarket
