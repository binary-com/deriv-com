import React from 'react'
import styled, { keyframes } from 'styled-components'
import PlatformVideoMp4 from './Devices.mp4'
import VerticalCarousel from './_vertical-carousel.js'
import device from 'themes/device'
import { LinkButton } from 'components/form'
import { Container, CssGrid, Box, Flex, Show } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'

const HeroWrapper = styled.section`
    width: 100%;
    padding: 8rem 0;
    background-color: var(--color-black-7);
    position: relative;
`

const HeroButton = styled(LinkButton)`
    height: 4rem;
    display: flex;
    align-items: center;
    max-width: 20.5rem;

    @media ${device.tabletL} {
        margin: 0 auto;
        display: flex;
        font-size: 1.75rem;
        justify-content: center;
        max-width: 25.5rem;
        height: 5rem;
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
    font-size: 8rem;
    line-height: 1.25;

    @media ${device.tabletL} {
        font-size: 4rem;
    }
`
const contents = [
    'Tight spreads',
    'Sharp prices',
    '24x7 trading',
    '100+ tradeable assets',
    '20+ of experience',
]
const TypeWriter = styled(Header)`
    min-height: 7.2rem;

    @media ${device.tabletL} {
        font-size: 2.25rem;
    }
`
const HeroContainer = styled(CssGrid)`
    grid-template-columns: repeat(12, 1fr);
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
`
const ButtonWrapper = styled(Box)`
    grid-area: button;

    @media ${device.tabletL} {
        margin-top: 3rem;
    }
`
const StyledVideo = styled.video`
    grid-area: video;

    @media ${device.tabletL} {
        min-height: 25rem;
    }
`
export const Hero = () => {
    const subtitle = localize('Trade forex, commodities, stock and synthetic indices')
    const [type_writer, setTypeWriter] = React.useState('')
    let type_writer_timeout

    const typeWriterAnimation = (i = 0) => {
        if (i < subtitle.length) {
            setTypeWriter(subtitle.substring(0, i + 1))
            type_writer_timeout = setTimeout(() => typeWriterAnimation(i + 1), 13)
        }
    }

    React.useEffect(() => {
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
                        <Show.Desktop>
                            <Flex mb="1.6rem" direction="column">
                                <StyledHeader color="white" ad="0.5s">
                                    {localize('SIMPLE.')}
                                </StyledHeader>
                                <StyledHeader color="white" ad="0.6s">
                                    {localize('FLEXIBLE.')}
                                </StyledHeader>
                                <StyledHeader color="white" ad="0.7s">
                                    {localize('RELIABLE.')}
                                </StyledHeader>
                            </Flex>
                        </Show.Desktop>
                        <Show.Mobile>
                            <Flex>
                                <StyledHeader color="white" ad="0.5s" mb="2rem">
                                    {localize('SIMPLE. FLEXIBLE. RELIABLE.')}
                                </StyledHeader>
                            </Flex>
                        </Show.Mobile>
                        <TypeWriter as="h4" color="white" max_width="365px" weight="normal">
                            {type_writer}
                        </TypeWriter>
                        <VerticalCarousel contents={contents} />
                    </Details>
                    <StyledVideo width="100%" height="100%" autoPlay muted playsInline loop>
                        <source src={PlatformVideoMp4} type="video/mp4" />
                    </StyledVideo>
                    <ButtonWrapper>
                        <HeroButton secondary="true" to="/signup/">
                            {localize('Create free demo account')}
                        </HeroButton>
                    </ButtonWrapper>
                </HeroContainer>
            </Container>
        </HeroWrapper>
    )
}
