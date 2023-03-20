import React from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import { DotLoader, Header } from 'components/elements'
import { heroSectionId } from 'common/constants'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { useHandleLazyLoad } from 'components/hooks/use-handle-lazy-load'
import device from 'themes/device'
const HowMultiplierWorks = Loadable(() => import('./_how-options-works'))
const ThingsInMind = Loadable(() => import('./_things-in-mind'))
const StartTrading = Loadable(() => import('./_start-trading'))
const MarketsAvailable = Loadable(() => import('./_markets-available'))
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
const target = heroSectionId
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
}
const lazy_components = (
    <>
        <WhatAreMultiplier fallback={<DotLoader />} />
        <HowMultiplierWorks />
        <ThingsInMind />
        <StartTrading />
        <MarketsAvailable fallback={<DotLoader />} />
    </>
)
const Multipliers = () => {
    const lazyTemplate = useHandleLazyLoad(lazy_components, target, options)
    return (
        <Layout>
            <SEO
                title={localize('Multipliers trading | Trade multipliers on Deriv')}
                description={localize(
                    'Explore trading on markets with multipliers on Deriv. Trade forex, cryptocurrencies, and more and maximise potential profit without risking more than your stake.',
                )}
                meta_attributes={meta_attributes}
            />
            <Hero jc="cneter" ai="center" id="hero-section">
                <SmallContainer>
                    <StyledHeader as="h1" size="6.4rem" color="white" align="center">
                        {localize('Multipliers')}
                    </StyledHeader>
                </SmallContainer>
            </Hero>
            {lazyTemplate}
        </Layout>
    )
}

export default WithIntl()(Multipliers)
