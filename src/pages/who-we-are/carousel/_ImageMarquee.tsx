import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Ticker from 'react-ticker'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { QueryImage } from 'components/elements'
import device from 'themes/device'
import { useIsRtl } from 'components/hooks/use-isrtl'

const queryCarouselData = graphql`
    query {
        media1: file(relativePath: { eq: "about-us-carousel/media-1.jpg" }) {
            ...fadeIn
        }
        media2: file(relativePath: { eq: "about-us-carousel/media-2.jpg" }) {
            ...fadeIn
        }
        media3: file(relativePath: { eq: "about-us-carousel/media-3.jpg" }) {
            ...fadeIn
        }
        media4: file(relativePath: { eq: "about-us-carousel/media-4.jpg" }) {
            ...fadeIn
        }
        media5: file(relativePath: { eq: "about-us-carousel/media-5.jpg" }) {
            ...fadeIn
        }
        media6: file(relativePath: { eq: "about-us-carousel/media-6.jpg" }) {
            ...fadeIn
        }
        media7: file(relativePath: { eq: "about-us-carousel/media-7.jpg" }) {
            ...fadeIn
        }
        media8: file(relativePath: { eq: "about-us-carousel/media-8.jpg" }) {
            ...fadeIn
        }
        media9: file(relativePath: { eq: "about-us-carousel/media-9.jpg" }) {
            ...fadeIn
        }
        media10: file(relativePath: { eq: "about-us-carousel/media-10.jpg" }) {
            ...fadeIn
        }
        media11: file(relativePath: { eq: "about-us-carousel/media-11.jpg" }) {
            ...fadeIn
        }
    }
`

const CarouselSlide = styled.div`
    position: relative;
    padding-left: 20px;

    @media ${device.tablet} {
        padding-left: 10px;
    }

    &:nth-child(1) {
        min-width: 384px;

        @media ${device.tablet} {
            min-width: 328px;
        }
    }
    &:nth-child(2) {
        min-width: 792px;

        @media ${device.tablet} {
            min-width: 328px;
        }
    }
    &:nth-child(3) {
        min-width: 384px;

        @media ${device.tablet} {
            min-width: 328px;
        }
    }
    &:nth-child(4) {
        min-width: 792px;
        @media ${device.tablet} {
            min-width: 328px;
        }
    }
    &:nth-child(5) {
        min-width: 384px;

        @media ${device.tablet} {
            min-width: 192px;
        }
    }
    &:nth-child(6) {
        min-width: 384px;

        @media ${device.tablet} {
            min-width: 192px;
        }
    }
`
const StyledImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    height: 480px;

    @media ${device.tablet} {
        height: 240px;
    }
`
const StyledQueryImage = styled(QueryImage)<{ is_rtl: boolean }>`
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    height: 480px;
    transform: ${({ is_rtl }) => (is_rtl ? 'translate(50%, -50%)' : 'translate(-50%, -50%)')};
    @media ${device.tablet} {
        height: 240px;
    }

    & .gatsby-image-wrapper img {
        height: 480px;

        @media ${device.tablet} {
            height: 240px;
        }
    }
`

const ImageMarquee = () => {
    const carousel_data = useStaticQuery(queryCarouselData)
    const carousel_images: ImageDataLike[] = [
        carousel_data.media1,
        carousel_data.media2,
        carousel_data.media3,
        carousel_data.media4,
        carousel_data.media5,
        carousel_data.media6,
        carousel_data.media7,
        carousel_data.media8,
        carousel_data.media9,
        carousel_data.media10,
        carousel_data.media11,
    ]

    const is_rtl = useIsRtl()

    return (
        <Ticker speed={20}>
            {() => (
                <div style={{ display: 'flex' }}>
                    {carousel_images.map((carouselItem, index) => (
                        <CarouselSlide key={index}>
                            <StyledImageWrapper>
                                <StyledQueryImage
                                    is_rtl={is_rtl}
                                    data={carouselItem}
                                    alt=""
                                    loading="eager"
                                />
                            </StyledImageWrapper>
                        </CarouselSlide>
                    ))}
                </div>
            )}
        </Ticker>
    )
}

export default ImageMarquee
