import React from 'react'
import styled from 'styled-components'
import CareerContainer from '../_layout-components/CareerContainer'
import { locationsTypes } from '../_model/_locations/_locations.types'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import { Text, Header, BackgroundImage, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { zoho_url } from 'common/constants'

const StyledBackground = styled(BackgroundImage)`
    width: 100%;
    height: 660px;
    object-fit: contain;
    @media ${device.laptop} {
        height: 521px;
    }
`

const StyledContainer = styled(CareerContainer)`
    flex-direction: column;
    height: 100%;
`

const StyledHeader = styled(Header)`
    font-size: 64px;
    margin-bottom: 16px;
    color: var(--color-white);
    text-align: center;
    line-height: 80px;
`
const SecondStyledHeader = styled(Header)`
    @media ${device.tablet} {
        margin-bottom: 40px;
    }

    margin-bottom: 0 24px;
`
const StyledLinkButton = styled(LinkButton)`
    font-size: 20px;
    line-height: 30px;
    @media ${device.tablet} {
        font-size: 18px;
        max-width: 317px;
    }
    @media (max-width: 340px) {
        font-size: 15px;
    }
`
type HeroProps = {
    display_name: string
    img_data: string
}

const Hero = ({ display_name, img_data }: HeroProps) => {
    return (
        <StyledBackground data={img_data} alt={display_name}>
            <StyledContainer>
                <StyledHeader as="h1">{display_name}</StyledHeader>
                <StyledLinkButton
                    has_no_end_slash
                    secondary="true"
                    to={zoho_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    external
                >
                    View open positions in {display_name}
                </StyledLinkButton>
            </StyledContainer>
        </StyledBackground>
    )
}

Hero.propTypes = {
    description: PropTypes.string,
    display_name: PropTypes.string,
    img_data: PropTypes.object,
    name: PropTypes.string,
}

const FirstSection = styled(SectionContainer)`
    max-width: 996px;
    width: 100%;
    margin: 0 auto;

    @media ${device.laptop} {
        width: 91%;
        margin: 0 4.5%;
        padding: 40px 0;
    }

    ${Header} {
        margin-bottom: 40px;
        @media ${device.tablet} {
            margin-bottom: 0;
        }
        @media (max-width: 350px) {
            font-size: 26px;
        }
    }
    ${Flex} {
        max-width: 996px;
        padding: 0;
        margin: 0;
        @media ${device.tablet} {
            align-items: center;
        }
    }
    ${Text} {
        max-width: 384px;
        margin-right: 24px;
        font-size: 20px;

        @media ${device.tablet} {
            max-width: 100%;
            margin: 8px 0 20px;
            padding: 0;
            text-align: center;
            font-size: 16px;
        }
        @media ${device.mobileL} {
            text-align: left;
        }
    }
`

const WorkSection = styled(SectionContainer)`
    max-width: 996px;
    width: 100%;
    margin: 0 auto;
    padding: 0 0 80px;

    @media ${device.laptop} {
        max-height: unset;
        width: 91%;
        margin: 0 4.5%;
        padding: 0 0 40px;
    }
`

const StyledImageWrapper = styled.div`
    max-width: 888px;
    width: 59%;

    @media ${device.tablet} {
        width: 100%;
        height: 100%;
        max-width: 100%;
        object-fit: cover;
        padding: 0;
        margin: 0;
    }
`

const WorkingCard = styled.article`
    overflow: hidden;
    max-width: 996px;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);

    @media ${device.laptop} {
        margin: 0 auto;
    }
`

const CardText = styled(Text)`
    margin-top: 8px;
    /* margin-bottom: 37px; */
    display: block;

    @media ${device.mobileL} {
        margin-top: 24px;
        font-size: 14px;
        margin-bottom: 24px;
    }
`

const WorkingFlex = styled(Flex)`
    margin: 0;
    padding: 0;

    @media ${device.tablet} {
        max-height: unset;
        height: 100%;
        align-items: center;
        flex-direction: column-reverse;
    }
`

const WorkingInformation = styled(Flex)`
    max-width: 44.4rem;
    padding: 40px;
    display: block;
    @media ${device.laptop} {
        max-width: 100%;
        padding: 24px 16px;
    }
`

const StyledDiv = styled.div`
    max-width: 400px;

    @media ${device.laptop} {
        max-width: 100%;
    }
    @media ${device.tablet} {
        max-width: 100%;
        height: unset;
    }
`
const WorkingQueryImage = styled(QueryImage)`
    object-fit: cover;
    max-width: 552px;
    max-height: 360px;

    @media ${device.desktopS} {
        max-height: unset;
    }
    @media ${device.tabletL} {
        max-width: 60%;
        height: unset;
        max-height: unset;
    }
    @media ${device.tablet} {
        max-width: 100%;
        height: unset;
        max-height: unset;
    }
`

type LocationLayoutProps = {
    location: locationsTypes
    images: locationsTypes
}

export const NewLocationLayout = ({ location, images }: LocationLayoutProps) => {
    const { display_name, map_office_name } = location
    if (!display_name) return null

    return (
        <>
            <Hero display_name={display_name} img_data={images[location.name]} />
            <FirstSection>
                <SecondStyledHeader
                    type="unset"
                    align="center"
                    as="h2"
                    size="var(--text-size-header-5)"
                >
                    Deriv in {display_name}
                </SecondStyledHeader>
                <Flex tablet_direction="column">
                    <Text>{location.first_p}</Text>
                    <StyledImageWrapper>
                        <QueryImage
                            data={images[location.first_img]}
                            alt={location.first_img_alt}
                            width="100%"
                            height="100%"
                        />
                    </StyledImageWrapper>
                </Flex>
            </FirstSection>
            <WorkSection>
                <WorkingCard>
                    <WorkingFlex jc="cover">
                        <WorkingQueryImage
                            data={images[location.grid_images[2]]}
                            alt={location.display_name + 'map'}
                            width="100%"
                            height="100%"
                        />
                        <WorkingInformation p="3.2rem 6rem" direction="column">
                            <StyledDiv>
                                <Header as="h3" type="subtitle-1">
                                    {`Working at Deriv ${map_office_name}`}
                                </Header>
                                <CardText>{location.map_text}</CardText>
                            </StyledDiv>
                        </WorkingInformation>
                    </WorkingFlex>
                </WorkingCard>
            </WorkSection>
        </>
    )
}
