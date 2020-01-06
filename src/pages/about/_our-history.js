import React from 'react'
import styled from 'styled-components'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Wrapper, Container } from 'components/containers'
import { Header, Image, Text } from 'components/elements'
import { localize } from 'components/localization'
import Chevron from 'images/svg/fill-chevron.svg'
import Binary from 'images/svg/binary-blur.svg'
import Deriv from 'images/svg/deriv-blur.svg'

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 6rem;
`

const StyledContainer = styled(Container)`
    position: relative;
`

const ChevronRight = styled(Chevron)`
    cursor: pointer;
`

const ChevronLeft = styled(ChevronRight)`
    transform: rotate(180deg);
`

const StyledWrapper = styled(Wrapper)`
    background: var(--color-grey-8);
    padding: 8rem 0;
    position: relative;
`

const StyledSlide = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 79.2rem;
    align-items: center;
    margin: 4rem auto;
    width: 100%;
`

const StyledSlideText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledDotsWrapper = styled.ul`
    width: 100%;
    border-top: 4px solid var(--color-green);
    display: flex;
    justify-content: center;
    position: relative;

    &::after {
        content: '';
        width: 1.2rem;
        height: 1.2rem;
        background: var(--color-black);
        border-radius: 50%;
        position: absolute;
        left: 0;
        bottom: 0.8rem;
    }
    &::before {
        content: '';
        width: 1.2rem;
        height: 1.2rem;
        background: var(--color-black);
        border-radius: 50%;
        position: absolute;
        right: 0;
        bottom: 0.8rem;
    }
`

const StyledDot = styled.li`
    margin: 0 3rem;
    position: relative;

    & .carousel__dot {
        height: 10px;
        width: 3px;
        background: var(--color-grey);

        &--selected {
            &::after {
                content: '▼';
                font-size: var(--text-size-l);
                position: absolute;
                left: -11px;
                top: -19px;
                color: var(--color-red);
                text-shadow: 0 0 10px rgba(204, 46, 61, 0.5);
            }
            span {
                font-size: var(--text-size-m);
                font-weight: bold;
                color: var(--color-black);
                left: -3rem;
            }
        }
    }
`

const StyledYear = styled.span`
    position: absolute;
    top: 2rem;
    left: -2rem;
    font-size: var(--text-size-s);
    color: var(--color-grey);
`

const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`

const ButtonWrapper = styled.div`
    & .carousel__back-button {
        position: absolute;
        top: 40%;
        left: 0;

        &[disabled] {
            opacity: 0.32;
        }
    }
    & .carousel__next-button {
        position: absolute;
        top: 40%;
        right: 0;

        &[disabled] {
            opacity: 0.32;
        }
    }
`

const StyledBinary = styled(Binary)`
    position: absolute;
    left: -12.6rem;
    bottom: 4rem;
`

const StyledDeriv = styled(Deriv)`
    position: absolute;
    right: -12.6rem;
    bottom: 4rem;
`

const OurHistory = () => {
    return (
        <StyledWrapper>
            <StyledContainer justify="center" direction="column">
                <Header as="h2" align="center">
                    {localize('Our history')}
                </Header>
                <SliderWrapper>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={50}
                        totalSlides={2}
                    >
                        <Slider style={{ width: '80%', margin: '0 auto' }}>
                            <Slide index={0}>
                                <StyledSlide>
                                    <Wrapper width="90rem" margin={{ right: '2.4rem' }}>
                                        <Image img_name="jean-yves.png" />
                                    </Wrapper>

                                    <StyledSlideText>
                                        <StyledHeader as="h3">
                                            {localize('An award-winning young entrepreneur')}
                                        </StyledHeader>
                                        <Text>
                                            {localize(
                                                'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
                                            )}
                                        </Text>
                                    </StyledSlideText>
                                </StyledSlide>
                            </Slide>
                            <Slide index={1}>
                                <StyledSlide>
                                    <Wrapper width="90rem" margin={{ right: '2.4rem' }}>
                                        <Image img_name="jean-yves.png" />
                                    </Wrapper>

                                    <StyledSlideText>
                                        <StyledHeader as="h3">
                                            {localize('An award-winning young entrepreneur')}
                                        </StyledHeader>
                                        <Text>
                                            {localize(
                                                'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
                                            )}
                                        </Text>
                                    </StyledSlideText>
                                </StyledSlide>
                            </Slide>
                        </Slider>
                        <ButtonWrapper>
                            <ButtonBack>
                                <ChevronLeft />
                            </ButtonBack>
                            <ButtonNext>
                                <ChevronRight />
                            </ButtonNext>
                        </ButtonWrapper>
                        <StyledDotsWrapper>
                            <StyledDot>
                                <Dot slide={0}>
                                    <StyledYear>1993</StyledYear>
                                </Dot>
                            </StyledDot>
                            <StyledDot>
                                <Dot slide={1}>
                                    <StyledYear>1994</StyledYear>
                                </Dot>
                            </StyledDot>
                        </StyledDotsWrapper>
                    </CarouselProvider>
                </SliderWrapper>
                <StyledBinary />
                <StyledDeriv />
            </StyledContainer>
        </StyledWrapper>
    )
}

export default OurHistory
