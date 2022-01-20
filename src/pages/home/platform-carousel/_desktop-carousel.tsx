import React, { useState } from 'react'
import styled from 'styled-components'
import Details from './_desktop-details'
import Slider from './_desktop-slider'
import { Flex } from 'components/containers'
import device from 'themes/device'

const StyledDesktopCarousel = styled(Flex)`
    @media ${device.desktopL} {
        margin: 0 auto;
    }
`
const DesktopPlatformCarousel = () => {
    const [selected_slide, setSelectedSlide] = useState('Deriv X')

    return (
        <StyledDesktopCarousel ai="start" jc="center">
            <Slider selected_slide={selected_slide} onSelectSlide={setSelectedSlide} />
            <Details slide={selected_slide} />
        </StyledDesktopCarousel>
    )
}

export default DesktopPlatformCarousel
