import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import QueryImage from 'components/elements/query-image'

type SlideshowProps = {
    images: Record<string, unknown>[]
    interval: number
}

const StyledImage = styled(QueryImage)`
    .gatsby-image-wrapper {
        div {
            transition: opacity ease-in-out 2s;
        }
    }
`

const Slideshow = ({ images, interval }: SlideshowProps): ReactElement => {
    const [active_index, setActiveIndex] = useState<number>(0)

    const setNextImage = useCallback(() => {
        setActiveIndex((prevTime) => (prevTime >= images.length - 1 ? 0 : prevTime + 1))
    }, [images])

    useEffect(() => {
        const slideshow_timer = setInterval(() => {
            setNextImage()
        }, interval * 1000)

        return () => clearInterval(slideshow_timer)
    }, [])

    return (
        <div>
            <StyledImage
                data={images[active_index]}
                alt="platform devices"
                width="100%"
                height="346"
                loading="eager"
            />
        </div>
    )
}

export default Slideshow
