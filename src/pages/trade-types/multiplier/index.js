import React from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import WhatAreMultiplier from './_what-are-multipliers'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import device from 'themes/device'
const HowMultiplierWorks = Loadable(() => import('./_how-multiplier-works'))
const ThingsInMind = Loadable(() => import('./_things-in-mind'))
const StartTrading = Loadable(() => import('./_start-trading'))
const MarketsAvailable = Loadable(() => import('./_markets-available'))

const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: 30px;
    }
`

const Multipliers = () => {
    return (
        <Layout>
            <SEO
                title={localize('Multipliers trading | Trade types | Deriv')}
                description={localize(
                    'Learn about multipliers trading on Deriv. Enjoy a new way to trade with leverage without risking more than your stake — more profit potential, no swap charges.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <StyledHeader as="h1" size="6.4rem" color="white" align="center">
                        {localize('Multipliers')}
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
