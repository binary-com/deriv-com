import React from 'react'
import styled from 'styled-components'
import type { ImageDataLike } from 'gatsby-plugin-image'
import device from 'themes/device'
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
    width: 1200px;
    height: 480px;
    object-fit: cover;
    background-size: cover;
    background-color: transparent;
    background-repeat: no-repeat, no-repeat;
    position: relative;

    @media ${device.tablet} {
        height: 304px;
        padding: 40px 16px 0 16px;
    }
`
const Wrapper = styled.div`
    left: 0;
    top: 35px;
    position: absolute;
    z-index: 1;
    flex-direction: column;
    padding: 20px 16px 0 16px;

    @media screen and (min-width: 1980px) {
        max-width: 1900px;
    }

    @media screen and (min-width: 768px) {
        padding: 80px 0 0 102px;
    }
`
const Container = styled(Flex)`
    background: #0e0e0e;
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    flex-direction: row;

    @media ${device.laptopM} {
        flex-direction: row;
    }
`
const Hero = ({ cta_text, href, imageAlt, imageData, title, description }: HeroProps) => {
    const button_text = cta_text ? cta_text : 'Learn more'

    return (
        <Container>
            <Wrapper>
                <Header color="white" type="heading-2" weight="700" mb="8px">
                    {title}
                </Header>
                <Header as="p" color="white" weight="400" type="subtitle-2" size="20px" mb="20px">
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
