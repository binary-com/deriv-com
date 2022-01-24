import React, { useState } from 'react'
import styled from 'styled-components'
import Details from './_details'
import Slider from './_desktop-slider'
import { Flex } from 'components/containers'
import device from 'themes/device'

const StyledDesktopCarousel = styled(Flex)`
    @media ${device.desktopL} {
        margin: 0 auto;
    }
`
const DesktopPlatformCarousel = () => {
    const [slide_index, setSlideIndex] = useState(0)

    return (
        <StyledDesktopCarousel ai="start" jc="center">
            <Slider slide_index={slide_index} onSelectSlide={setSlideIndex} />
            <Details slide={slide_index} />
        </StyledDesktopCarousel>
    )
}

export default DesktopPlatformCarousel
