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
                            <Localize translate_text="Binary.com has rebranded to Deriv.com and here is everything you need to know" />
                        </ResponsiveHeader>
                    </ResponsiveFlex>
                    <RightWrapper>
                        <QueryImage width="100%" data={data['deriv']} alt={`Deriv platforms`} />
                    </RightWrapper>
                </Wrap>
            </Section>
            <Container p="8rem 0" fd="column">
                <Header as="h4" type="sub-section-title" weight="normal" align="center" mb="4rem">
                    <Localize translate_text="You may have heard about the exciting improvements we’ve made recently to Binary.com. Yes, we’ve rebranded to Deriv.com as part of our renewed commitment to enhance your online trading experience." />
                </Header>
                <Header as="h4" type="sub-section-title" weight="normal" align="center">
                    {localize(
                        'We know you may have some questions about these changes, so here are answers to shed light on our transformation. In this FAQ, we explain to you what the rebranding is about, how the rebranding transforms our service delivery, and what it means to you.',
                    )}
                </Header>
            </Container>
        </>
    )
}

export default Hero
