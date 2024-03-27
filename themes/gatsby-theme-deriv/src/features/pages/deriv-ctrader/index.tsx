import React from 'react'
import Layout from 'features/components/templates/layout'
import CTraderHero from './hero-banner'
import CTraderNumbers from './trade-numbers'
import CTraderTradeDescription from './trade-description'
import CTraderWhyTrade from './why-trade'
import BrowseOurFaq from './browse-our-faq'
import CTraderTradeFeatures from './platform-features'
import DerivCtraderApp from './get-trading'
import CopyTrading from './copy-trading'
import HowToStartCTrader from './how-to-start'
import CTraderPlatformBanner from './platform-banner'
import OtherPlatforms from './other-platforms'
import MainFooter from 'features/components/templates/footer/'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import { BuildVariantType } from 'features/types'

const DerivCTrader = ({region}: BuildVariantType) => {
    const is_ctrader = false

    return (
        <Layout region={region}>
            <MainRowNavigation />
            <CTraderHero />
            <CTraderNumbers />
            <CTraderTradeDescription />
            <CTraderWhyTrade />
            <CTraderTradeFeatures />
            <CopyTrading />
            <HowToStartCTrader />
            {is_ctrader &&  <CTraderPlatformBanner />}
            <DerivCtraderApp />
            <OtherPlatforms />
            <BrowseOurFaq />
            <MainFooter />
        </Layout>
    )
}

export default DerivCTrader
