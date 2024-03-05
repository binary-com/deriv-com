import React from 'react'
import Layout from 'features/components/templates/layout'
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
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import MarketBottomNav from 'features/components/templates/navigation/template/market-bottom-nav'
import MainFooter from 'features/components/templates/footer'
import { TPageContext } from 'features/types'

const ETFMarket = ({ region }: TPageContext) => {
    const { is_deriv_go } = usePlatformQueryParam()
    return (
        <Layout region={region}>
            {!is_deriv_go && (
                <div className="fixed z-[4] w-full">
                    <MainRowNavigation />
                    <div className="pt-[8rem]">
                        <MarketBottomNav />
                    </div>
                </div>
            )}
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
            <OtherMarketsSlider current_market="etfs"/>
            <SignupPublic />
            <MainFooter />
        </Layout>
    )
}

export default ETFMarket
