import React from 'react'
import styled from 'styled-components'

import { Hero } from './home/_hero'
import { Dtrader } from './home/_dtrader'
import { HowItWorks } from './home/_how-it-works'
import { Markets } from './home/_markets'
import { WhyDeriv } from './home/_why-deriv'

import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import Container from 'components/containers/container'
import PaymentMethods from 'components/elements/payment-methods.js'
import { localize, WithIntl } from 'components/localization'
import { Divider } from 'components/elements/divider'

const PaymentSection = styled.section`
    width: 100%;
    border-bottom: 1px solid var(--color-grey-1);
    padding: 2rem 0;
`
const Home = () => (
    <Layout>
        <SEO
            title={localize('Your ultimate online trading experience')}
            description={localize('Deriv is an online trading company that offers the broadest selection of derivatives with competitive prices.')}
        />
        <Hero />
        <Dtrader />
        <HowItWorks />
        <Divider />
        <Markets />
        <WhyDeriv />
        <PaymentSection>
            <Container>
                <PaymentMethods />
            </Container>
        </PaymentSection>
    </Layout>
)

export default WithIntl()(Home)
