import React from 'react'
import { SmallContainer, Hero } from '../components/_style'
import WhyTradeMargin from './_why-trade-margin'
import Contracts from './_contracts'
import Policies from './_policies'
import StartTrading from './_start-trading'
import RelationshipWithLeverge from './_relationship-with-leverge'
import AvailableMarkets from './_available-markets'
import WhatIsMargin from './_what_is_margin'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

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
                    <Header as="h1" color="white" align="center">
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
