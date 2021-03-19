import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "partner-deriv-platform.png" }) {
            childImageSharp {
                fluid(maxWidth: 486, srcSetBreakpoints: [340, 400, 600, 1280]) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    originalName
                }
            }
        }
    }
`

const WrapContainer = styled(Flex)`
    @media ${device.laptopM} {
        flex-wrap: wrap;
    }
`

const ImageWrapper = styled.div`
    width: 48.6rem;
    height: 32rem;
`

const AboutDeriv = () => {
    const data = useStaticQuery(query)
    return (
        <Container direction="column">
            <Header mt="4rem" align="center" mb="4rem" as="h2" type="page-title">
                {localize('About Deriv')}
            </Header>
            <WrapContainer mb="8rem">
                <ImageWrapper>
                    <QueryImage data={data.deriv_platform} alt={'Deriv platform'} />
                </ImageWrapper>

                <Flex direction="column" ml="2.4rem" max_width="69rem">
                    <Text size="var(--text-size-m)" mb="2rem">
                        {localize(
                            'Deriv is the next step in the evolution of Binary.com, the company with a proven record of delivering market-leading products that are trusted around the world.',
                        )}
                    </Text>
                    <Text size="var(--text-size-m)">
                        {localize(
                            'We offer the widest selection of derivatives to trade, with sharp prices and tight spreads that attract over a million online traders worldwide. Our technology provides an intuitive and powerful trading experience, enabling our clients to understand risk more effectively to make better trading decisions.',
                        )}
                    </Text>
                </Flex>
            </WrapContainer>
        </Container>
    )
}

export default AboutDeriv
