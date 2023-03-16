import React from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { Localize, WithIntl } from 'components/localization'
import device from 'themes/device'
import { MetaAttributesType } from 'types/page.types'
const HowMultiplierWorks = Loadable(() => import('./_how-multipliers-works'))
const ThingsInMind = Loadable(() => import('./_things-in-mind'))
const StartTrading = Loadable(() => import('./_start-trading'))
const MarketsAvailable = Loadable(() => import('./_markets-available'))
const WhatAreMultiplier = Loadable(() => import('./_what-are-multipliers'))

const meta_attributes: MetaAttributesType = {
    og_title: '_t_Multipliers trading | Trade multipliers on Deriv_t_',
    og_description:
        '_t_Explore trading on markets with multipliers on Deriv. Trade forex, cryptocurrencies, and more and maximise potential profit without risking more than your stake._t_',
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
                title="_t_Multipliers trading | Trade multipliers on Deriv_t_"
                description="_t_Explore trading on markets with multipliers on Deriv. Trade forex, cryptocurrencies, and more and maximise potential profit without risking more than your stake._t_"
                meta_attributes={meta_attributes}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <StyledHeader as="h1" size="6.4rem" color="white" align="center">
                        <Localize translate_text="_t_Multipliers_t_" />
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
