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
import MapPin from 'images/svg/careers/map.svg'

const Pin = styled.img`
    min-width: 24px;
    height: 24px;
    margin-right: 13px;
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

const Hero = ({ display_name, img_data }) => {
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
const SecondSection = styled(SectionContainer)`
    ${Header} {
        margin: 0 0 40px;
        @media ${device.tablet} {
            margin: 0 0 24px;
        }
    }
    ${Flex} {
        margin: 0;
        max-width: 996px;
        padding: 0;
        @media ${device.tabletS} {
            flex-direction: column;
            align-items: center;
        }
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 996px;
    margin: 0 auto;
    padding: 0 0 80px;
    @media ${device.laptop} {
        width: 91%;
        margin: 0 4.5%;
    }
    @media ${device.tablet} {
        padding: 0 0 40px;
        margin: 0 4.5%;
    }
`
const MapSection = styled(SectionContainer)`
    max-width: 996px;
    width: 100%;
    margin: 0 auto;
    padding: 0 0 80px;

    @media ${device.laptop} {
        width: 91%;
        margin: 0 4.5%;
        padding: 0 0 40px;
    }
`
const ImageWrapper = styled.div`
    max-width: 588px;
    width: 100%;

    @media ${device.tablet} {
        height: 260px;
        max-width: 100%;
    }
`

const StyledImageWrapper = styled.div`
    max-width: 888px;
    width: 100%;

    @media ${device.tablet} {
        max-width: 100%;
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
    margin-top: 1.6rem;
    margin-bottom: 4rem;
    @media ${device.mobileL} {
        font-size: 14px;
    }
`

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
`

const LeftFlex = styled(Flex)`
    width: 100%;
    @media ${device.tabletS} {
        object-fit: contain;
        max-width: 100%;
        padding: 16px 0;
        margin: 0;
    }
`

const RightFlex = styled(Flex)`
    margin-left: 0.8rem;
    justify-content: flex-start;
    @media ${device.tabletS} {
        width: auto;
        margin: 0 auto;
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
    max-width: 24.7rem;

    @media ${device.tabletS} {
        max-width: 577px;
        object-fit: contain;
    }
`

const Second = styled.div`
    margin-left: 0.8rem;
    max-width: 24.7rem;
    @media ${device.tabletS} {
        max-width: 577px;
        object-fit: contain;
        padding: 0;
        margin: 0;
    }
`

const Third = styled.div`
    display: flex;
    flex-direction: flex-start;
    width: 100%;
    max-width: 50.9rem;
    margin-top: 0.8rem;

    @media ${device.tabletS} {
        padding: 0;
        margin: 0 16px 0 0;
    }
`

const Fourth = styled.div`
    width: 100%;
    max-width: 51.4rem;
    @media ${device.tabletS} {
        max-width: 557px;
        object-fit: contain;
        justify-content: center;
        padding: 0 16px 0 0;
        margin: 0;
    }
`
const LocationFlex = styled(Flex)`
    max-height: 356px;
    margin: 0;
    padding: 0;
    @media ${device.tablet} {
        align-items: center;
        flex-direction: column-reverse;
    }
`

const LocationInformationFlex = styled(Flex)`
    padding: 40px;
    @media ${device.laptop} {
        padding: 24px 16px;
    }
`

const StyledDiv = styled.div`
    max-width: 400px;

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
                img_data={images[location.name]}
            />
            <FirstSection>
                <Header align="center" as="h2" size="var(--text-size-header-5)">
                    Deriv in {display_name}
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
            <SecondSection padding="0 16px">
                <Header align="center" as="h2" size="var(--text-size-header-5)" mb="4rem">
                    Our office
                </Header>
                <Flex>
                    <LeftFlex direction="column" mb="0.8rem" ai="flex-end">
                        <InnerLeftFlex>
                            <First>
                                <QueryImage
                                    data={images[location.grid_images[0]]}
                                    alt={location.display_name + ' Worklife'}
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
                </Flex>
            </SecondSection>
            <MapSection>
                <LocationCard>
                    <LocationFlex min_height="38rem" jc="unset" tablet_direction="column">
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
                                <Header as="h3" type="subtitle-1">
                                    {`Working at Deriv (${display_name})`}
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
            </MapSection>
        </>
    )
}

LocationLayout.propTypes = {
    images: PropTypes.object,
    location: PropTypes.object,
}
