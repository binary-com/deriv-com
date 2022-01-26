import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Section, ResponsiveHeader, ImgWrapper, ResponsiveFlex } from '../_hero'
import { Container } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'

const RightWrapper = styled(ImgWrapper)`
    max-width: 69rem;
`

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "interim/interim-faq-bg.png" }) {
            ...fadeIn
        }
    }
`

const Wrap = styled(Container)`
    @media ${device.tablet} {
        flex-wrap: wrap;
    }
`

const Hero = () => {
    const data = useStaticQuery(query)
    return (
        <>
            <Section bg="var(--color-black)" p="8rem 0">
                <Wrap>
                    <ResponsiveFlex fd="column" max_width="48.6rem" ai="center">
                        <ResponsiveHeader
                            as="h2"
                            type="page-title"
                            mb="1.2rem"
                            align="left"
                            lh="1.25"
                        >
                            <Localize translate_text="Binary.com has rebranded to Deriv.com and here’s what it means for partners" />
                        </ResponsiveHeader>
                    </ResponsiveFlex>
                    <RightWrapper>
                        <QueryImage
                            width="100%"
                            data={data['deriv']}
                            alt={`Deriv platforms`}
                            loading="eager"
                        />
                    </RightWrapper>
                </Wrap>
            </Section>
            <Container p="8rem 0" fd="column">
                <Header as="h4" type="sub-section-title" weight="normal" align="center" mb="4rem">
                    <Localize translate_text="As you are aware, we have rebranded Binary.com to Deriv.com. It is part of our renewed commitment to making online trading effortless and accessible to everyone through simple, flexible, and reliable solutions." />
                </Header>
                <Header as="h4" type="sub-section-title" weight="normal" align="center">
                    {localize(
                        'As part of our network of valued partners with clients of your own, you are probably curious and concerned about what this transformation means. We’ve put together this guide to help you understand the rebranding better and to support you in your communication with your clients.',
                    )}
                </Header>
            </Container>
        </>
    )
}

export default Hero
