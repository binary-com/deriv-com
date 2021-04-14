import React from 'react'
import { Hero } from '../common/_style'
import SwapCalculatorSection from './_swap-calculator'
import { Container, SEO } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const SwapCalculator = () => {
    return (
        <Layout>
            <SEO title={localize('Swap Calculator')} description={localize('Swap Calculator')} />
            <Hero jc="center" ai="center">
                <Container>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Swap Calculator')}
                    </Header>
                </Container>
            </Hero>
            <SwapCalculatorSection />
        </Layout>
    )
}
export default WithIntl()(SwapCalculator)
