import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import Autoplay from 'embla-carousel-autoplay'
import type { PlatformDetailsProps } from '../_utils'
import {
    getOSIcon,
    ImageTag,
    PlatformContent,
    PLATFORMS_CAROUSEL_DELAY,
    TPlatformDetails,
} from '../_utils'
import {
    carousel_item_wrapper,
    platform_image_caption,
} from './mobile-platform-carousel.module.scss'
import { Localize, LocalizedLink } from 'components/localization'
import {
    deriv_mt5_app_url,
    dmt5_android_url,
    dmt5_app_gallery,
    dmt5_ios_url,
} from 'common/constants'
import device from 'themes/device'
import { Flex } from 'components/containers'
import { Carousel, QueryImage, StyledLink } from 'components/elements'
import { useLangDirection } from 'components/hooks/use-lang-direction'
import Box from 'features/components/atoms/box'
import dclsx from 'features/utils/dclsx'
import Typography from 'features/components/atoms/typography'

const query = graphql`
    {
        dmt5_mobile_google_play: file(relativePath: { eq: "home/dmt5_mobile_google_play.png" }) {
            ...fadeIn
        }
        dmt5_mobile_app_gallery: file(relativePath: { eq: "home/dmt5_mobile_app_gallery.png" }) {
            ...fadeIn
        }
        dmt5_mobile_web_browser: file(relativePath: { eq: "home/dmt5_mobile_web_browser.png" }) {
            ...fadeIn
        }
        dmt5_mobile_app_store: file(relativePath: { eq: "home/dmt5_mobile_app_store.png" }) {
            ...fadeIn
        }
        platforms_deriv_go: file(relativePath: { eq: "home/platforms_deriv_go.png" }) {
            ...fadeIn
        }
        platforms_derivez: file(relativePath: { eq: "home/platforms_deriv-ez-logo-red.png" }) {
            ...fadeIn
        }
        platforms_mt5: file(relativePath: { eq: "home/platforms_mt5.png" }) {
            ...fadeIn
        }
        platforms_mt5_eu: file(relativePath: { eq: "home/platforms_mt5_eu.png" }) {
            ...homePageHeroFadeIn
        }
        platforms_dtrader: file(relativePath: { eq: "home/platforms_dtrader.png" }) {
            ...homePageHeroFadeIn
        }
        platforms_dtrader_eu: file(relativePath: { eq: "home/platforms_dtrader_eu.png" }) {
            ...fadeIn
        }
        platforms_derivx: file(relativePath: { eq: "home/platforms_derivx.png" }) {
            ...fadeIn
        }
        platforms_dbot: file(relativePath: { eq: "home/platforms_dbot.png" }) {
            ...fadeIn
        }
        platforms_smarttrader: file(relativePath: { eq: "home/platforms_smarttrader.png" }) {
            ...fadeIn
        }
        platforms_binary_bot: file(relativePath: { eq: "home/platforms_binary_bot.png" }) {
            ...fadeIn
        }
        platforms_api: file(relativePath: { eq: "home/platforms_api.png" }) {
            ...fadeIn
        }
    }
`

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
    container_style: {
        width: '100%',
        margin: '0 auto',
    },
    slide_style: {
        width: '100vw',
        height: 'auto',
        paddingInlineEnd: '1.6rem',
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
} as const

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
const OsBadges = styled(Flex)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
    gap: 8px;
    max-height: 88px;
    margin-top: 32px;
    margin-bottom: 32px;
`
const AppStoreBadge = styled(LocalizedLink)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 40px;
`
type MobilePlatformCarouselProps = {
    carousel_data: TPlatformDetails[]
}

const MobilePlatformCarousel = ({ carousel_data }: MobilePlatformCarouselProps) => {
    const data = useStaticQuery(query)

    const lang_direction = useLangDirection()

    return (
        <Carousel
            {...settings}
            options={{
                loop: false,
                align: 'center',
                containScroll: 'trimSnaps',
                direction: lang_direction,
            }}
            plugins={[Autoplay({ delay: PLATFORMS_CAROUSEL_DELAY })]}
            is_reinit_enabled={true}
        >
            {carousel_data?.map(
                ({ image_key, title, icon, description, learn_more_link, image_caption }) => {
                    return (
                        <Box className={dclsx(carousel_item_wrapper)} key={image_key}>
                            <Flex tabletL={{ mb: '56px' }}>
                                <MobileImage
                                    data={data[image_key]}
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
                            {/* {title === 'Deriv MT5' ? (
                                <OsBadges>
                                    <AppStoreBadge
                                        external
                                        to={deriv_mt5_app_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            data={data['dmt5_mobile_web_browser']}
                                            alt="dmt5 web browser"
                                        />
                                    </AppStoreBadge>

                                    <AppStoreBadge
                                        external
                                        to={dmt5_android_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            data={data['dmt5_mobile_google_play']}
                                            alt="dmt5 google play"
                                        />
                                    </AppStoreBadge>
                                    <AppStoreBadge
                                        external
                                        to={dmt5_ios_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            data={data['dmt5_mobile_app_store']}
                                            alt="dmt5 ios"
                                        />
                                    </AppStoreBadge>
                                    <AppStoreBadge
                                        external
                                        to={dmt5_app_gallery}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            data={data['dmt5_mobile_app_gallery']}
                                            alt="dmt5 app gallery"
                                        />
                                    </AppStoreBadge>
                                </OsBadges>
                            ) : ( */}
                            <Flex
                                ai="flex-start"
                                jc="center"
                                fw="wrap"
                                width="unset"
                                tabletL={{ m: '3.2rem 3.8rem' }}
                                mobileL={{ m: '32px 0 40px' }}
                            >
                                {image_caption && (
                                    <Typography.Paragraph
                                        className={platform_image_caption}
                                        align="center"
                                        font_family="UBUNTU"
                                    >
                                        <Localize
                                            translate_text={image_caption.text}
                                            components={image_caption.components}
                                        />
                                    </Typography.Paragraph>
                                )}
                                {/* {download_links.is_desktop.map((link) => (
                                        <DownloadLink
                                            key={link.type}
                                            external
                                            type={link?.link_type}
                                            to={link?.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img src={getOSIcon(link.type)} alt={link.type} />
                                        </DownloadLink>
                                    ))} */}
                            </Flex>
                            {/* )} */}
                        </Box>
                    )
                },
            )}
        </Carousel>
    )
}

export default MobilePlatformCarousel
