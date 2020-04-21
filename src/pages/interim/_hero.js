import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex, Box } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'

const Section = styled(Box)`
    ${Header} {
        color: var(--color-white);
    }
`

const ResponsiveFlex = styled(Flex)`
    @media (max-width: 1400px) {
        margin-top: 2.4rem;
        max-width: 100%;
        margin-right: 0;
    }
`

const FitButton = styled(LinkButton)`
    width: fit-content;
`

const query = graphql`
    query {
        platform: file(relativePath: { eq: "hero-platform.png" }) {
            ...fadeIn
        }
    }
`

const HeroDeriv = () => {
    const data = useStaticQuery(query)
    return (
        <Section bg="var(--color-black)" p="8rem 0">
            <Container fw="wrap-reverse">
                <ResponsiveFlex fd="column" max_width="58.8rem">
                    <Header as="h2" mb="1.2rem">
                        {localize(
                            'Introducing Deriv — our new comprehensive online trading service',
                        )}
                    </Header>
                    <Header as="h4" weight="normal" mb="4rem">
                        {localize('Built upon 20+ years of experience')}
                    </Header>
                    <FitButton secondary to="/dtrader">
                        {localize('Explore deriv')}
                    </FitButton>
                </ResponsiveFlex>
                <QueryImage
                    width="58.9rem"
                    height="34.5rem"
                    data={data['platform']}
                    alt="Deriv platforms"
                />
            </Container>
        </Section>
    )
}

export default HeroDeriv
