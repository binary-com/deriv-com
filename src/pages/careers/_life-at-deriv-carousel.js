import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import { Helmet } from 'react-helmet'
import { Header } from 'components/elements'
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
    padding-bottom: 6.4rem;

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
            <img src={img_path} alt={img_alt} width="100%" height="100%" loading="lazy" />
        </ImageWrapper>
    )
}

ImageSlide.propTypes = {
    img_alt: PropTypes.string,
    img_path: PropTypes.string,
}

const fitness = {
    img_path: FitnessImage,
    img_alt: 'Yoga and Pilates',
    index: 3,
}
const games = {
    img_path: GamesImage,
    img_alt: 'Team Games',
    index: 1,
}
const greenarea = {
    img_path: GreenAreaImage,
    img_alt: 'Free Working Style',
    index: 4,
}
const gym = {
    img_path: GymImage,
    img_alt: 'Workout at Gym',
    index: 5,
}
const lunch = {
    img_path: LunchImage,
    img_alt: 'Lunch Buffets',
    index: 2,
}
const deriv_lifestyle_images = [games, lunch, fitness, greenarea, gym]

const LifeAtDerivCarousel = () => {
    const ref = React.useRef(null)

    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext()
        }
    }

    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev()
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
            <Helmet>
                <link rel="stylesheet" type="text/css" href="/css/swiper.css" />
            </Helmet>
            <StyledSection>
                <Container direction="column">
                    <StyledHeader align="center" as="h2">
                        Life at Deriv
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
                        <Swiper {...params} ref={ref}>
                            {deriv_lifestyle_images.map((slide_content, idx) => (
                                <div className="swiper-slide" key={idx}>
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
