import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import type { ImageDataLike } from 'gatsby-plugin-image'
import CareerContainer from '../_layout-components/_career_container'
import { LocationsType } from '../_model/_locations/_locations.types'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import { Text, LinkText, Header, BackgroundImage, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { map_api_key, zoho_jobs_url } from 'common/constants'
import { LocalizedLink } from 'components/localization'
import MapPin from 'images/svg/careers/map.svg'

export const Pin = styled.img`
    width: 12px;
    height: 16px;
    margin-right: 10px;
    margin-top: 3px;
`

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

const HeroBadge = styled(QueryImage)`
    position: absolute;
    left: 13%;
    width: 124px;
    height: 190px;

    @media ${device.laptopS} {
        left: 138px;
    }

    @media ${device.mobileL} {
        left: 15%;
        transform-origin: top;
        transform: scale(0.75);
    }
`

type HeroProps = {
    display_name: string
    img_data: ImageDataLike
    job_location?: string
    badge_data?: ImageDataLike
    badge_alt?: string
}

const Hero = ({ display_name, img_data, badge_data, badge_alt, job_location }: HeroProps) => {
    return (
        <StyledBackground data={img_data} alt={display_name}>
            {badge_data && <HeroBadge data={badge_data} alt={badge_alt} />}
            <StyledContainer>
                <StyledHeader as="h1">{display_name}</StyledHeader>
                <LinkButton
                    hero
                    has_no_end_slash
                    to={zoho_jobs_url + job_location}
                    rel="noopener noreferrer"
                >
                    View open positions in {display_name}
                </LinkButton>
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
const SecondSection = styled(SectionContainer)`
    padding: 0 0 80px;
    max-width: 996px;
    margin: 0 auto;
    @media ${device.laptop} {
        width: unset;
        margin: 0 4.5%;
        padding: 0 0 40px;
    }
    @media ${device.tabletL} {
        width: unset;
        margin: 0 4.5%;
        padding: 0 0 40px;
    }
`
const MapSection = styled(SectionContainer)`
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
const ImageWrapper = styled.div`
    max-width: 588px;
    width: 100%;
    max-height: 332px;
    @media ${device.laptop} {
        object-fit: cover;
        max-width: 100%;
        width: 100%;
        height: 100%;
        max-height: 100%;
    }
    @media ${device.tablet} {
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-height: 380px;
    }
    @media ${device.mobileL} {
        max-height: 260px;
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

const LocationCard = styled.article`
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
    margin-bottom: 37px;
    display: block;
    @media ${device.mobileL} {
        margin-top: 24px;
        font-size: 14px;
        margin-bottom: 24px;
    }
`

export const Iframe = styled.iframe`
    width: 100%;
    border: 0;
`
const StyledFlex = styled(Flex)`
    width: 100%;
    @media ${device.tabletL} {
        width: unset;
        max-width: 100%;
    }
    @media ${device.tabletS} {
        flex-direction: column;
        justify-content: center;
    }
`
const LeftFlex = styled(Flex)`
    width: 100%;
    padding: 0;
    @media ${device.tabletS} {
        object-fit: contain;
        max-width: 100%;
        padding: 0 0 8px;
        margin: 0;
    }
`

const RightFlex = styled(Flex)`
    margin-left: 0.8rem;
    justify-content: flex-start;
    @media ${device.tabletS} {
        width: auto;
        margin: 0;
    }
`

const InnerLeftFlex = styled(Flex)`
    justify-content: flex-end;

    @media ${device.tabletS} {
        justify-content: unset;
    }
`
const First = styled.div`
    margin-right: 0.8rem;
    width: 100%;
    max-width: 24.7rem;
    @media ${device.tabletS} {
        margin-right: 0;
        margin-right: 4px;
        max-width: 50%;
    }
`

const Second = styled.div`
    margin-left: 0.8rem;
    width: 100%;
    max-width: 24.7rem;
    @media ${device.tabletS} {
        margin-left: 0;
        margin-left: 4px;
        max-width: 50%;
    }
`

const Third = styled.div`
    display: flex;
    flex-direction: flex-start;
    width: 100%;
    max-width: 50.9rem;
    margin-top: 0.8rem;

    @media ${device.tabletS} {
        max-width: 100%;
        padding: 0;
        margin: 0;
    }
`

const Fourth = styled.div`
    width: 100%;
    max-width: 100%;
    max-width: 51.4rem;
    @media ${device.tabletS} {
        max-width: 100%;
        object-fit: contain;
        padding: 0;
    }
`
const LocationFlex = styled(Flex)`
    margin: 0;
    padding: 0;
    @media ${device.tabletL} {
        max-height: unset;
        height: 100%;
        align-items: center;
        flex-direction: column-reverse;
    }
`

const LocationInformationFlex = styled(Flex)`
    padding: 40px;
    display: block;
    @media ${device.laptop} {
        padding: 24px 16px;
    }
`

const StyledDiv = styled.div`
    max-width: 400px;

    @media ${device.tablet} {
        max-width: 100%;
        height: unset;
    }
`
const MapQueryImage = styled(QueryImage)`
    object-fit: cover;
    @media ${device.tablet} {
        max-width: 100%;
        height: unset;
    }
`

type LocationLayoutProps = {
    location: LocationsType
    images: ImageDataLike
}

export const LocationLayout = ({ location, images }: LocationLayoutProps) => {
    const { display_name, map_office_name, job_location } = location
    if (!display_name) return null

    return (
        <>
            <Hero
                display_name={display_name}
                img_data={images[location.name]}
                badge_data={images[location.badge]}
                badge_alt={location.badge_alt}
                job_location={job_location}
            />
            <FirstSection>
                <SecondStyledHeader
                    color="black-6"
                    type="unset"
                    align="center"
                    as="h2"
                    size="var(--text-size-header-5)"
                >
                    Deriv in {display_name}
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
            <SecondSection padding="0px 16px">
                <SectionContainer padding="0">
                    <Header
                        color="black-6"
                        type="unset"
                        align="center"
                        as="h2"
                        size="var(--text-size-header-5)"
                        mb="4rem"
                    >
                        Our office
                    </Header>
                    <StyledFlex>
                        <LeftFlex direction="column" mr="0.8rem" ai="flex-end">
                            <InnerLeftFlex mb="0.8rem">
                                <First>
                                    <QueryImage
                                        data={images[location.grid_images[0]]}
                                        alt={location.grid_img_alt[0]}
                                        width="100%"
                                    />
                                </First>
                                <Second>
                                    <QueryImage
                                        data={images[location.grid_images[1]]}
                                        alt={location.grid_img_alt[1]}
                                        width="100%"
                                    />
                                </Second>
                            </InnerLeftFlex>
                            <Third>
                                <QueryImage
                                    data={images[location.grid_images[2]]}
                                    alt={location.grid_img_alt[2]}
                                    width="100%"
                                />
                            </Third>
                        </LeftFlex>
                        <RightFlex>
                            <Fourth>
                                <QueryImage
                                    data={images[location.grid_images[3]]}
                                    alt={location.grid_img_alt[3]}
                                    width="100%"
                                />
                            </Fourth>
                        </RightFlex>
                    </StyledFlex>
                </SectionContainer>
            </SecondSection>
            <MapSection>
                <LocationCard>
                    <LocationFlex min_height="38rem" jc="cover" tablet_direction="column">
                        {location.has_iframe ? (
                            <Iframe
                                src={`https://www.google.com/maps/embed/v1/place?q=place_id:${location.map}&key=${map_api_key}`}
                            />
                        ) : (
                            <ImageWrapper>
                                <LocalizedLink
                                    to={location.google_map_link}
                                    external
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <MapQueryImage
                                        data={images[location.map_img]}
                                        alt={location.display_name + 'map'}
                                        width="100%"
                                        height="100%"
                                    />
                                </LocalizedLink>
                            </ImageWrapper>
                        )}

                        <LocationInformationFlex
                            p="3.2rem 6rem"
                            direction="column"
                            max_width="44.4rem"
                        >
                            <StyledDiv>
                                <Header as="h3" type="subtitle-1" color="black-6">
                                    {`Working at Deriv ${map_office_name}`}
                                </Header>
                                <CardText color="black-6">{location.map_text}</CardText>
                                <Flex jc="unset">
                                    <Pin src={MapPin} alt="map pin" />
                                    {location.google_map_link ? (
                                        <LinkText
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href={location.google_map_link}
                                        >
                                            {location.address.map((address, index) => (
                                                <Text key={index}>{address}</Text>
                                            ))}
                                        </LinkText>
                                    ) : (
                                        <Text>
                                            {location.address.map((address, index) => (
                                                <Text key={index}>{address}</Text>
                                            ))}
                                        </Text>
                                    )}
                                </Flex>
                            </StyledDiv>
                        </LocationInformationFlex>
                    </LocationFlex>
                </LocationCard>
            </MapSection>
        </>
    )
}

LocationLayout.propTypes = {
    images: PropTypes.object,
    location: PropTypes.object,
}
