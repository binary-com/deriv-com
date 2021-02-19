import React from 'react'
import styled from 'styled-components'
import PipCalculator from './_pip-calculator'
import { Flex, Container, SEO } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import Patterns from 'images/common/trade-tools/trade-tools-bg.png'

const Hero = styled(Flex)`
    height: 40rem;
    background: var(--color-black);
    background-image: url(${Patterns});
    background-size: cover;
`

const MarginCalc = () => {
    return (
        <Layout>
            <SEO title={localize('Trade tools')} description={localize('Pip calculator')} />
            <Hero jc="center" ai="center">
                <Container>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Pip Calculator')}
                    </Header>
                </Container>
            </Hero>
            <PipCalculator />
        </Layout>
    )
}

export default WithIntl()(MarginCalc)
