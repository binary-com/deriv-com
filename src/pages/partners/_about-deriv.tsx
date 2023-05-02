import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex, Desktop, Mobile } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'

const query = graphql`
    {
        deriv_platform: file(relativePath: { eq: "partner-deriv-platform.png" }) {
            ...fadeIn
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
    @media ${device.laptopS} {
        margin-top: 12rem;
    }
`

const AboutDeriv = () => {
    const data = useStaticQuery(query)
    return (
        <Container direction="column">
            <Mobile>
                <Header mt="4rem" align="center" mb="4rem" as="h2" type="page-title">
                    <Localize translate_text="_t_About Deriv_t_" />
                </Header>
            </Mobile>
            <WrapContainer mb="8rem">
                <ImageWrapper>
                    <QueryImage
                        data={data.deriv_platform}
                        alt={localize('_t_Deriv.com on laptop and mobile_t_')}
                    />
                </ImageWrapper>

                <Flex direction="column" ml="2.4rem" max_width="69rem">
                    <Desktop>
                        <Header mt="4rem" mb="4rem" as="h2" type="page-title">
                            <Localize translate_text="_t_About Deriv_t_" />
                        </Header>
                    </Desktop>
                    <Text size="var(--text-size-m)" mb="2rem">
                        <Localize translate_text="_t_Deriv is the next step in the evolution of Binary.com, the company with a proven record of delivering market-leading products that are trusted around the world._t_" />
                    </Text>
                    <Text size="var(--text-size-m)">
                        <Localize translate_text="_t_We offer the widest selection of derivatives to trade, with sharp prices and tight spreads that attract over 2.5 million online traders worldwide. Our technology provides an intuitive and powerful trading experience, enabling our clients to understand risk more effectively to make better trading decisions._t_" />
                    </Text>
                </Flex>
            </WrapContainer>
        </Container>
    )
}

export default AboutDeriv
