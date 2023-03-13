import React from 'react'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import WhatIsCFD from './_what_is_cfd'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { Localize, WithIntl } from 'components/localization'
const WhyTradeCFD = Loadable(() => import('./_why-trade-cfd'))
const TradingCFDIncreases = Loadable(() => import('./_trading-cfd-increases'))
const StartTrading = Loadable(() => import('./_start-trading'))
const ThingsToKeep = Loadable(() => import('./_mind-when-trading'))
const AvailableMarkets = Loadable(() => import('./_available-markets'))

const CFD = () => {
    return (
        <Layout>
            <SEO
                title="_t_CFD trading | Online trading platform | Deriv_t_"
                description="_t_Trade CFDs on multiple markets. Enjoy high leverage, tight spreads, and risk management features to amplify your potential profits and limit losses._t_"
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" type="display-title" color="white" align="center">
                        <Localize translate_text="_t_CFD trading_t_" />
                    </Header>
                </SmallContainer>
            </Hero>
            <WhatIsCFD />
            <ThingsToKeep />
            <TradingCFDIncreases />
            <WhyTradeCFD />
            <StartTrading />
            <AvailableMarkets />
        </Layout>
    )
}

export default WithIntl()(CFD)
