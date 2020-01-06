import React from 'react'
import styled from 'styled-components'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Wrapper, Container } from 'components/containers'
import { Header, Image, Text } from 'components/elements'
import { localize } from 'components/localization'
import ChevronRight from 'images/svg/fill-chevron.svg'
import Binary from 'images/svg/binary-blur.svg'
import Deriv from 'images/svg/deriv-blur.svg'
import device from 'themes/device'

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 6rem;

    @media ${device.laptopLC} {
        padding-bottom: 0;
    }
`

const StyledContainer = styled(Container)`
    position: relative;
`

const ChevronLeft = styled(ChevronRight)`
    transform: rotate(180deg);
`

const StyledWrapper = styled(Wrapper)`
    background: var(--color-grey-8);
    padding: 8rem 0;
    position: relative;

    @media ${device.tabletS} {
        display: none;
    }
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

    @media ${device.laptopLC} {
        display: none;
    }
`

const StyledDot = styled.li`
    margin: 0 2.9rem;
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
        cursor: pointer;

        &[disabled] {
            opacity: 0.32;
            cursor: default;
        }
    }
    & .carousel__next-button {
        position: absolute;
        top: 40%;
        right: 0;
        cursor: pointer;

        &[disabled] {
            opacity: 0.32;
            cursor: default;
        }
    }
`

const StyledBinary = styled(Binary)`
    position: absolute;
    left: -15.6rem;
    bottom: 4rem;

    @media ${device.laptopLC} {
        display: none;
    }
`

const StyledDeriv = styled(Deriv)`
    position: absolute;
    right: -15.6rem;
    bottom: 4rem;

    @media ${device.laptopLC} {
        display: none;
    }
`

const history_data = [
    {
        year: '1990',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '1993',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '1999',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2000',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2001',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2004',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2007',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2008',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2009',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2011',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2012',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2013',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2014',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2015',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2016',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2017',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2018',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
    {
        year: '2019',
        title: localize('An award-winning young entrepreneur'),
        description: localize(
            'It all started with the man behind Binary.com and Deriv: founder and CEO Jean-Yves Sireau. At 19, he created his own technical analysis software that won him the Jacques Douce Prize for young entrepreneurs by the French Prime Minister. Inspired by this, he decided to pursue his dream of starting his own company.',
        ),
        image: 'jean-yves.png',
    },
]

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
                        totalSlides={history_data.length}
                    >
                        <Slider style={{ width: '80%', margin: '0 auto' }}>
                            {history_data.map((history, index) => (
                                <Slide key={index} index={index}>
                                    <StyledSlide>
                                        <Wrapper width="90rem" margin={{ right: '2.4rem' }}>
                                            <Image img_name={history.image} />
                                        </Wrapper>
                                        <StyledSlideText>
                                            <StyledHeader as="h3">{history.title}</StyledHeader>
                                            <Text>{history.description}</Text>
                                        </StyledSlideText>
                                    </StyledSlide>
                                </Slide>
                            ))}
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
                            {history_data.map((history, index) => (
                                <StyledDot key={index}>
                                    <Dot slide={index}>
                                        <StyledYear>{history.year}</StyledYear>
                                    </Dot>
                                </StyledDot>
                            ))}
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
