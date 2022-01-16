import React, { useState } from 'react'
import Details from './_desktop-details'
import Slider from './_desktop-slider'
import { Flex } from 'components/containers'

const DesktopPlatformCarousel = () => {
    const [selected_slide, setSelectedSlide] = useState(3)

    return (
        <Flex ai="start" jc="center">
            <Slider selected_slide={selected_slide} onSelectSlide={setSelectedSlide} />
            <Details slide={selected_slide} />
        </Flex>
    )
}

export default DesktopPlatformCarousel
