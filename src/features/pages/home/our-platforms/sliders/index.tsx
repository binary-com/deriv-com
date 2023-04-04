import React, { useState } from 'react'
import type { Swiper } from 'swiper'
import platformSliderItems from '../data'
import PlatformsMainSlider from './platform-main'
import PlatformImageSlider from './platform-images'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'
import Flex from 'features/components/atoms/flex-box'

const PlatformSliders = () => {
    const { is_eu } = useRegion()

    const [firstSwiper, setFirstSwiper] = useState<Swiper>(null)
    const [secondSwiper, setSecondSwiper] = useState<Swiper>(null)

    const visible_items = useVisibleContent({
        content: platformSliderItems,
        config: {
            is_eu,
        },
    })

    return (
        <Flex.Box
            container="fluid"
            justify="start"
            gap="10x"
            mt="40x"
            direction="col-reverse"
            md={{
                direction: 'row',
            }}
        >
            <PlatformsMainSlider
                items={visible_items}
                setSwiper={setFirstSwiper}
                connectedSwiper={secondSwiper}
            />
            <PlatformImageSlider
                items={visible_items}
                setSwiper={setSecondSwiper}
                connectedSwiper={firstSwiper}
            />
        </Flex.Box>
    )
}

export default PlatformSliders
