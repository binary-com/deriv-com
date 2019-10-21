import React from 'react'
import { Hero } from './home/_hero'
import { Trade } from './home/_trade'
import { HowItWorks } from './home/_how-it-works'
import { Markets } from './home/_markets'
import { WhyDeriv } from './home/_why-deriv'
import { WhyDerivMobile } from './home/_why-deriv-mobile'
import PaymentMethods from './home/_payment-methods'
import Ticker from './home/_ticker'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Divider } from 'components/elements/divider'
import Show from 'components/containers/show'

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
            <Trade />
        </Show.Mobile>
        <Show.Desktop>
            <Ticker />
            <Trade />
            <Divider />
            <HowItWorks />
            <Divider />
            <Markets />
            <WhyDeriv />
            <PaymentMethods />
        </Show.Desktop>
    </Layout>
)

export default WithIntl()(Home)
