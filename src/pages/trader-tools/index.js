import React from 'react'
import styled from 'styled-components'
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

const TraderTools = () => {
    return (
        <Layout>
            <SEO
                title={localize('Trade tools')}
                description={localize('Swap calculator and Margin calculator')}
            />
            <Hero jc="cneter" ai="center">
                <Container>
                    <Header as="h1" color="white" align="center">
                        {localize('Traders` tools')}
                    </Header>
                </Container>
            </Hero>
        </Layout>
    )
}

export default WithIntl()(TraderTools)
