import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getPositionsByLocation } from '../_controller/_teams'
import { LinkList } from '../_layout-components/_link-list'
import { RoleBanner } from '../_layout-components/_banner'
import Container from '../_layout-components/_container'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import { Text, LinkText, Header, BackgroundImage, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { toHashFormat, map_api_key } from 'common/utility'
import { localize } from 'components/localization'
import MapPin from 'images/svg/map.svg'

const Pin = styled(MapPin)`
    min-width: 24px;
    height: 24px;
    margin-right: 13px;
`
const StyledContainer = styled(Container)`
    flex-direction: column;
    align-items: flex-start;
    height: 100%;

    @media ${device.tablet} {
        padding: 0 2rem;
    }
`

const StyledHeader = styled(Header)`
    font-size: var(--text-size-xl);
    margin-bottom: 2.4rem;
    color: var(--color-white);
`

const Subheadline = styled(Text)`
    font-size: var(--text-size-sm);
    color: var(--color-white);
    max-width: 58.8rem;
    margin-bottom: 8rem;
`

const Hero = ({ display_name, name, img_data, description }) => {
    return (
        <BackgroundImage
            data={img_data}
            style={{
                height: '80rem',
                width: '100%',
            }}
            alt={display_name}
        >
            <StyledContainer>
                <StyledHeader as="h1">{display_name}</StyledHeader>
                <Subheadline>{description}</Subheadline>
                <LinkButton
                    has_no_end_slash
                    secondary="true"
                    to={`/careers/jobs/?filter=${name}&search=`}
                >
                    {`View open positions in ${display_name}`}
                </LinkButton>
            </StyledContainer>
        </BackgroundImage>
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
`

const FirstSection = styled(SectionContainer)`
    ${Header} {
        margin-bottom: 8rem;
    }
    ${Text} {
        max-width: 41.5rem;
        margin-right: 6.4rem;

        @media ${device.tablet} {
            margin-right: 0;
            margin-bottom: 2rem;
        }
    }
    @media ${device.tablet} {
        padding: 8rem 2rem;
    }
`
const ImageWrapper = styled.div`
    max-width: 53.9rem;
    width: 100%;
`

const LocationCard = styled.article`
    overflow: hidden;
    max-width: 99.6rem;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
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

export const LocationLayout = ({ location, images }) => {
    const { display_name, name } = location
    if (!display_name) return null

    const positions = getPositionsByLocation(name).sort((a, b) => a.title.localeCompare(b.title))
    const mapped_positions = positions
        ? positions.map((position) => ({
              text: position.title,
              to: `/careers/jobs/job#${toHashFormat(position.id)}`,
          }))
        : []

    return (
        <>
            <Hero
                display_name={display_name}
                name={location.name}
                description={location.header_p}
                img_data={images[location.name]}
            />
            <Container direction="column">
                <FirstSection padding="12rem 0">
                    <Header align="center" as="h2" size={'var(--text-size-header-1)'}>
                        {`Living in ${display_name}`}
                    </Header>
                    <Flex tablet_direction="column">
                        <Text size="var(--text-size-sm)">{location.first_p}</Text>
                        <ImageWrapper>
                            <QueryImage
                                data={images[location.first_img]}
                                alt={`Living in ${display_name}`}
                                width="100%"
                            />
                        </ImageWrapper>
                    </Flex>
                </FirstSection>
            </Container>
            <SectionContainer padding="0rem">
                <Header
                    align="center"
                    as="h2"
                    size={'var(--text-size-header-1)'}
                    style={{ marginBottom: '6.4rem' }}
                >
                    Our office
                </Header>
                <Flex jc="unset">
                    <Flex direction="column" mr="0.8rem" ai="flex-end">
                        <Flex mb="0.8rem" jc="flex-end">
                            <First>
                                <QueryImage
                                    data={images[location.grid_images[0]]}
                                    alt={location.display_name + localize(' Worklife')}
                                    width="100%"
                                />
                            </First>
                            <Second>
                                <QueryImage
                                    data={images[location.grid_images[1]]}
                                    alt={location.display_name + localize(' Worklife 2')}
                                    width="100%"
                                />
                            </Second>
                        </Flex>
                        <Third>
                            <QueryImage
                                data={images[location.grid_images[2]]}
                                alt={location.display_name + localize(' Worklife 3')}
                                width="100%"
                            />
                        </Third>
                    </Flex>
                    <Flex ml="0.8rem" jc="unset">
                        <Fourth>
                            <QueryImage
                                data={images[location.grid_images[3]]}
                                alt={location.display_name + localize(' Worklife 4')}
                                width="100%"
                            />
                        </Fourth>
                    </Flex>
                </Flex>
            </SectionContainer>
            <SectionContainer padding="12rem 0">
                <LocationCard>
                    <Flex jc="unset" tablet_direction="column">
                        <ImageWrapper>
                            {location.has_iframe ? (
                                <Iframe
                                    src={`https://www.google.com/maps/embed/v1/place?q=place_id:${location.map}&key=${map_api_key}`}
                                />
                            ) : (
                                <QueryImage
                                    data={images[location.map]}
                                    alt={location.display_name + localize(' Map')}
                                    width="100%"
                                />
                            )}
                        </ImageWrapper>
                        <Flex p="3.2rem 6rem" direction="column" max_width="44.4rem">
                            <div style={{ maxWidth: '32.4rem' }}>
                                <Header as="h3">Location</Header>
                                <CardText>{location.map_text}</CardText>
                                <Flex jc="unset">
                                    <Pin />
                                    {location.google_map_link ? (
                                        <LinkText
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href={location.google_map_link}
                                        >
                                            {location.address}
                                        </LinkText>
                                    ) : (
                                        <Text>{location.address}</Text>
                                    )}
                                </Flex>
                            </div>
                        </Flex>
                    </Flex>
                </LocationCard>
            </SectionContainer>
            <Header
                align="center"
                as="h2"
                size={'var(--text-size-header-1)'}
                style={{ marginBottom: '6.4rem' }}
            >
                {`Open positions in ${display_name}`}
            </Header>
            <div style={{ marginBottom: '12rem' }}>
                <LinkList list_items={mapped_positions} />
            </div>
            <RoleBanner />
        </>
    )
}

LocationLayout.propTypes = {
    images: PropTypes.object,
    location: PropTypes.object,
}
