import React from 'react'
import styled from 'styled-components'
import { SEO, SectionContainer, Container } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Header, Text } from 'components/elements'

const BackDrop = styled.section`
    background-color: var(--color-black);
    padding: 12rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Header} {
        padding-bottom: 5.4rem;
    }
    ${Text} {
        max-width: 86.2rem;
        text-align: center;
    }
`

const Hero = () => (
    <BackDrop>
        <Header as="h1" font_size="var(--text-size-xl)" align="center" color="white">
            {localize('Truly global')}
        </Header>
        <Text size="var(--text-size-sm)" color="white">
            {localize(
                'We are in 5 cities in 4 countries. When you join Deriv, here are some of the great places around the globe you’ll get to experience.',
            )}
        </Text>
    </BackDrop>
)

const CardGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 6rem 2.4rem;
    margin-top: 8rem;
`

const Locations = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Locations')} />
        <Hero />
        <Container direction="column">
            <SectionContainer>
                <Header as="h2" align="center">
                    {localize('Where we work')}
                </Header>
                <CardGrid>
                    <div>Ascunción</div>
                    <div>Cyberjaya</div>
                    <div>Dubai</div>
                    <div>Labuan</div>
                    <div>Malta</div>
                </CardGrid>
            </SectionContainer>
        </Container>
    </Layout>
)

export default WithIntl()(Locations)
