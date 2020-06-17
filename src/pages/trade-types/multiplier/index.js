import React from 'react'
import { SmallContainer, Hero } from '../components/_style'
import WhatAreTheOptions from './_what-are-options'
import HowOptionsWorks from './_how-options-works'
import OptionsToTrade from './_options-to-trade'
import StartTrading from './_start-trading'
import MarketsAvailable from './_markets-available'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Multipliers = () => {
    return (
        <Layout>
            <SEO
                title={localize('Trade types | Multipliers')}
                description={localize(
                    'Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" color="white" align="center">
                        {localize('Multipliers')}
                    </Header>
                </SmallContainer>
            </Hero>
            <WhatAreTheOptions />
            <HowOptionsWorks />
            <OptionsToTrade />
            <StartTrading />
            <MarketsAvailable />
        </Layout>
    )
}

export default WithIntl()(Multipliers)
