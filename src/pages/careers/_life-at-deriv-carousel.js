import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Header } from 'components/elements'
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
        width: 100%;
        height: 100%;
        border-radius: 10px;

        @media ${device.tablet} {
            width: 35rem;
            max-width: 35rem;
        }
    }
`
const MasonryGrid = styled.div`
    max-width: 100%;
    padding: 1rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr auto;
    grid-gap: 2rem;
`

const ImageOne = styled.div`
    grid-row: span 1;
    grid-column: span 1;
`
const ImageTwo = styled.div`
    grid-column: span 1;
    grid-row: span 2;
`
const ImageThree = styled.div`
    grid-column: span 1;
    grid-row: span 2;
`
const ImageFour = styled.div`
    grid-column: span 1;
    grid-row: span 1;
`
const ImageFive = styled.div`
    grid-column: span 0.5;
    grid-row: span 1;
`
const ImageSix = styled.div`
    grid-column: 3 / 5;
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
    img_path: PropTypes.string,
}

const LifeAtDerivCarousel = () => {
    return (
        <>
            <StyledSection>
                <Container direction="column">
                    <StyledHeader align="center" as="h3" type="section-title">
                        Life at Deriv
                    </StyledHeader>
                    <MasonryGrid>
                        <ImageOne>
                            <img
                                src={FitnessImage}
                                alt={''}
                                width="100%"
                                height="100%"
                                loading="lazy"
                            />
                        </ImageOne>
                        <ImageTwo>
                            <img
                                src={GymImage}
                                alt={''}
                                width="100%"
                                height="100%"
                                loading="lazy"
                            />
                        </ImageTwo>
                        <ImageThree>
                            <img
                                src={LunchImage}
                                alt={''}
                                width="100%"
                                height="100%"
                                loading="lazy"
                            />
                        </ImageThree>
                        <ImageFour>
                            <img
                                src={GamesImage}
                                alt={''}
                                width="100%"
                                height="100%"
                                loading="lazy"
                            />
                        </ImageFour>
                        <ImageFive>
                            <img
                                src={FitnessImage}
                                alt={''}
                                width="100%"
                                height="100%"
                                loading="lazy"
                            />
                        </ImageFive>
                        <ImageSix>
                            <img
                                src={GreenAreaImage}
                                alt={''}
                                width="100%"
                                height="100%"
                                loading="lazy"
                            />
                        </ImageSix>
                    </MasonryGrid>
                </Container>
            </StyledSection>
        </>
    )
}

export default LifeAtDerivCarousel
