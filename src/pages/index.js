import React from 'react'
import { Hero } from './home/_hero'
import { Trade } from './home/_trade'
import WhyDeriv from './home/_why-deriv'
import WhyDerivMobile from './home/_why-deriv-mobile'
import HowItWorks from './home/_how-it-works'
import Markets from './home/_markets'
import WhatOurClientsSay from './home/_what-our-clients-say'
import { SEO, Show } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Divider } from 'components/elements'

const Home = () => (
    <Layout>
        <SEO
            title={localize('Your ultimate online trading experience')}
            description={localize(
                'Deriv is an online trading company that offers the broadest selection of derivatives with competitive prices.',
            )}
        />
        <Hero />
        <Show.Mobile>
            <WhyDerivMobile />
        </Show.Mobile>
        <Trade />
        <Show.Desktop>
            <Divider />
            <HowItWorks />
            <Divider />
            <Markets />
            <WhatOurClientsSay />
            <WhyDeriv />
        </Show.Desktop>
    </Layout>
)

export default WithIntl()(Home)
