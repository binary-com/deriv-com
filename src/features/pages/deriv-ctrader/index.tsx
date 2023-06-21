import React from 'react'
import CTraderHero from './hero-banner'
import CTraderNumbers from './trade-numbers'
import CTraderTradeDescription from './trade-description'
import CTraderWhyTrade from './why-trade'
import CTraderTradeFeatures from './platform-features'
import HowToStartCTrader from './how-to-start'
import CTraderPlatformBanner from './platform-banner'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer/'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const DerivCTrader = () => {
    return (
        <Layout>
            <MainNav />
            <SEO
                title={localize('_t_cTrader – a CFD trading platform | Deriv_t_')}
                description={localize(
                    '_t_cTrader is our intuitive CFD trading platform where you can trade forex, commodities, stocks & indices, cryptocurrencies, and derived indices._t_',
                )}
            />
            <CTraderHero />
            <CTraderNumbers />
            <CTraderTradeDescription />
            <CTraderWhyTrade />
            <CTraderTradeFeatures />
            <HowToStartCTrader />
            <CTraderPlatformBanner />
            <Footer />
        </Layout>
    )
}

export default WithIntl()(DerivCTrader)
