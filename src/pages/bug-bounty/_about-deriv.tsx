import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { localize, Localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    {
        deriv_platform: file(relativePath: { eq: "bug-bounty/devices.png" }) {
            childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP]
                    layout: CONSTRAINED
                    quality: 70
                    breakpoints: [360, 992]
                    placeholder: NONE
                )
            }
        }
    }
`

const ImageWrapper = styled.div`
    width: 384px;
    margin-left: 2.4rem;

    @media ${device.laptopM} {
        margin-left: 0;
    }

    @media ${device.tablet} {
        width: 328px;
    }

    @media ${device.mobileM} {
        width: 285px;
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
        text-align: left;
    }
`

const AboutDeriv = () => {
    const data = useStaticQuery(query)

    return (
        <Container>
            <WrapContainer p="8rem 0" tablet={{ p: '40px 0' }}>
                <WrapText direction="column" max_width="38.4rem" tablet={{ max_width: '100%' }}>
                    <StyledHeader mb="0.8rem" as="h2" type="heading-2">
                        {localize('About Deriv')}
                    </StyledHeader>
                    <Header
                        type="paragraph-1"
                        weight="normal"
                        as="p"
                        mb="16px"
                        laptopM={{ mb: '14px' }}
                    >
                        <Localize translate_text="We provide online trading services to over 2 million clients via desktop and mobile applications across multiple platforms." />
                    </Header>
                    <Header type="paragraph-1" weight="normal" as="p">
                        <Localize translate_text="Security is important to us. We continuously improve our products and services by collaborating with independent security researchers worldwide." />
                    </Header>
                </WrapText>

                <ImageWrapper>
                    <QueryImage
                        data={data.deriv_platform}
                        alt={
                            'Send us an email with the report of a bug you found on Deriv trading platforms or apps.'
                        }
                        loading="eager"
                    />
                </ImageWrapper>
            </WrapContainer>
        </Container>
    )
}

export default AboutDeriv
