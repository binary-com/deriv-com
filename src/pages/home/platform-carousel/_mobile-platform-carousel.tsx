import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
import image_query from './_details'
import { Localize, LocalizedLink } from 'components/localization'
import { dmt5_android_url, dmt5_app_gallery, deriv_mt5_app_url } from 'common/constants'
import device from 'themes/device'
import { Flex } from 'components/containers'
import { Carousel, Header, QueryImage, StyledLink } from 'components/elements'
import { useLangDirection } from 'components/hooks/use-lang-direction'

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
        platforms_deriv_go: file(relativePath: { eq: "home/platforms_deriv_go.png" }) {
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
    font-size: 12px;
    color: inherit;
    font-weight: bold;
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
            bottom: 175px;
        }
        @media (max-width: 660px) {
            bottom: 165px;
        }
        @media (max-width: 425px) {
            bottom: 195px;
        }
        @media (max-width: 375px) {
            bottom: 215px;
        }
        @media (max-width: 317px) {
            bottom: 200px;
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
const SupportedDeviceLinks = styled(Header)`
    font-size: 12px;
    text-align: center;
    font-weight: inherit;
    color: #999999;
`
type MobilePlatformCarouselProps = {
    carousel_data: TPlatformDetails[]
}

const MobilePlatformCarousel = ({ carousel_data }: MobilePlatformCarouselProps) => {
    const availableOnText = '_t_Available on_t_'
    const andText = '_t_and_t_'
    const data = useStaticQuery(query)

    const lang_direction = useLangDirection()

    const addCommaAnd = (length, index) => {
        return length > 1 && length != index + 1 && length - 1 != index + 1 ? (
            ','
        ) : length - 1 == index + 1 ? (
            <Localize translate_text={andText} />
        ) : (
            ''
        )
    }

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
                        <CarouselItemWrapper key={image_key}>
                            <Flex tabletL={{ mb: '56px' }}>
                                <MobileImage
                                    data={data[image_key]}
                                    alt={image_key}
                                    height={'55vw'}
                                />
                            </Flex>
                            <Flex
                                ai="baseline"
                                jc="center"
                                fw="wrap"
                                width="unset"
                                tabletL={{ m: '3.2rem 3.8rem' }}
                                mobileL={{ m: '32px 0 40px' }}
                            >
                                <SupportedDeviceLinks>
                                    <Localize translate_text={availableOnText} />
                                    {download_links.is_desktop.map((link, index) => (
                                        <>
                                            <DownloadLink
                                                key={link.type}
                                                external
                                                type={link?.link_type}
                                                to={link?.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.label}
                                            </DownloadLink>
                                            {addCommaAnd(download_links.is_desktop.length, index)}
                                        </>
                                    ))}
                                </SupportedDeviceLinks>
                            </Flex>
                            <Flex>
                                <PlatformDetails
                                    title={title}
                                    icon={icon}
                                    description={description}
                                    learn_more_link={learn_more_link}
                                />
                            </Flex>
                        </CarouselItemWrapper>
                    )
                },
            )}
        </Carousel>
    )
}

export default MobilePlatformCarousel
