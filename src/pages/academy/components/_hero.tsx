import React from 'react'
import styled from 'styled-components'
import type { ImageDataLike } from 'gatsby-plugin-image'
import device from 'themes/device.js'
import { Flex } from 'components/containers'
import { BackgroundImage, Header } from 'components/elements'
import { LinkButton } from 'components/form'

type HeroProps = {
    cta_text: string
    description: string
    href: string
    imageAlt: string
    imageData: ImageDataLike
    title: string
}

const StyledBackground = styled(BackgroundImage)`
    max-width: 560px;
    width: 100%;
    height: 504px;
    object-fit: cover;
    background-size: cover;
    background-color: transparent;
    background-repeat: no-repeat, no-repeat;
    padding: 40px 40px 0 0;
    position: relative;

    @media ${device.tablet} {
        width: 100%;
        height: 304px;
        padding: 40px 16px 0 16px;
        margin-top: 32px;
    }
`
const Wrapper = styled.div`
    padding: 40px 16px 0 16px;
    z-index: 1;
    flex-direction: column;

    @media screen and (min-width: 1980px) {
        max-width: 1900px;
    }

    @media screen and (min-width: 785px) {
        padding: 80px 0 0 102px;
    }
`
const Container = styled(Flex)`
    background: #0e0e0e;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    position: relative;
    flex-direction: row;

    @media ${device.laptopM} {
        flex-direction: row;
    }

    @media ${device.tablet} {
        flex-direction: column;
    }
`
const Hero = ({ cta_text, href, imageAlt, imageData, title, description }: HeroProps) => {
    const button_text = cta_text ? cta_text : 'Learn more'

    return (
        <Container>
            <Wrapper>
                <Header color="white" type="heading-2" size="48px" weight="700px" mb="8px">
                    {title}
                </Header>
                <Header
                    as="p"
                    color="white"
                    weight="regular"
                    type="subtitle-2"
                    size="20px"
                    mb="20px"
                >
                    {description}
                </Header>
                <Flex jc="left" height="unset">
                    <LinkButton
                        id="hero-article"
                        to={href}
                        width="auto"
                        hero
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {button_text}
                    </LinkButton>
                </Flex>
            </Wrapper>
            <StyledBackground data={imageData} alt={imageAlt}></StyledBackground>
        </Container>
    )
}

export default Hero
