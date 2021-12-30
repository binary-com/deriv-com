import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ImageDataLike } from 'gatsby-plugin-image'
import QueryImage from 'components/elements/query-image'

type SlideshowProps = {
    slides: Array<{ key: string; image: ImageDataLike }>
    interval: number
    is_eager?: boolean
}

const StyledImage = styled(QueryImage)<{ $is_hidden: boolean }>`
    display: ${({ $is_hidden }) => ($is_hidden ? 'none' : '')};

    .gatsby-image-wrapper {
        div {
            transition: opacity ease-in-out 2s;
        }
    }
`

const Slideshow = ({ slides = [], interval, is_eager = true }: SlideshowProps) => {
    const [active_index, setActiveIndex] = useState(0)

    const setNextImage = useCallback(() => {
        setActiveIndex((prevTime) => (prevTime >= slides.length - 1 ? 0 : prevTime + 1))
    }, [slides])

    useEffect(() => {
        const slideshow_timer = setInterval(() => {
            setNextImage()
        }, interval * 1000)

        return () => clearInterval(slideshow_timer)
    }, [])

    return (
        <div>
            {slides.map((slide, index) => {
                const { key, image } = slide
                return (
                    <StyledImage
                        key={key}
                        data={image}
                        alt="platform devices"
                        width="100%"
                        height="346"
                        loading={is_eager ? 'eager' : 'lazy'}
                        $is_hidden={active_index !== index}
                    />
                )
            })}
        </div>
    )
}

export default Slideshow
