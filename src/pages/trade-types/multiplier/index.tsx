import React from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import device from 'themes/device'
const HowMultiplierWorks = Loadable(() => import('./_how-options-works'))
const ThingsInMind = Loadable(() => import('./_things-in-mind'))
const StartTrading = Loadable(() => import('./_start-trading'))
const MarketsAvailable = Loadable(() => import('./_markets-available'))
const WhatAreMultiplier = Loadable(() => import('./_what-are-options'))

const meta_attributes = {
    og_title: localize('_t_Multipliers trading | Trade types | Deriv_t_'),
    og_description: localize(
        '_t_Learn about multipliers trading on Deriv. Enjoy a new way to trade with leverage without risking more than your stake — more profit potential, no swap charges._t_',
    ),
}

const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: 30px;
    }
`

const Multipliers = () => {
    return (
        <Layout>
            <SEO
                title={localize('_t_Multipliers trading | Trade types | Deriv_t_')}
                description={localize(
                    '_t_Learn about Deriv multipliers. Maximise potential profit without risking more than your stake. Available on forex, synthetic indices, and cryptocurrencies._t_',
                )}
                meta_attributes={meta_attributes}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <StyledHeader as="h1" size="6.4rem" color="white" align="center">
                        {localize('_t_Multipliers_t_')}
                    </StyledHeader>
                </SmallContainer>
            </Hero>
            <WhatAreMultiplier />
            <HowMultiplierWorks />
            <ThingsInMind />
            <StartTrading />
            <MarketsAvailable />
        </Layout>
    )
}

export default WithIntl()(Multipliers)
