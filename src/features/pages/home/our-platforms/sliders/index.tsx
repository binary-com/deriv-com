import React, { useState } from 'react'
import type { Swiper } from 'swiper'
import { SmartPlatformItem } from '../types'
import PlatformsMainSlider from './platform-main'
import PlatformImageSlider from './platform-images'
import Flex from 'features/components/atoms/flex-box'

interface PlatformSlidersProps {
    items: SmartPlatformItem[]
}
const PlatformSliders = ({ items }: PlatformSlidersProps) => {
    const [firstSwiper, setFirstSwiper] = useState<Swiper>(null)
    const [secondSwiper, setSecondSwiper] = useState<Swiper>(null)

    return (
        <Flex.Box
            container="fluid"
            justify="start"
            align="center"
            gap="10x"
            mt="20x"
            direction="col-reverse"
            md={{
                direction: 'row',
            }}
        >
            <PlatformsMainSlider
                items={items}
                setSwiper={setFirstSwiper}
                connectedSwiper={secondSwiper}
            />
            <PlatformImageSlider
                items={items}
                setSwiper={setSecondSwiper}
                connectedSwiper={firstSwiper}
            />
        </Flex.Box>
    )
}

export default PlatformSliders
