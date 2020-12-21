import React from 'react'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import WhatIsMargin from './_what_is_margin'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
const WhyTradeMargin = Loadable(() => import('./_why-trade-margin'))
const Contracts = Loadable(() => import('./_contracts'))
const Policies = Loadable(() => import('./_policies'))
const StartTrading = Loadable(() => import('./_start-trading'))
const RelationshipWithLeverge = Loadable(() => import('./_relationship-with-leverge'))
const AvailableMarkets = Loadable(() => import('./_available-markets'))

const Margin = () => {
    return (
        <Layout>
            <SEO
                title={localize('Trade types | Margin trading')}
                description={localize(
                    'Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Margin trading')}
                    </Header>
                </SmallContainer>
            </Hero>
            <WhatIsMargin />
            <RelationshipWithLeverge />
            <WhyTradeMargin />
            <Contracts />
            <Policies />
            <StartTrading />
            <AvailableMarkets />
        </Layout>
    )
}

export default WithIntl()(Margin)
