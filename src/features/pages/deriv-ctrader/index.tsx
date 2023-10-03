import React from 'react'
import CTraderHero from './hero-banner'
import CTraderNumbers from './trade-numbers'
import CTraderTradeDescription from './trade-description'
import CTraderWhyTrade from './why-trade'
import CTraderTradeFeatures from './platform-features'
import HowToStartCTrader from './how-to-start'
import CTraderPlatformBanner from './platform-banner'
import OtherPlatforms from './other-platforms'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer/'
import Layout from 'features/components/templates/layout'
import { WithIntl } from 'components/localization'

const DerivCTrader = () => {
    const is_ctrader = false

    return (
        <Layout>
            <MainNav />
            <CTraderHero />
            <CTraderNumbers />
            <CTraderTradeDescription />
            <CTraderWhyTrade />
            <CTraderTradeFeatures />
            <HowToStartCTrader />
            {is_ctrader && (
                <>
                    <CTraderPlatformBanner />
                </>
            )}

            <OtherPlatforms />
            <Footer />
        </Layout>
    )
}

export default WithIntl()(DerivCTrader)
