import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'
import VerticalCarousel from './_vertical-carousel.js'
import device from 'themes/device'
import { LinkButton } from 'components/form'
import { Container, CssGrid, Box, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { Localize, localize } from 'components/localization'

const HeroWrapper = styled.section`
    width: 100%;
    padding: 8rem 0;
    background-color: var(--color-black-7);
    position: relative;
`

const HeroButton = styled(LinkButton)`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 205px;
    width: fit-content;

    @media ${device.tabletL} {
        margin: 0 auto;
    }
`
const FadeIn = keyframes`
    0% {
        opacity: 0;
        margin-left: -75px;
    }
    100% {
        opacity: 1;
        margin-left: 0;
    }
`
const StyledHeader = styled(Header)`
    animation-name: ${FadeIn};
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-delay: ${(props) => props.ad};
    will-change: opacity, margin-left;
    font-size: 8rem;
    line-height: 1.25;

    @media ${device.tabletL} {
        font-size: 40px;
    }
`
const contents = [
    <Localize key={0} translate_text="20+ years of experience" />,
    <Localize key={1} translate_text="100+ tradeable assets" />,
    <Localize key={2} translate_text="24x7 trading" />,
    <Localize key={3} translate_text="Sharp prices" />,
    <Localize key={4} translate_text="Tight spreads" />,
]

const contents_ppc = [
    <Localize key={0} translate_text="20+ years of experience" />,
    <Localize key={1} translate_text="100+ tradeable assets" />,
    <Localize key={2} translate_text="Sharp prices" />,
    <Localize key={3} translate_text="Tight spreads" />,
]

const TypeWriter = styled(Header)`
    min-height: 7.2rem;
`
const HeroContainer = styled(CssGrid)`
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    grid-column-gap: 2.4rem;
    grid-template-areas:
        'details details details details details video video video video video video video'
        'button button button button button button button button button button button button';

    @media ${device.tabletL} {
        grid-template-columns: repeat(1, 1fr);
        grid-template-areas:
            'details'
            'video'
            'button';
    }
`

const Details = styled(Box)`
    grid-area: details;
    max-height: 58.7rem;
`
const ButtonWrapper = styled(Box)`
    grid-area: button;

    @media ${device.tabletL} {
        margin-top: 3rem;
    }
`
const ImageWrapper = styled(Box)`
    grid-area: video;
    margin-top: 4rem;

    @media ${device.tabletL} {
        margin-top: 0;
    }
`

const MobileWrapper = styled(Flex)`
    display: none;
    @media ${device.tabletL} {
        display: block;
    }
`

const DesktopWrapper = styled(Flex)`
    display: block;
    @media ${device.tabletL} {
        display: none;
    }
`

const Hero = ({ is_ppc }) => {
    const typewriter_text = !is_ppc
        ? localize('Trade forex, commodities, synthetic and stock indices')
        : localize('Trade forex, commodities, and stock indices')
    const [type_writer, setTypeWriter] = useState('')
    let type_writer_timeout

    const typeWriterAnimation = (i = 0) => {
        if (i < typewriter_text.length) {
            setTypeWriter(typewriter_text.substring(0, i + 1))
            type_writer_timeout = setTimeout(() => typeWriterAnimation(i + 1), 13)
        }
    }

    useEffect(() => {
        let start_animations_timeout = setTimeout(() => {
            typeWriterAnimation()
        }, 1200)
        return () => {
            clearTimeout(start_animations_timeout)
            clearTimeout(type_writer_timeout)
        }
    }, [])

    return (
        <HeroWrapper>
            <Container>
                <HeroContainer>
                    <Details>
                        <DesktopWrapper mb="1.6rem" direction="column">
                            <StyledHeader color="white" ad="0.5s">
                                <Localize translate_text="Simple." />
                            </StyledHeader>
                            <StyledHeader color="white" ad="0.6s">
                                <Localize translate_text="Flexible." />
                            </StyledHeader>
                            <StyledHeader color="white" ad="0.7s">
                                <Localize translate_text="Reliable." />
                            </StyledHeader>
                        </DesktopWrapper>
                        <MobileWrapper>
                            <StyledHeader color="white" mb="2rem" as="h1">
                                <Localize translate_text="Simple. Flexible. Reliable." />
                            </StyledHeader>
                        </MobileWrapper>
                        <TypeWriter
                            as="h2"
                            type="sub-section-title"
                            color="white"
                            max_width="430px"
                            weight="normal"
                        >
                            {localize(type_writer)}
                        </TypeWriter>
                        <VerticalCarousel contents={!is_ppc ? contents : contents_ppc} />
                    </Details>
                    <ImageWrapper>
                        <StaticImage
                            src="../../images/common/home/platform_devices.png"
                            alt="platform devices"
                            placeholder="dominantColor"
                            formats={['avif', 'webp', 'jpg']}
                            loading="eager"
                        />
                    </ImageWrapper>
                    <ButtonWrapper>
                        <HeroButton secondary="true" to="/signup/">
                            <Localize translate_text="Create free demo account" />
                        </HeroButton>
                    </ButtonWrapper>
                </HeroContainer>
            </Container>
        </HeroWrapper>
    )
}

Hero.propTypes = {
    is_ppc: PropTypes.bool,
}

export default Hero
