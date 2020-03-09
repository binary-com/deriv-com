import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import Chevron from 'images/svg/carousel-chevron.svg'
import GymImage from 'images/common/careers/gym.jpg'
import FitnessImage from 'images/common/careers/fitness.jpg'
import LunchImage from 'images/common/careers/lunch.jpg'
import GamesImage from 'images/common/careers/games.jpg'
import GreenAreaImage from 'images/common/careers/green-area.jpg'

const StyledSection = styled(SectionContainer)`
    padding: 12rem 0;

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
    img {
        width: 78rem;
        max-width: 78rem;
        height: 100%;
        max-height: 60rem;

        @media ${device.tablet} {
            width: 35rem;
            max-width: 35rem;
        }
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
            background-color: rgba(0, 0, 0, 0.25);
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background-color 0.25s;

            &:hover {
                cursor: pointer;
                background-color: rgba(0, 0, 0, 0.5);
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

const ImageSlide = ({ img_path, img_alt }) => {
    return (
        <ImageWrapper>
            <img src={img_path} alt={img_alt} loading="lazy" />
        </ImageWrapper>
    )
}

ImageSlide.propTypes = {
    img_alt: PropTypes.string,
    img_path: PropTypes.object,
}

const fitness = {
    img_path: FitnessImage,
    img_alt: localize('fitness'),
    index: 3,
}
const games = {
    img_path: GamesImage,
    img_alt: localize('games'),
    index: 1,
}
const greenarea = {
    img_path: GreenAreaImage,
    img_alt: localize('green area'),
    index: 4,
}
const gym = {
    img_path: GymImage,
    img_alt: localize('gym'),
    index: 5,
}
const lunch = {
    img_path: LunchImage,
    img_alt: localize('lunch'),
    index: 2,
}
const deriv_lifestyle_images = [games, lunch, fitness, greenarea, gym]

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
                            {deriv_lifestyle_images.map(slide_content => (
                                <div className="swiper-slide" key={slide_content.name}>
                                    <ImageSlide
                                        img_path={slide_content.img_path}
                                        img_alt={slide_content.alt}
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
