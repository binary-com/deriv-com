import React from 'react'
import { Hero } from '../common/_style'
import SwapCalculatorSection from './_swap-calculator'
import { Container, SEO } from 'components/containers'
import { Header } from 'components/elements'
import { Localize, localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const SwapCalculator = () => {
    return (
        <Layout>
            <SEO
                title={localize('_t_Swap Calculator_t_')}
                description={localize('_t_Swap Calculator_t_')}
            />
            <Hero jc="center" ai="center">
                <Container>
                    <Header as="h1" type="display-title" color="white" align="center">
                        <Localize translate_text="_t_Swap Calculator_t_" />
                    </Header>
                </Container>
            </Hero>
            <SwapCalculatorSection />
        </Layout>
    )
}
export default WithIntl()(SwapCalculator)
