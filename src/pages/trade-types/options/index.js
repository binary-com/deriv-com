import React from 'react'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import WhatAreTheOptions from './_what-are-options'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
const HowOptionsWorks = Loadable(() => import('./_how-options-works'))
const OptionsToTrade = Loadable(() => import('./_options-to-trade'))
const StartTrading = Loadable(() => import('./_start-trading'))
const MarketsAvailable = Loadable(() => import('./_markets-available'))

const Options = () => {
    return (
        <Layout>
            <SEO
                title={localize('Trade types | Options')}
                description={localize(
                    'Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" color="white" align="center">
                        {localize('Options')}
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

export default WithIntl()(Options)
