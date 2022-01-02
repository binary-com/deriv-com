import React from 'react'
import { Hero } from '../common/_style'
import MarginCalculatorSection from './_margin-calculator'
import { Container, SEO } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const MarginCalculator = () => {
    return (
        <Layout>
            <SEO
                title={localize('Margin Calculator')}
                description={localize('Margin Calculator')}
            />
            <Hero jc="center" ai="center">
                <Container>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Margin Calculator')}
                    </Header>
                </Container>
            </Hero>
            <MarginCalculatorSection />
        </Layout>
    )
}
export default WithIntl()(MarginCalculator)
