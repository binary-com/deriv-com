import React from 'react'
import styled from 'styled-components'
import { SEO, Container, Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import Patterns from 'images/common/trade-types/trade-patterns.png'

const Hero = styled(Flex)`
    height: 40rem;
    background: var(--color-black);
    background-image: url(${Patterns});
    background-size: cover;
`

const Home = () => {
    return (
        <Layout>
            <SEO
                title={localize('Trade types | Options')}
                description={localize(
                    'Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <Container>
                    <Header as="h1" color="white" align="center">
                        {localize('Options')}
                    </Header>
                </Container>
            </Hero>
            <SectionContainer background="white">
                <Container direction="column">
                    <Header as="h2"></Header>
                </Container>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(Home)
