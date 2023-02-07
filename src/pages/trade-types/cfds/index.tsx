import React from 'react'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import { DotLoader, Header } from 'components/elements'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { useHandleLazyLoad } from 'components/hooks/use-handle-lazy-load'
const WhatIsCFD = Loadable(() => import('./_what_is_cfd'))
const WhyTradeCFD = Loadable(() => import('./_why-trade-cfd'))
const TradingCFDIncreases = Loadable(() => import('./_trading-cfd-increases'))
const StartTrading = Loadable(() => import('./_start-trading'))
const ThingsToKeep = Loadable(() => import('./_mind-when-trading'))
const AvailableMarkets = Loadable(() => import('./_available-markets'))
const target = '#gatsby-focus-wrapper'
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
}

const lazy_components = (
    <>
        <WhatIsCFD fallback={<DotLoader />} />
        <ThingsToKeep />
        <TradingCFDIncreases />
        <WhyTradeCFD />
        <StartTrading />
        <AvailableMarkets fallback={<DotLoader />} />
    </>
)
const CFD = () => {
    const lazyTemplate = useHandleLazyLoad(lazy_components, target, options)
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
            {lazyTemplate}
        </Layout>
    )
}

export default WithIntl()(CFD)
