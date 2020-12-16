import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Carousel, Header } from 'components/elements'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
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
    padding-bottom: 6.4rem;
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
    const settings = {
        options: {
            loop: true,
            axis: 'x',
        },
        container_style: {
            height: '50%',
        },
        slide_style: {
            width: '100%',
            position: 'relative',
            paddingRight: '10px',
        },
        chevron_style: {
            chevron_left: {
                padding: '5rem 0.9rem',
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                marginLeft: '-0.9rem',
            },
            chevron_right: {
                padding: '5rem 0.9rem',
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                marginRight: '-0.9rem',
            },
            chevron_color: 'white',
        },
    }

    return (
        <>
            <StyledSection>
                <Container direction="column">
                    <StyledHeader align="center" as="h3" type="section-title">
                        Life at Deriv
                    </StyledHeader>
                </Container>
                <Carousel {...settings}>
                    {deriv_lifestyle_images.map((slide_content, idx) => (
                        <div key={idx}>
                            <ImageSlide
                                img_path={slide_content.img_path}
                                img_alt={slide_content.alt}
                            />
                        </div>
                    ))}
                </Carousel>
            </StyledSection>
        </>
    )
}

export default LifeAtDerivCarousel
