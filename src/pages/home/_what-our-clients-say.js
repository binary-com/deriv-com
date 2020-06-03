import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import { Helmet } from 'react-helmet'
import { Header, Text, Divider } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import { Container, SectionContainer, Flex } from 'components/containers'
import Chevron from 'images/svg/carousel-chevron.svg'
import RobertoImage from 'images/common/roberto.png'
import FabioImage from 'images/common/fabio.png'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        height: unset;
        padding: 5rem 0;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 4.5rem;
    }
`
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
    width: 58.2rem;
    padding-top: 5.2rem;
    position: relative;
    overflow: hidden;

    @media ${device.tabletL} {
        padding: 4rem;
    }
`

const QuoteText = styled(Text)`
    text-align: left;
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

    @media ${device.tabletL} {
        padding-bottom: 0.5rem;
        font-size: 2rem;
        text-align: center;
        margin: 0 auto;
        max-width: 27rem;
    }
`

const SmallText = styled(Text)`
    font-size: var(--text-size-xs);
    opacity: 0.5;

    @media ${device.tabletL} {
        font-size: 1.75rem;
    }
`
const Name = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
    }
`
const ImageWrapper = styled.div`
    width: 50px;
    margin-right: 1.6rem;

    img {
        width: 50px;
    }
`

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;

    @media ${device.laptopLC} {
        padding-bottom: 0;
    }
`
const Next = styled.div``
const Prev = styled.div``
const ButtonWrapper = styled.div`
    svg {
        height: 21px;
        width: 21px;
    }
    div {
        button {
            border: none;
            background: transparent;

            &:hover {
                cursor: pointer;
            }
            &:focus {
                outline: none;
            }
        }

        z-index: 10;
        position: absolute;
    }
    ${Next} {
        top: 50%;
        right: 20%;
        width: 31px;

        @media ${device.tabletL} {
            right: 22%;
        }
        @media ${device.tabletS} {
            right: 2px;
        }
    }
    ${Prev} {
        top: 50%;
        left: 20%;
        width: 31px;

        @media ${device.tabletL} {
            right: 5%;
        }
        @media ${device.tabletS} {
            left: -3px;
        }
    }
`
const ClientSlide = ({ quote, img_path, img_alt, name, title }) => (
    <Flex ai="center" height="unset">
        <ClientCard>
            <QuoteText as="blockquote">{quote}</QuoteText>
            <Divider width="28rem" color="grey-8" />
            <Flex p="1.7rem 0 0 0">
                <Flex ai="center" width="auto">
                    <ImageWrapper>
                        <img src={img_path} alt={img_alt} loading="lazy" />
                    </ImageWrapper>
                </Flex>
                <figure>
                    <Name weight="bold">{name}</Name>
                    <SmallText>{title}</SmallText>
                </figure>
            </Flex>
        </ClientCard>
    </Flex>
)

ClientSlide.propTypes = {
    img_alt: PropTypes.string,
    img_path: PropTypes.string,
    name: PropTypes.string,
    quote: PropTypes.node,
    title: PropTypes.node,
}

const roberto = {
    name: 'Roberto Arcanjo',
    title: <Localize translate_text="CEO - Mercado Trader" />,
    img_path: RobertoImage,
    quote: (
        <Localize translate_text="I am very excited about all the technology involved in Deriv.com —  an intuitive and optimised platform." />
    ),
    index: 1,
}
const fabio = {
    name: 'Fábio Oliveira',
    title: <Localize translate_text="CEO - Bitcoin Informer" />,
    img_path: FabioImage,
    quote: (
        <Localize translate_text="It surpassed my expectations. Binary got it right with Deriv. Trading on the platform is excellent and it allows for making accurate graphical analyses of the market and adding support and resistance markings with the use of horizontal lines, RSI, FIBO and much more." />
    ),
    index: 2,
}

const our_client_slides = [roberto, fabio]

const WhatOurClientsSay = () => {
    const [swiper, updateSwiper] = useState(null)

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext()
        }
    }

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev()
        }
    }

    const params = {
        lazy: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        height: '100%',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    }
    return (
        <>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="/css/swiper.css" />
            </Helmet>
            <StyledSection>
                <Container direction="column">
                    <StyledHeader align="center" as="h2">
                        {localize('What our clients say about Deriv')}
                    </StyledHeader>
                </Container>
                <SliderWrapper>
                    <ButtonWrapper>
                        <Next>
                            <button onClick={goNext}>
                                <ChevronRight />
                            </button>
                        </Next>
                        <Prev>
                            <button onClick={goPrev}>
                                <ChevronLeft />
                            </button>
                        </Prev>
                    </ButtonWrapper>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Swiper {...params} getSwiper={updateSwiper}>
                            {our_client_slides.map((trader) => (
                                <div className="swiper-slide" key={trader.name}>
                                    <ClientSlide
                                        quote={trader.quote}
                                        name={trader.name}
                                        title={trader.title}
                                        img_path={trader.img_path}
                                        img_alt={trader.name + localize(" - Deriv's Client")}
                                    />
                                </div>
                            ))}
                        </Swiper>
                    </div>
                </SliderWrapper>
            </StyledSection>
        </>
    )
}

export default WhatOurClientsSay
