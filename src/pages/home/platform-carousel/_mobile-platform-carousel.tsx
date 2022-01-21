import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import { platform_details, getOSIcon, PlatformContent, ImageTag } from './_utils'
import type { PlatformDetailsProps } from './_utils'
import device from 'themes/device.js'
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
        nav_color: '--color-red',
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
            bottom: 320px;
        }
        @media (max-width: 317px) {
            bottom: 362px;
        }
    `,
}

const image_query = graphql`
    query {
        platforms_mt5: file(relativePath: { eq: "home/platforms_mt5_m.png" }) {
            ...fadeIn
        }
        platforms_dtrader: file(relativePath: { eq: "home/platforms_dtrader_m.png" }) {
            ...homePageHeroFadeIn
        }
        platforms_derivx: file(relativePath: { eq: "home/platforms_derivx_m.png" }) {
            ...fadeIn
        }
        platforms_dbot: file(relativePath: { eq: "home/platforms_dbot_m.png" }) {
            ...fadeIn
        }
        platforms_deriv_go: file(relativePath: { eq: "home/platforms_deriv_go_m.png" }) {
            ...fadeIn
        }
        platforms_smarttrader: file(relativePath: { eq: "home/platforms_smarttrader_m.png" }) {
            ...fadeIn
        }
        platforms_binary_bot: file(relativePath: { eq: "home/platforms_binary_bot_m.png" }) {
            ...fadeIn
        }
        platforms_api: file(relativePath: { eq: "home/platforms_api_m.png" }) {
            ...fadeIn
        }
    }
`

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

const MobilePlatformCarousel = () => {
    const images = useStaticQuery(image_query)

    return (
        <Carousel {...settings}>
            {platform_details.map((platform, index) => {
                const image_key = Object.keys(images)[index]

                return (
                    <CarouselItemWrapper key={platform.description}>
                        <Flex tabletL={{ mb: '56px' }}>
                            <MobileImage data={images[image_key]} alt={image_key} />
                        </Flex>
                        <Flex>
                            <PlatformDetails
                                title={platform.title}
                                icon={platform.icon}
                                description={platform.description}
                                learn_more_link={platform.learn_more_link}
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
                            {platform.download_links.map((link) => (
                                <DownloadLink
                                    key={link.url}
                                    to={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={getOSIcon(link.type)} alt={link.type} />
                                </DownloadLink>
                            ))}
                        </Flex>
                    </CarouselItemWrapper>
                )
            })}
        </Carousel>
    )
}

export default MobilePlatformCarousel
