import React from 'react'
import Loadable from 'react-loadable'
import { Hero } from './home/_hero'
import { Trade } from './home/_trade'
import { HowItWorks } from './home/_how-it-works'
import { Markets } from './home/_markets'
import { WhyDerivMobile } from './home/_why-deriv-mobile'
import { SEO, Show } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Divider, InfiniteLoader } from 'components/elements'

const PaymentMethods = Loadable({
    loader: () => import('./home/_payment-methods'),
    loading: InfiniteLoader,
})
const Ticker = Loadable({
    loader: () => import('./home/_ticker'),
    loading: InfiniteLoader,
})
const WhyDeriv = Loadable({
    loader: () => import('./home/_why-deriv'),
    loading: InfiniteLoader,
})

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
