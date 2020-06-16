import React from 'react'
import { SmallContainer, Hero } from '../components/_style'
import WhyTradeMargin from './_Why-trade-margin'
import MarginContracts from './_margin-contracts'
import MArginPolicies from './_margin-policies'
import StartTradingMargin from './_start-trading-margin'
import MarginRelationship from './_margin-relationship'
import WhatIsMargin from './_what_is_margin'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Margin = () => {
    return (
        <Layout>
            <SEO
                title={localize('Trade types | Margin')}
                description={localize(
                    'Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" color="white" align="center">
                        {localize('Margin')}
                    </Header>
                </SmallContainer>
            </Hero>
            <WhatIsMargin />
            <MarginRelationship />
            <WhyTradeMargin />
            <MarginContracts />
            <MArginPolicies />
            <StartTradingMargin />
        </Layout>
    )
}

export default WithIntl()(Margin)
