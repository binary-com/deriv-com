import React, { useState, useEffect, useRef, ReactNode } from 'react'
import styled from 'styled-components'
import { eu_images, row_images } from './_data'
import { Flex } from 'components/containers'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'

const ImagePlaceHolder = styled.div`
    width: 690px;

    @media ${device.tablet} {
        width: 100%;
        height: 360px;
    }
`

const ImageWrapper = styled.div<{ $is_hidden: boolean }>`
    opacity: ${({ $is_hidden }) => ($is_hidden ? '0' : '1')};
    display: ${({ $is_hidden }) => ($is_hidden ? 'none' : 'block')};
    animation: fade 1s ease-in-out;

    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const SlideContainer = styled(Flex)`
    outline: none;
    border: none;
`

const PlatformSlideshow = () => {
    const [active_index, setActiveIndex] = useState(0)
    const { is_eu, is_region_loading } = useRegion()
    const [slide_images, setSlideImages] = useState(row_images)

    useEffect(() => {
        if (is_eu) setSlideImages(eu_images)
    }, [is_eu])

    const intervalRef = useRef(null)

    useEffect(() => {
        const setNextImage = () => {
            setActiveIndex((prevIndex) =>
                prevIndex >= slide_images?.length - 1 ? 0 : prevIndex + 1,
            )
        }

        const slideshow_timer = setInterval(() => {
            setNextImage()
        }, 5000)

        intervalRef.current = slideshow_timer

        return () => clearInterval(intervalRef.current)
    }, [slide_images])

    if (is_region_loading) {
        return <ImagePlaceHolder />
    }

    return (
        <SlideContainer
            max_width="690px"
            max_height="626px"
            tablet={{ height: '360px', ai: 'center' }}
            z_index="2"
        >
            <Slides images={slide_images} active_index={active_index} />
        </SlideContainer>
    )
}

type SlidesProps = {
    images: Array<{ key: string; image: ReactNode }>
    active_index: number
}

const Slides = ({ images, active_index }: SlidesProps) => {
    return (
        <>
            {images?.map((slide, index) => {
                const { key, image } = slide
                return (
                    <ImageWrapper
                        key={`platform-slideshow__${key}`}
                        $is_hidden={active_index !== index}
                        style={{ height: '100%' }}
                    >
                        {image}
                    </ImageWrapper>
                )
            })}
        </>
    )
}

export default PlatformSlideshow
