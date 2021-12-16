import React, { ReactElement } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    {
        deriv_platform: file(relativePath: { eq: "security/devices.jpg" }) {
            ...fadeIn
        }
    }
`

const ImageWrapper = styled.div`
    width: 38.4rem;
    height: 22.4rem;
    margin-left: 2.4rem;

    @media ${device.laptopM} {
        margin-left: 0;
    }
`

const WrapContainer = styled(Flex)`
    align-items: center;

    @media ${device.laptopM} {
        flex-direction: column;
    }
`

const WrapText = styled(Flex)`
    @media ${device.laptopM} {
        margin-bottom: 2.5rem;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.laptopM} {
        text-align: center;
    }
`

const AboutDeriv = (): ReactElement => {
    const data = useStaticQuery(query)

    return (
        <Container>
            <WrapContainer p="8.2rem 0">
                <WrapText direction="column" max_width="38.4rem">
                    <StyledHeader mb="0.8rem" as="h2" type="heading-2">
                        {localize('About Deriv')}
                    </StyledHeader>

                    <Text>
                        {localize(
                            'We provide online trading services to over 2 million clients via desktop and mobile applications across multiple platforms.',
                        )}
                    </Text>

                    <Text mt="2.4rem">
                        {localize(
                            'Security is important to us. We continuously improve our products and services by collaborating with independent security researchers worldwide.',
                        )}
                    </Text>
                </WrapText>

                <ImageWrapper>
                    <QueryImage data={data.deriv_platform} alt={'Deriv platform'} />
                </ImageWrapper>
            </WrapContainer>
        </Container>
    )
}

export default AboutDeriv
