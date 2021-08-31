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
// import GreenAreaImage from 'images/common/careers/green-area.jpg'

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
const GridDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
`
const ColumnDiv = styled.div`
    flex: 50%;
    max-width: 50%;
    padding: 10px;

    & img {
        margin-top: 20px;
        vertical-align: middle;
        width: 100%;
        border-radius: 10px;
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
                    <GridDiv>
                        <ColumnDiv>
                            <img src={GymImage} style={{ height: '348px' }} />
                            <img src={FitnessImage} />
                        </ColumnDiv>
                        <ColumnDiv>
                            <img src={LunchImage} />
                            <img src={GamesImage} style={{ height: '348px' }} />
                        </ColumnDiv>
                    </GridDiv>
                </Container>
            </StyledSection>
        </>
    )
}

export default LifeAtDerivCarousel
