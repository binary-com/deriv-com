import React, { useState } from 'react'
import Details from '../details'
import PlatformSlider from '../platform-slider'
import { TPlatformDetails } from '../_utils'
import { desktopCarousel } from './desktop-platform-carousel.module.scss'
import Flex from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'
import Container from 'features/components/atoms/container'

type DesktopPlatformCarouselProps = {
    carousel_data: TPlatformDetails[]
}

const DesktopPlatformCarousel = ({ carousel_data }: DesktopPlatformCarouselProps) => {
    const [slide_index, setSlideIndex] = useState(0)

    return (
        <Container.Fixed>
            <Container.Fluid>
                <Flex.Box className={dclsx(desktopCarousel)} align="start" justify="between">
                    <PlatformSlider
                        slide_index={slide_index}
                        onSelectSlide={setSlideIndex}
                        platform_details={carousel_data}
                    />
                    <Details slide={slide_index} platform_details={carousel_data} />
                </Flex.Box>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default DesktopPlatformCarousel
