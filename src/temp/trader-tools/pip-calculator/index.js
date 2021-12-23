import React from 'react'
import { Hero } from '../common/_style'
import PipCalculatorSection from './_pip-calculator'
import { Container, SEO } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const PipCalculator = () => {
    return (
        <Layout>
            <SEO title={localize('Pip Calculator')} description={localize('Pip Calculator')} />
            <Hero jc="center" ai="center">
                <Container>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Pip Calculator')}
                    </Header>
                </Container>
            </Hero>
            <PipCalculatorSection />
        </Layout>
    )
}
export default WithIntl()(PipCalculator)
