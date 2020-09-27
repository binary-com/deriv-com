import React from 'react'
import styled from 'styled-components'
import { SmallContainer, Hero } from '../components/_style'
import WhatAreMultiplier from './_what-are-multipliers'
import HowMultiplierWorks from './_how-multiplier-works'
import ThingsInMind from './_things-in-mind'
import StartTrading from './_start-trading'
import MarketsAvailable from './_markets-available'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: 30px;
    }
`

const Multipliers = () => {
    return (
        <Layout>
            <SEO
                title={localize('Trade types | Multipliers')}
                description={localize(
                    'Multipliers allow you to profit from correctly predicting whether the market will go up or down.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <StyledHeader as="h1" color="white" align="center">
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
