import React from 'react'
import Steps from './steps'
import WhyTrade from './why-trade'
import Banner from './banner'
import InstrumentsTable from './instruments'
import InstrumentsContent from './instrumental-content.tsx'
import TradeTypes from './trades-available'
import SignupPublic from 'features/components/templates/signup/with-banner'
import Flex from 'features/components/atoms/flex-box'
import OtherMarketsSlider from 'features/components/molecules/other-markets-slider'
import { SEO } from 'components/containers'
import Layout from 'features/components/templates/layout'
import MarketNav from 'features/components/templates/navigation/market-nav'
import Footer from 'features/components/templates/footer/'
import useRegion from 'components/hooks/use-region'
import PageNotFound from 'features/pages/404'

const ETFMarket = () => {
    const { is_row } = useRegion()

    if (is_row) {
        return (
            <Layout>
                <SEO
                    description="_t_Trade ETFs on Deriv and diversify your portfolio with assets that track bonds, commodities, and indices, without needing to own the underlying assets._t_"
                    title="_t_Exchange-traded funds | ETF trading | Deriv_t_"
                />
                <MarketNav />
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
                <SignupPublic />
                <Footer />
            </Layout>
        )
    }

    return <PageNotFound />
}

export default ETFMarket
