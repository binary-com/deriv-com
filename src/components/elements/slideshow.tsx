import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ImageDataLike } from 'gatsby-plugin-image'
import QueryImage from 'components/elements/query-image'

type SlideshowProps = {
    slides: Array<{ key: string; image: ImageDataLike }>
    interval: number
    is_eager?: boolean
}

const StyledImage = styled(QueryImage)`
    .gatsby-image-wrapper {
        div {
            transition: opacity ease-in-out 2s;
        }
    }
`

const Slideshow = ({ slides = [], interval, is_eager = true }: SlideshowProps) => {
    const [active_index, setActiveIndex] = useState(0)
    const [is_first_load, setFirstLoad] = useState(true)

    const setNextImage = useCallback(() => {
        setActiveIndex((prevTime) => (prevTime >= slides.length - 1 ? 0 : prevTime + 1))
    }, [slides])

    useEffect(() => {
        const slideshow_timer = setInterval(() => {
            setTimeout(
                () => {
                    setNextImage()
                    setFirstLoad(false)
                },
                is_first_load ? 4000 : 0,
            )
        }, interval * 1000)

        return () => clearInterval(slideshow_timer)
    }, [])

    return (
        <div>
            {slides.map((slide, index) => {
                if (active_index === index) {
                    const { key, image } = slide
                    return (
                        <StyledImage
                            key={key}
                            data={image}
                            alt="platform devices"
                            width="100%"
                            height="346"
                            loading={is_eager ? 'eager' : 'lazy'}
                        />
                    )
                }
            })}
        </div>
    )
}

export default Slideshow
