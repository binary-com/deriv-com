import React from 'react'
import { useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import { getOSIcon, PlatformContent, ImageTag, TPlatformDetails } from './_utils'
import type { PlatformDetailsProps } from './_utils'
import { image_query } from './_details'
import device from 'themes/device'
import { Flex } from 'components/containers'
import { Carousel, QueryImage, StyledLink } from 'components/elements'

const CarouselItemWrapper = styled.div`
    width: 100%;
    padding: 1.8rem 1.8rem 0;
`

const MobileImage = styled(QueryImage)`
    .gatsby-image-wrapper > picture > img {
        object-fit: contain !important;
    }
`

const DownloadLink = styled(StyledLink)`
    margin: 0.4rem;
`

const settings = {
    options: {
        loop: false,
        align: 'center',
        containScroll: 'trimSnaps',
    },
    container_style: {
        width: '100%',
        margin: '0 auto',
    },
    slide_style: {
        width: '100vw',
        height: 'auto',
        paddingRight: '1.6rem',
        position: 'relative',
    },
    navigation_style: {
        bottom_offset: '420px',
        nav_color: 'red',
    },
    slide_inner_width: '100vw',
    navigation_css: css`
        position: relative;
        width: 100%;
        height: 8px;
        @media ${device.tabletL} {
            bottom: 228px;
        }
        @media (max-width: 660px) {
            bottom: 268px;
        }
        @media (max-width: 425px) {
            bottom: 292px;
        }
        @media (max-width: 375px) {
            bottom: 304px;
        }
        @media (max-width: 317px) {
            bottom: 362px;
        }
    `,
}

const PlatformDetails = ({ title, icon, description, learn_more_link }: PlatformDetailsProps) => {
    return (
        <>
            <ImageTag width="40px" height="40px" src={icon} alt="platform" />
            <Flex
                fd="column"
                ai="flex-start"
                jc="center"
                width="unset"
                height="unset"
                pt="10px"
                mr="20px"
                laptopM={{ pt: '9px' }}
                tabletL={{ width: '230px', pt: '0.5rem' }}
            >
                <PlatformContent
                    title={title}
                    description={description}
                    learn_more_link={learn_more_link}
                />
            </Flex>
        </>
    )
}

type MobilePlatformCarouselProps = {
    carousel_data: TPlatformDetails[]
}

const MobilePlatformCarousel = ({ carousel_data }: MobilePlatformCarouselProps) => {
    const images = useStaticQuery(image_query)

    return (
        <Carousel {...settings}>
            {carousel_data?.map(
                ({ image_key, title, icon, description, learn_more_link, download_links }) => {
                    return (
                        <CarouselItemWrapper key={image_key}>
                            <Flex tabletL={{ mb: '56px' }}>
                                <MobileImage
                                    data={images[image_key]}
                                    alt={image_key}
                                    height={'55vw'}
                                />
                            </Flex>
                            <Flex>
                                <PlatformDetails
                                    title={title}
                                    icon={icon}
                                    description={description}
                                    learn_more_link={learn_more_link}
                                />
                            </Flex>
                            <Flex
                                ai="flex-start"
                                jc="center"
                                fw="wrap"
                                width="unset"
                                tabletL={{ m: '3.2rem 3.8rem' }}
                                mobileL={{ m: '32px 0 40px' }}
                            >
                                {download_links.map((link) => (
                                    <DownloadLink
                                        key={link.type}
                                        external="true"
                                        type={link?.link_type}
                                        to={link?.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={getOSIcon(link.type)} alt={link.type} />
                                    </DownloadLink>
                                ))}
                            </Flex>
                        </CarouselItemWrapper>
                    )
                },
            )}
        </Carousel>
    )
}

export default MobilePlatformCarousel
