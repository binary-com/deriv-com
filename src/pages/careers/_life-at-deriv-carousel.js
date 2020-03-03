import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { Header, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import Chevron from 'images/svg/carousel-chevron.svg'

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
    width: 78rem;
    max-width: 78rem;

    /* img {
        opacity: 1 !important;
    } */
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

const ImageSlide = ({ img_data, img_alt }) => {
    React.useEffect(() => {
        // duplicate slides from react-id-swiper are not considered within viewport and therefore opacity remains at 0
        // add classname to force opacity
        const duplicate_slides_el = document.getElementsByClassName('swiper-slide-duplicate')
        if (duplicate_slides_el) {
            const active_duplicates = Array.from(duplicate_slides_el)
            active_duplicates.forEach(el => {
                el.classList.add('force-opacity')
            })
        }
    })
    return (
        <ImageWrapper>
            <QueryImage data={img_data} alt={img_alt} />
        </ImageWrapper>
    )
}

ImageSlide.propTypes = {
    img_alt: PropTypes.string,
    img_data: PropTypes.object,
}

const fitness = {
    name: 'fitness',
    img_alt: localize('fitness'),
    index: 3,
}
const games = {
    name: 'games',
    img_alt: localize('games'),
    index: 1,
}
const greenarea = {
    name: 'greenarea',
    img_alt: localize('green area'),
    index: 4,
}
const gym = {
    name: 'gym',
    img_alt: localize('gym'),
    index: 5,
}
const lunch = {
    name: 'lunch',
    img_alt: localize('lunch'),
    index: 2,
}
const deriv_lifestyle_images = [games, lunch, fitness, greenarea, gym]

const query = graphql`
    query {
        fitness: file(relativePath: { eq: "careers/fitness.png" }) {
            ...fadeIn
        }
        games: file(relativePath: { eq: "careers/games.png" }) {
            ...fadeIn
        }
        greenarea: file(relativePath: { eq: "careers/green-area.png" }) {
            ...fadeIn
        }
        lunch: file(relativePath: { eq: "careers/lunch.png" }) {
            ...fadeIn
        }
        gym: file(relativePath: { eq: "careers/gym.png" }) {
            ...fadeIn
        }
    }
`

const LifeAtDerivCarousel = () => {
    const images = useStaticQuery(query)
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
                                        img_data={images[slide_content.name]}
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
