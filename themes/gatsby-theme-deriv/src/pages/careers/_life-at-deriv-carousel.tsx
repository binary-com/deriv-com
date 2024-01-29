import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Header } from 'components/elements'
import device from 'themes/device'
import { Container, SectionContainer, Desktop, Mobile } from 'components/containers'
import GymImage from 'images/common/careers/gym.png'
import FitnessImage from 'images/common/careers/fitness.png'
import TableTennis from 'images/common/careers/table-tennis.png'
import GamesImage from 'images/common/careers/games.png'
import Presentation from 'images/common/careers/presentation.png'
import Teambuilding from 'images/common/careers/teambuilding.png'
import GymImageMobie from 'images/common/careers/gym-mobile.png'
import FitnessImageMobile from 'images/common/careers/fitness-mobile.png'
import TableTennisMobile from 'images/common/careers/table-tennis-mobile.png'
import GamesImageMobile from 'images/common/careers/games-mobile.png'
import PresentationMobile from 'images/common/careers/presentation-mobile.png'
import TeambuildingMobile from 'images/common/careers/teambuilding-mobile.png'

const StyledSection = styled(SectionContainer)`
    padding: 10rem 0 80px 0;

    @media ${device.tabletL} {
        height: unset;
        padding: 5rem 0;
    }
`
const StyledContainer = styled(Container)`
    @media ${device.laptopL} {
        width: 70%;
    }
`
const StyledHeader = styled(Header)`
    padding-bottom: 4.4rem;
    font-size: 48px;

    @media ${device.tabletS} {
        line-height: 34px;
        font-size: 28px;
        padding: 0 3rem;
    }
    @media ${device.mobileL} {
        padding-bottom: 4.4rem;
        line-height: 34px;
        font-size: 28px;
    }
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
`
const ColumnDiv = styled.div`
    flex: 50%;
    max-width: 50%;
    padding-right: 25px;

    & img {
        margin-top: 24px;
        vertical-align: middle;
        width: 100%;
        border-radius: 10px;
    }
`
const ThirdRow = styled.div`
    display: flex;
    padding-right: 25px;

    & img {
        margin-top: 24px;
        vertical-align: middle;
        width: 100%;
        border-radius: 10px;
    }
    & div:nth-of-type(1) {
        width: 40%;
        margin-right: 25px;
    }
    & div:nth-of-type(2) {
        width: 60%;
    }
`
const MobileColumn = styled.div`
    display: flex;

    & img {
        vertical-align: middle;
        width: 100%;
        border-radius: 10px;
    }
    & div:nth-of-type(1) {
        width: 50%;
        margin-right: 10px;
    }
    & div:nth-of-type(2) {
        width: 50%;
    }
`

const MobileSingleImage = styled.div`
    width: 100%;
    margin: 10px 0;

    & img {
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
                <StyledContainer direction="column">
                    <StyledHeader align="center" as="h3" type="section-title">
                        Life at Deriv
                    </StyledHeader>
                    <Desktop>
                        <GridDiv>
                            <ColumnDiv>
                                <img
                                    src={Presentation}
                                    alt="Man giving a presentation to team"
                                    loading="lazy"
                                />
                                <img
                                    src={TableTennis}
                                    alt="Two people playing table tennis"
                                    loading="lazy"
                                />
                            </ColumnDiv>
                            <ColumnDiv>
                                <img
                                    src={FitnessImage}
                                    alt="Group of people doing yoga"
                                    loading="lazy"
                                />
                                <img
                                    src={GamesImage}
                                    alt="Group of people playing foosball"
                                    loading="lazy"
                                />
                            </ColumnDiv>
                        </GridDiv>
                        <ThirdRow>
                            <div>
                                <img
                                    src={GymImage}
                                    alt="Man doing incline bench press at office gym"
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <img
                                    src={Teambuilding}
                                    alt="Water rafting team building activity"
                                    loading="lazy"
                                />
                            </div>
                        </ThirdRow>
                    </Desktop>
                    <Mobile>
                        <MobileColumn>
                            <div>
                                <img
                                    src={PresentationMobile}
                                    alt="Man giving a presentation to team"
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <img
                                    src={FitnessImageMobile}
                                    alt="Group of people doing yoga"
                                    loading="lazy"
                                />
                            </div>
                        </MobileColumn>
                        <MobileSingleImage>
                            <img
                                src={TableTennisMobile}
                                alt="Two people playing table tennis"
                                loading="lazy"
                            />
                        </MobileSingleImage>
                        <MobileColumn>
                            <div>
                                <img
                                    src={GamesImageMobile}
                                    alt="Group of people playing foosball"
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <img
                                    src={GymImageMobie}
                                    alt="Man doing incline bench press at office gym"
                                    loading="lazy"
                                />
                            </div>
                        </MobileColumn>
                        <MobileSingleImage>
                            <img
                                src={TeambuildingMobile}
                                alt="Water rafting team building activity"
                                loading="lazy"
                            />
                        </MobileSingleImage>
                    </Mobile>
                </StyledContainer>
            </StyledSection>
        </>
    )
}

export default LifeAtDerivCarousel
