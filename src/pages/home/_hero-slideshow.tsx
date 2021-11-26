import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import QueryImage from 'components/elements/query-image'

type HeroSlideshowProps = {
    images: any[]
    interval: number
}

const StyledImage = styled(QueryImage)`
    animation: fadeIn 5s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const HeroSlideshow = ({ images, interval }: HeroSlideshowProps): ReactElement => {
    const [active_index, setActiveIndex] = useState<number>(0)

    const setNextImage = () => {
        if (active_index >= images.length) {
            setActiveIndex(0)
            return
        }
        setActiveIndex(active_index + 1)
    }

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
