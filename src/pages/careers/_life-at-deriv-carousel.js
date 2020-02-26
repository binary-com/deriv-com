import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { Header, Image } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import Chevron from 'images/svg/carousel-chevron.svg'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        height: unset;
        padding: 5rem 0;
    }
`
const StyledHeader = styled(Header)`
    font-size: var(--text-size-header-1);
    padding-bottom: 4.4rem;

    @media ${device.tabletL} {
        font-size: 4.5rem;
    }
`
const StyledChevron = styled(Chevron)`
    g {
        g {
            fill: var(--color-white);
        }
    }
`
const ChevronRight = styled(StyledChevron)`
    transform: rotate(180deg);
    padding-right: 5px;
`
const ChevronLeft = styled(StyledChevron)`
    padding-right: 5px;
`

const ImageWrapper = styled.div`
    width: 78rem;
    max-width: 78rem;

    img {
        opacity: 1 !important;
    }
    @media ${device.tablet} {
        width: 35rem;
        max-width: 35rem;
    }
`

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;

    @media ${device.laptopLC} {
        padding-bottom: 0;
    }
`
const SwiperWrapper = styled.div`
    .swiper-container {
        padding-bottom: 4rem;
    }
    .swiper-slide {
        width: 78rem;
    }
    @media ${device.tablet} {
        .swiper-slide {
            width: 35rem;
        }
    }
`
const Next = styled.div``
const Prev = styled.div``

const ButtonWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    @media ${device.tablet} {
        display: none;
    }

    svg {
        height: 24px;
        width: 24px;
    }
    div {
        button {
            padding: 5rem 0.9rem;
            background-color: rgba(0, 0, 0, 0.5);
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;

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
        right: 0;
        bottom: -32rem;
    }
    ${Prev} {
        left: 0;
        bottom: -32rem;
    }
`

const EmployeeSlide = ({ img_path, img_alt }) => {
    return (
        <ImageWrapper>
            <Image img_name={img_path} alt={img_alt} />
        </ImageWrapper>
    )
}

EmployeeSlide.propTypes = {
    img_alt: PropTypes.string,
    img_path: PropTypes.string,
}

const fitness = {
    img_path: 'fitness.png',
    index: 3,
}
const games = {
    img_path: 'games.png',
    index: 1,
}
const green_area = {
    img_path: 'green-area.png',
    index: 4,
}
const gym = {
    img_path: 'gym.png',
    index: 5,
}
const lunch = {
    img_path: 'lunch.png',
    index: 2,
}
const deriv_lifestyle_images = [fitness, games, green_area, gym, lunch]

const LifeAtDerivCarousel = () => {
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
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 12,
        loop: true,
        lazy: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
    }
    return (
        <>
            <StyledSection>
                <Container direction="column">
                    <StyledHeader align="center" as="h2">
                        {localize('Life at Deriv')}
                    </StyledHeader>
                </Container>
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
                <SliderWrapper>
                    <SwiperWrapper>
                        <Swiper {...params} getSwiper={updateSwiper}>
                            {deriv_lifestyle_images.map(trader => (
                                <div className="swiper-slide" key={trader.name}>
                                    <EmployeeSlide
                                        quote={trader.quote}
                                        name={trader.name}
                                        title={trader.title}
                                        img_path={trader.img_path}
                                        img_alt={localize('Trader')}
                                    />
                                </div>
                            ))}
                        </Swiper>
                    </SwiperWrapper>
                </SliderWrapper>
            </StyledSection>
        </>
    )
}

export default LifeAtDerivCarousel
