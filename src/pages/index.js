import React from 'react'
import { Hero } from './home/_hero'
import { Dtrader } from './home/_dtrader'
import { HowItWorks } from './home/_how-it-works'
import { Markets } from './home/_markets'
import { WhyDeriv } from './home/_why-deriv'
import { WhyDerivMobile } from './home/_why-deriv-mobile'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import PaymentMethods from 'components/elements/payment-methods'
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
            <Dtrader />
        </Show.Mobile>
        <Show.Desktop>
            <Dtrader />
            <HowItWorks />
            <Divider />
            <Markets />
            <WhyDeriv />
            <PaymentMethods />
        </Show.Desktop>
    </Layout>
)

export default WithIntl()(Home)
