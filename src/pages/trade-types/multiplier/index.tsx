import React from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import device from 'themes/device'
import { multiplier_available_markets } from 'features/trade-types/carousels/available-markets/data'
const HowMultiplierWorks = Loadable(() => import('./_how-options-works'))
const ThingsInMind = Loadable(() => import('./_things-in-mind'))
const StartTrading = Loadable(() => import('./_start-trading'))
const AvailableMarkets = Loadable(() => import('features/trade-types/carousels/available-markets'))
const WhatAreMultiplier = Loadable(() => import('./_what-are-options'))

const meta_attributes = {
    og_title: localize('Multipliers trading | Trade multipliers on Deriv'),
    og_description: localize(
        'Explore trading on markets with multipliers on Deriv. Trade forex, cryptocurrencies, and more and maximise potential profit without risking more than your stake.',
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
                title={localize('Multipliers trading | Trade multipliers on Deriv')}
                description={localize(
                    'Explore trading on markets with multipliers on Deriv. Trade forex, cryptocurrencies, and more and maximise potential profit without risking more than your stake.',
                )}
                meta_attributes={meta_attributes}
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
            <AvailableMarkets items={multiplier_available_markets} />
        </Layout>
    )
}

export default WithIntl()(Multipliers)
