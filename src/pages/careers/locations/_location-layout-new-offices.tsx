import React from 'react'
import styled from 'styled-components'
import CareerContainer from '../_layout-components/_career_container'
import { LocationsType } from '../_model/_locations/_locations.types'
import { Iframe, Pin } from './_location-layout'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import { Text, Header, LinkText, BackgroundImage, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { map_api_key, zoho_jobs_url } from 'common/constants'
import MapPin from 'images/svg/careers/map.svg'

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

type HeroProps = {
    display_name: string
    img_data: string
    img_alt: string
    job_location?: string
}

const Hero = ({ display_name, img_data, img_alt, job_location }: HeroProps) => {
    return (
        <StyledBackground data={img_data} alt={img_alt}>
            <StyledContainer>
                <StyledHeader as="h1">{display_name}</StyledHeader>
                <LinkButton
                    hero
                    has_no_end_slash
                    to={zoho_jobs_url + job_location}
                    rel="noopener noreferrer"
                >
                    View open positions in {display_name === 'Vanuatu' ? 'Port Vila' : display_name}
                </LinkButton>
            </StyledContainer>
        </StyledBackground>
    )
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
    max-width: 51.4rem;
    padding: 40px;
    display: block;
    @media ${device.laptop} {
        max-width: 100%;
        padding: 24px 16px;
    }
`

const StyledDiv = styled.div`
    max-width: 438px;

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
    height: 360px;

    @media ${device.desktopS} {
        height: unset;
    }
    @media ${device.tabletL} {
        max-width: 60%;
        height: unset;
    }
    @media ${device.tablet} {
        max-width: 100%;
        height: unset;
    }
`

type LocationLayoutProps = {
    display_name: string
    display_title_name?: string
    location: LocationsType
    images: LocationsType
}

export const NewLocationLayout = ({ location, images }: LocationLayoutProps) => {
    const { display_name, display_title_name, map_office_name, job_location } = location
    if (!display_name) return null

    return (
        <>
            <Hero
                display_name={display_name}
                img_data={images[location.name]}
                img_alt={location.img_alt}
                job_location={job_location}
            />
            <FirstSection>
                <SecondStyledHeader
                    type="unset"
                    align="center"
                    as="h2"
                    size="var(--text-size-header-5)"
                    color="black-6"
                >
                    Deriv in {display_title_name}
                </SecondStyledHeader>
                <Flex tablet_direction="column">
                    <Text color="black-6">{location.first_p}</Text>
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
                    {location.has_map ? (
                        <WorkingFlex jc="cover">
                            <Iframe
                                src={`https://www.google.com/maps/embed/v1/place?q=place_id:${location.map}&key=${map_api_key}`}
                            />

                            <WorkingInformation p="3.2rem 6rem" direction="column">
                                <StyledDiv>
                                    <Header as="h3" type="subtitle-1" color="black-6">
                                        {`Working at Deriv ${map_office_name}`}
                                    </Header>
                                    <CardText color="black-6">{location.map_text}</CardText>
                                    <Flex jc="unset" mt="37px">
                                        <Pin src={MapPin} alt="map pin" />
                                        <LinkText
                                            rel="noopenernoreferrer"
                                            target="_blank"
                                            href={location.google_map_link}
                                        >
                                            {location.address.map((address, index) => (
                                                <Text key={index}>{address}</Text>
                                            ))}
                                        </LinkText>
                                    </Flex>
                                </StyledDiv>
                            </WorkingInformation>
                        </WorkingFlex>
                    ) : (
                        <WorkingFlex jc="cover">
                            <WorkingQueryImage
                                data={images[location.grid_images[2]]}
                                alt={location.grid_img_alt}
                                width="100%"
                                height="100%"
                            />

                            <WorkingInformation p="3.2rem 6rem" direction="column">
                                <StyledDiv>
                                    <Header as="h3" type="subtitle-1" color="black-6">
                                        {`Working at Deriv ${map_office_name}`}
                                    </Header>
                                    <CardText color="black-6">{location.map_text}</CardText>
                                </StyledDiv>
                            </WorkingInformation>
                        </WorkingFlex>
                    )}
                </WorkingCard>
            </WorkSection>
        </>
    )
}
