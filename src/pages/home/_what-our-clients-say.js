import React from 'react'
import styled from 'styled-components'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Header, Text, Image, Divider } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import { Container, SectionContainer, Flex } from 'components/containers'
import Chevron from 'images/svg/carousel-chevron.svg'

const StyledChevron = styled(Chevron)`
    g {
        g {
            fill: var(--color-black);
        }
    }
`
const ChevronRight = styled(StyledChevron)`
    transform: rotate(180deg);
`
const ChevronLeft = StyledChevron

const ClientCard = styled.article`
    width: 58rem;
    padding-top: 5.2rem;
    position: relative;
    overflow: hidden;
`

const QuoteText = styled(Text)`
    text-align: center;
    padding-bottom: 3.2rem;
    z-index: 10;
    position: relative;

    &::after {
        content: '“';
        position: absolute;
        font-size: 24rem;
        z-index: -1;
        left: -1rem;
        top: -10.6rem;
        color: var(--color-grey-8);
    }
`

const SmallText = styled(Text)`
    font-size: var(--text-size-xs);
    opacity: 0.5;
`
const ImageWrapper = styled.div`
    width: 50px;
    margin-right: 1.6rem;
`

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 6rem;
    @media ${device.laptopLC} {
        padding-bottom: 0;
    }
`

const ButtonWrapper = styled.div`
    svg {
        height: 21px;
        width: 21px;
    }
    & .carousel__back-button {
        border: none;
        background: transparent;
        position: absolute;
        top: 18%;
        left: 13%;
        cursor: pointer;

        &[disabled] {
            opacity: 0.32;
            cursor: default;
        }
    }
    & .carousel__next-button {
        border: none;
        background: transparent;
        position: absolute;
        top: 18%;
        right: 13%;
        cursor: pointer;

        &[disabled] {
            opacity: 0.32;
            cursor: default;
        }
    }
`

const WhatOurClientsSay = () => (
    <SectionContainer padding="6rem 0" style={{ height: '43.1rem' }}>
        <Container direction="column">
            <Header align="center" font_size="var(--text-size-header-1)" as="h2">
                {localize('What our clients say about Deriv')}
            </Header>
            <SliderWrapper>
                <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={50} totalSlides={3}>
                    <Slider style={{ width: '80%', height: '42.8rem', margin: '0 auto' }}>
                        <Slide index={0}>
                            <Flex ai="center" height="unset">
                                <ClientCard>
                                    <QuoteText as="blockquote">
                                        {localize(
                                            'Customer service support very awesome and first to respond to queries and helping on marketing part. No much struggle introducing new members to Binary.com since the company name already have a known truck of good ethics.',
                                        )}
                                    </QuoteText>
                                    <Divider width="28rem" color="grey-8" />
                                    <Flex p="1.7rem 0 0 0">
                                        <Flex ai="center" width="auto">
                                            <ImageWrapper>
                                                <Image
                                                    img_name="paul.png"
                                                    alt={localize('trader profile')}
                                                    width="100%"
                                                />
                                            </ImageWrapper>
                                        </Flex>
                                        <figure>
                                            <Text weight="bold">Paul Mugenda</Text>
                                            <SmallText>{localize('Forex trader')}</SmallText>
                                        </figure>
                                    </Flex>
                                </ClientCard>
                            </Flex>
                        </Slide>
                        <Slide index={1}>
                            <Flex ai="center" height="unset">
                                <ClientCard>
                                    <QuoteText as="blockquote">
                                        {localize(
                                            'I am very excited about all the technology involved in Deriv.com —  an intuitive and optimised platform.',
                                        )}
                                    </QuoteText>
                                    <Divider width="28rem" />
                                    <Flex p="1.7rem 0 0 0">
                                        <Flex ai="center" width="auto">
                                            <ImageWrapper>
                                                <Image
                                                    img_name="roberto.png"
                                                    alt={localize('trader profile')}
                                                    width="100%"
                                                />
                                            </ImageWrapper>
                                        </Flex>
                                        <figure>
                                            <Text weight="bold">Roberto Arcanjo</Text>
                                            <SmallText>
                                                {localize('CEO - Mercado Trader')}
                                            </SmallText>
                                        </figure>
                                    </Flex>
                                </ClientCard>
                            </Flex>
                        </Slide>
                        <Slide index={2}>
                            <Flex ai="center" height="unset">
                                <ClientCard>
                                    <QuoteText as="blockquote">
                                        {localize(
                                            'It surpassed my expectations. Binary got it right with Deriv. Trading on the platform is excellent and it allows for making accurate graphical analyses of the market and adding support and resistance markings with the use of horizontal lines, RSI, FIBO and much more.',
                                        )}
                                    </QuoteText>
                                    <Divider width="28rem" />
                                    <Flex p="1.7rem 0 0 0">
                                        <Flex ai="center" width="auto">
                                            <ImageWrapper>
                                                <Image
                                                    img_name="fabio.png"
                                                    alt={localize('trader profile')}
                                                    width="100%"
                                                />
                                            </ImageWrapper>
                                        </Flex>
                                        <figure>
                                            <Text weight="bold">Fábio Oliveira</Text>
                                            <SmallText>
                                                {localize('CEO - Bitcoin Informer')}
                                            </SmallText>
                                        </figure>
                                    </Flex>
                                </ClientCard>
                            </Flex>
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
                </CarouselProvider>
            </SliderWrapper>
        </Container>
    </SectionContainer>
)

export default WhatOurClientsSay
