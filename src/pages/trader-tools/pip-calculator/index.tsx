import React from 'react'
import { Hero } from '../common/_style'
import PipCalculatorSection from './_pip-calculator'
import { Container, SEO } from 'components/containers'
import { Header } from 'components/elements'
import { Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { TGatsbyHead } from 'features/types'

const PipCalculator = () => {
    return (
        <Layout>
            <Hero jc="center" ai="center">
                <Container>
                    <Header as="h1" type="display-title" color="white" align="center">
                        <Localize translate_text="_t_Pip Calculator_t_" />
                    </Header>
                </Container>
            </Hero>
            <PipCalculatorSection />
        </Layout>
    )
}

export default WithIntl()(PipCalculator)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Pip Calculator_t_"
        description="_t_Pip Calculator_t_"
        pageContext={pageContext}
    />
)
