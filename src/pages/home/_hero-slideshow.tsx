import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import QueryImage from 'components/elements/query-image'

type HeroSlideshowProps = {
    images: any[]
    interval: number
}

const StyledImage = styled(QueryImage)`
    transition: all ease-in-out 1s;
`

const HeroSlideshow = ({ images, interval }: HeroSlideshowProps): ReactElement => {
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

export default HeroSlideshow
