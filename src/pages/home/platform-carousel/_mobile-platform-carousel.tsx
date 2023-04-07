import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled, { css } from 'styled-components'
import Autoplay from 'embla-carousel-autoplay'
import {
    getOSIcon,
    PlatformContent,
    ImageTag,
    TPlatformDetails,
    PLATFORMS_CAROUSEL_DELAY,
} from './_utils'
import type { PlatformDetailsProps } from './_utils'
import { LocalizedLink } from 'components/localization'
import {
    dmt5_android_url,
    dmt5_app_gallery,
    deriv_mt5_app_url,
    dmt5_ios_url,
} from 'common/constants'
import device from 'themes/device'
import { Flex } from 'components/containers'
import { Carousel, StyledLink } from 'components/elements'
import { useLangDirection } from 'components/hooks/use-lang-direction'

const CarouselItemWrapper = styled.div`
    width: 100%;
    padding: 1.8rem 1.8rem 0;
`
const MobileImage = styled.div`
    height: 55vw;

    .gatsby-image-wrapper {
        height: 100%;
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
            bottom: 220px;
        }
        @media (max-width: 660px) {
            bottom: 226px;
        }
        @media (max-width: 425px) {
            bottom: 240px;
        }
        @media (max-width: 375px) {
            bottom: 265px;
        }
        @media (max-width: 317px) {
            bottom: 310px;
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
                ({ image_key, title, icon, description, learn_more_link, download_links }) => {
                    return (
                        <CarouselItemWrapper key={title}>
                            <Flex tabletL={{ mb: '56px' }}>
                                <MobileImage>{image_key}</MobileImage>
                            </Flex>
                            <Flex>
                                <PlatformDetails
                                    title={title}
                                    icon={icon}
                                    description={description}
                                    learn_more_link={learn_more_link}
                                />
                            </Flex>
                            {title === 'Deriv MT5' ? (
                                <OsBadges>
                                    <AppStoreBadge
                                        external
                                        to={deriv_mt5_app_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <StaticImage
                                            src="../../../images/common/home/dmt5_mobile_web_browser.png"
                                            alt="dmt5 web browser"
                                        />
                                    </AppStoreBadge>
                                    <AppStoreBadge
                                        external
                                        to={dmt5_android_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <StaticImage
                                            src="../../../images/common/home/dmt5_mobile_google_play.png"
                                            alt="dmt5 google play"
                                        />
                                    </AppStoreBadge>
                                    <AppStoreBadge
                                        external
                                        to={dmt5_ios_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <StaticImage
                                            src="../../../images/common/home/dmt5_mobile_app_store.png"
                                            alt="dmt5 ios"
                                        />
                                    </AppStoreBadge>
                                    <AppStoreBadge
                                        external
                                        to={dmt5_app_gallery}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <StaticImage
                                            src="../../../images/common/home/dmt5_mobile_app_gallery.png"
                                            alt="dmt5 app gallery"
                                        />
                                    </AppStoreBadge>
                                </OsBadges>
                            ) : (
                                <Flex
                                    ai="flex-start"
                                    jc="center"
                                    fw="wrap"
                                    width="unset"
                                    tabletL={{ m: '3.2rem 3.8rem' }}
                                    mobileL={{ m: '32px 0 40px' }}
                                >
                                    {download_links.is_desktop.map((link) => (
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
                                    ))}
                                </Flex>
                            )}
                        </CarouselItemWrapper>
                    )
                },
            )}
        </Carousel>
    )
}

export default MobilePlatformCarousel
