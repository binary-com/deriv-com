import React from 'react'
import Steps from './steps'
import WhyTrade from './why-trade'
import Banner from './banner'
import InstrumentsTable from './instruments'
import InstrumentsContent from './instrumental-content.tsx'
import TradeTypes from './trades-available'
import Flex from 'features/components/atoms/flex-box'
import OtherMarketsSlider from 'features/components/molecules/other-markets-slider'

const ETFMarket = () => {
    return (
        <>
            <Banner />
            <TradeTypes />
            <Flex.Box
                justify="center"
                align="center"
                direction="col"
                as="section"
                padding_inline="8x"
            >
                <InstrumentsTable />
                <InstrumentsContent />
            </Flex.Box>
            <WhyTrade />
            <Steps />
            <OtherMarketsSlider current_market="etfs" />
        </>
    )
}

export default ETFMarket
