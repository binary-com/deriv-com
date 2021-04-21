import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CareerContainer from '../_layout-components/_container'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import { Text, LinkText, Header, BackgroundImage, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { map_api_key, zoho_url } from 'common/constants'
import { LocalizedLink } from 'components/localization'
import MapPin from 'images/svg/map.svg'

const Pin = styled.img`
    min-width: 24px;
    height: 24px;
    margin-right: 13px;
`

const StyledBackground = styled(BackgroundImage)`
    width: 100%;
    height: 80rem;
    object-fit: contain;
    @media ${device.tabletL} {
        height: 65.3rem;
    }
`

const StyledContainer = styled(CareerContainer)`
    flex-direction: column;
    align-items: flex-start;
    height: 100%;

    @media ${device.tablet} {
        padding: 0 2rem;
    }
`

const StyledHeader = styled(Header)`
    font-size: var(--text-size-xxl);
    margin-bottom: 1.6rem;
    color: var(--color-white);
`

const Subheadline = styled(Text)`
    font-size: var(--text-size-m);
    color: var(--color-white);
    max-width: 69rem;
    margin-bottom: 3.2rem;
`

const Hero = ({ display_name, img_data, description }) => {
    return (
        <StyledBackground data={img_data} alt={display_name}>
            <StyledContainer>
                <StyledHeader as="h1">{display_name}</StyledHeader>
                <Subheadline>{description}</Subheadline>
                <LinkButton
                    has_no_end_slash
                    secondary="true"
                    to={zoho_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    external
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

const First = styled.div`
    margin-right: 0.8rem;
    width: 100%;
    max-width: 24.7rem;
`

const Second = styled.div`
    margin-left: 0.8rem;
    width: 100%;
    max-width: 24.7rem;
`

const Third = styled.div`
    width: 100%;
    max-width: 50.9rem;
    margin-top: 0.8rem;
`

const Fourth = styled.div`
    width: 100%;
    max-width: 51.4rem;

    @media ${device.tabletS} {
        max-width: 407px;
        object-fit: contain;
    }
`

const FirstSection = styled(SectionContainer)`
    ${Header} {
        margin-bottom: 4rem;
    }
    ${Flex} {
        @media ${device.tablet} {
            align-items: center;
        }
    }
    ${Text} {
        max-width: 41.5rem;
        margin-right: 6.4rem;
        font-size: 20px;

        @media ${device.tablet} {
            margin-right: 0;
            margin-bottom: 2rem;
            max-width: 100%;
            text-align: center;
            font-size: 16px;
        }
        @media ${device.mobileL} {
            text-align: left;
        }
    }
    @media ${device.tablet} {
        padding: 8rem 2rem;
    }
`
const ImageWrapper = styled.div`
    max-width: 53.9rem;
    width: 100%;

    @media ${device.tablet} {
        height: 260px;
        max-width: 100%;
    }
`

const StyledImageWrapper = styled.div`
    max-width: 53.9rem;
    width: 100%;

    @media ${device.tabletS} {
        max-width: 100%;
    }
`

const LocationCard = styled.article`
    overflow: hidden;
    max-width: 99.6rem;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);

    @media ${device.tablet} {
        margin: 0 16px;
    }
`

const CardText = styled(Text)`
    margin-top: 1.6rem;
    margin-bottom: 4rem;
`

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
`

const StyledFlex = styled(Flex)`
    width: 100%;

    @media ${device.tabletS} {
        flex-direction: column;
        justify-content: center;
    }
`

const LeftFlex = styled(Flex)`
    @media ${device.tabletS} {
        margin: 0 16px 16px;
        width: auto;
        align-items: center;
    }
`

const RightFlex = styled(Flex)`
    margin-left: 0.8rem;
    justify-content: flex-start;

    @media ${device.tabletS} {
        width: auto;
        margin: 0 16px;
        justify-content: center;
    }
`

const InnerLeftFlex = styled(Flex)`
    justify-content: flex-end;

    @media ${device.tabletS} {
        justify-content: center;
    }
`

const LocationFlex = styled(Flex)`
    @media ${device.tablet} {
        align-items: center;
        flex-direction: column-reverse;
    }
`

const LocationInformationFlex = styled(Flex)`
    @media ${device.tablet} {
        padding: 24px 16px;
    }
`

const StyledDiv = styled.div`
    max-width: 32.4rem;

    @media ${device.tablet} {
        max-width: 100%;
    }
`

export const LocationLayout = ({ location, images }) => {
    const { display_name } = location
    if (!display_name) return null

    return (
        <>
            <Hero
                display_name={display_name}
                name={location.name}
                description={location.header_p}
                img_data={images[location.name]}
            />
            <CareerContainer>
                <FirstSection>
                    <Header align="center" as="h2" size="var(--text-size-header-5)">
                        Living in {display_name}
                    </Header>
                    <Flex tablet_direction="column">
                        <Text>{location.first_p}</Text>
                        <StyledImageWrapper>
                            <QueryImage
                                data={images[location.first_img]}
                                alt={display_name}
                                width="100%"
                            />
                        </StyledImageWrapper>
                    </Flex>
                </FirstSection>
            </CareerContainer>
            <SectionContainer padding="0">
                <Header align="center" as="h2" size="var(--text-size-header-5)" mb="4rem">
                    Our office
                </Header>
                <StyledFlex>
                    <LeftFlex direction="column" mr="0.8rem" ai="flex-end">
                        <InnerLeftFlex mb="0.8rem">
                            <First>
                                <QueryImage
                                    data={images[location.grid_images[0]]}
                                    alt={location.display_name + ' Worklife'}
                                    width="100%"
                                />
                            </First>
                            <Second>
                                <QueryImage
                                    data={images[location.grid_images[1]]}
                                    alt={location.display_name + ' Worklife 2'}
                                    width="100%"
                                />
                            </Second>
                        </InnerLeftFlex>
                        <Third>
                            <QueryImage
                                data={images[location.grid_images[2]]}
                                alt={location.display_name + ' Worklife 3'}
                                width="100%"
                            />
                        </Third>
                    </LeftFlex>
                    <RightFlex>
                        <Fourth>
                            <QueryImage
                                data={images[location.grid_images[3]]}
                                alt={location.display_name + ' Worklife 4'}
                                width="100%"
                            />
                        </Fourth>
                    </RightFlex>
                </StyledFlex>
            </SectionContainer>
            <SectionContainer>
                <LocationCard>
                    <LocationFlex min_height="42.2rem" jc="unset" tablet_direction="column">
                        <ImageWrapper>
                            {location.has_iframe ? (
                                <Iframe
                                    src={`https://www.google.com/maps/embed/v1/place?q=place_id:${location.map}&key=${map_api_key}`}
                                />
                            ) : (
                                <LocalizedLink
                                    to={location.google_map_link}
                                    external
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <QueryImage
                                        data={images[location.map_img]}
                                        alt={location.display_name + 'map'}
                                        width="100%"
                                        height="100%"
                                    />
                                </LocalizedLink>
                            )}
                        </ImageWrapper>
                        <LocationInformationFlex
                            p="3.2rem 6rem"
                            direction="column"
                            max_width="44.4rem"
                        >
                            <StyledDiv>
                                <Header as="h3" size="24px">
                                    Location
                                </Header>
                                <CardText>{location.map_text}</CardText>
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
            </SectionContainer>
        </>
    )
}

LocationLayout.propTypes = {
    images: PropTypes.object,
    location: PropTypes.object,
}
