import React from 'react'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import WhatIsCFD from './_what_is_cfd'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { cfd_available_markets } from 'features/trade-types/carousels/available-markets/data'
const WhyTradeCFD = Loadable(() => import('./_why-trade-cfd'))
const TradingCFDIncreases = Loadable(() => import('./_trading-cfd-increases'))
const StartTrading = Loadable(() => import('./_start-trading'))
const ThingsToKeep = Loadable(() => import('./_mind-when-trading'))
const AvailableMarkets = Loadable(() => import('features/trade-types/carousels/available-markets'))

const CFD = () => {
    return (
        <Layout>
            <SEO
                title={localize('CFD trading | Online trading platform | Deriv')}
                description={localize(
                    'Trade CFDs on multiple markets. Enjoy high leverage, tight spreads, and risk management features to amplify your potential profits and limit losses.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('CFD trading')}
                    </Header>
                </SmallContainer>
            </Hero>
            <WhatIsCFD />
            <ThingsToKeep />
            <TradingCFDIncreases />
            <WhyTradeCFD />
            <StartTrading />
            <AvailableMarkets items={cfd_available_markets} />
        </Layout>
    )
}

export default WithIntl()(CFD)
