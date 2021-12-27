import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { PrevButton, NextButton } from './EmblaCarouselButtons'
import { useEmblaCarousel } from 'embla-carousel/react'
import { QueryImage, ImageWrapper } from 'components/elements'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import device from 'themes/device'
import { getWindowWidth } from 'common/utility'

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
        media5: file(relativePath: { eq: "about-us-carousel/media-6.jpg" }) {
            ...fadeIn
        }
        media6: file(relativePath: { eq: "about-us-carousel/media-5.jpg" }) {
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
    cursor: ${(props) => (props.isDragging ? 'grabbing' : 'auto')};
    /* -ms-overflow-style: none; 
    scrollbar-width: none;

    &::-webkit-scrollbar {
    display: none; */
}
`
const CarouselContainer = styled.div`
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -10px;
`

const CarouselSlide = styled.div`
    position: relative;
    padding-left: 10px;

    @media ${device.tabletL} {
        min-width: 384px;
        height: 240px;
    }

    &:nth-child(1) {
    min-width: 384px;
}

    &:nth-child(2) {
    min-width: 792px;
    
}

    &:nth-child(3) {
    min-width: 384px;
}

    &:nth-child(4) {
    min-width: 792px;
}

    &:nth-child(5) {
    min-width: 384px;
}

    &:nth-child(6) {
    min-width: 384px;
    
}

    /* &:nth-child(n) {
    @media ${device.tabletL} {
        min-width: 192px;
    } */
}

`
const StyledImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    height: 480px;

    @media ${device.tabletL} {
        height: 240px;
    }
`
const StyledQueryImage = styled(QueryImage)`
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    /* width: auto; */
    min-height: 100%;
    min-width: 100%;
    /* width: 792px; */
    transform: translate(-50%, -50%);

    @media ${device.tabletL} {
        height: 240px;
        width: 384px;
    }
    & .gatsby-image-wrapper img {
        /* width: 792px; */
        width: ${(props) => props.width};
        height: ${(props) => props.height};

        @media ${device.tabletL} {
            height: 240px;
            width: 384px;
        }
    }
`

const EmblaCarousel = () => {
    const carousel_data = useStaticQuery(queryCarouselData)
    const carousel_images = [
        {
            image: carousel_data.media1,
            width: '384px',
        },
        {
            image: carousel_data.media2,
            width: '792px',
        },
        {
            image: carousel_data.media3,
            width: '384px',
        },
        {
            image: carousel_data.media4,
            width: '792px',
        },
        {
            image: carousel_data.media5,
            width: '384px',
        },
        {
            image: carousel_data.media6,
            width: '384px',
        },
    ]

    const [viewportRef, embla] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true,
        draggable: true,
    })

    // getWindowWidth()
    // console.log(getWindowWidth());

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    // const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    // const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
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
                                <StyledQueryImage
                                    data={carouselItem.image}
                                    alt=""
                                    loading="lazy"
                                    height="480px"
                                    width={carouselItem.width}
                                />
                            </StyledImageWrapper>
                        </CarouselSlide>
                    ))}
                </CarouselContainer>
            </CarouselViewport>
            {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
        </Carousel>
    )
}

export default EmblaCarousel
