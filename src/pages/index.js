import React from 'react'
import Loadable from 'react-loadable'
import { Hero } from './home/_hero'
import { Trade } from './home/_trade'
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
const WhyDerivMobile = Loadable({
    loader: () => import('./home/_why-deriv-mobile'),
    loading: InfiniteLoader,
})
const HowItWorks = Loadable({
    loader: () => import('./home/_how-it-works'),
    loading: InfiniteLoader,
})
const Markets = Loadable({
    loader: () => import('./home/_markets'),
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
        </Show.Mobile>
        <Show.Desktop>
            <Ticker />
        </Show.Desktop>
        <Trade />
        <Show.Desktop>
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
