import React, { useState } from 'react'
import styled from 'styled-components'
import Details from './_details'
import PlatformSlider from './_platform-slider'
import { TPlatformDetails } from './_utils'
import { Flex } from 'components/containers'
import device from 'themes/device'

const StyledDesktopCarousel = styled(Flex)`
    @media ${device.desktopL} {
        max-width: 1600px;
        margin: 0 auto;
    }
`

type DesktopPlatformCarouselProps = {
    carousel_data: TPlatformDetails[]
}

const DesktopPlatformCarousel = ({ carousel_data }: DesktopPlatformCarouselProps) => {
    const [slide_index, setSlideIndex] = useState(0)

    return (
        <StyledDesktopCarousel ai="start" jc="center">
            <PlatformSlider
                slide_index={slide_index}
                onSelectSlide={setSlideIndex}
                platform_details={carousel_data}
            />
            <Details slide={slide_index} platform_details={carousel_data} />
        </StyledDesktopCarousel>
    )
}

export default DesktopPlatformCarousel
