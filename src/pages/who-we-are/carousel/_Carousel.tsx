import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import useEmblaCarousel from 'embla-carousel-react'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { QueryImage } from 'components/elements'
import device from 'themes/device'

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
    }
`

const Carousel = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
`

type CarouselViewportType = {
    isDragging: boolean
}

const CarouselViewport = styled.div<CarouselViewportType>`
    overflow: hidden;
    width: 100%;

    @media (min-width: 3107px) {
        display: flex;
        justify-content: center;
    }
`
const CarouselContainer = styled.div`
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    /* stylelint-disable */
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    /* stylelint-enable */
    margin-left: -10px;
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
const StyledQueryImage = styled(QueryImage)`
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    height: 480px;
    transform: translate(-50%, -50%);

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

const EmblaCarousel = () => {
    const carousel_data = useStaticQuery(queryCarouselData)
    const carousel_images: ImageDataLike[] = [
        carousel_data.media1,
        carousel_data.media2,
        carousel_data.media3,
        carousel_data.media4,
        carousel_data.media5,
        carousel_data.media6,
    ]

    const [viewportRef, embla] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true,
        draggable: true,
    })

    const [, setPrevBtnEnabled] = useState(false)
    const [, setNextBtnEnabled] = useState(false)

    const onSelect = useCallback(() => {
        if (!embla) return
        setPrevBtnEnabled(embla.canScrollPrev())
        setNextBtnEnabled(embla.canScrollNext())
    }, [embla])

    useEffect(() => {
        if (!embla) return
        embla.on('select', onSelect)
        onSelect()
    }, [embla, onSelect])

    return (
        <Carousel>
            <CarouselViewport isDragging ref={viewportRef}>
                <CarouselContainer>
                    {carousel_images.map((carouselItem, index) => (
                        <CarouselSlide key={index}>
                            <StyledImageWrapper>
                                <StyledQueryImage data={carouselItem} alt="" loading="lazy" />
                            </StyledImageWrapper>
                        </CarouselSlide>
                    ))}
                </CarouselContainer>
            </CarouselViewport>
        </Carousel>
    )
}

export default EmblaCarousel
