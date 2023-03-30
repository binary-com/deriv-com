import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import { Controller } from 'swiper'
import type { Swiper as SwiperType } from 'swiper'
import { SmartPlatformItem } from '../../types'
import { platform_swiper } from './platforms-main.module.scss'
import MainSliderItem from './main-slider.item'
import useBreakpoints from 'components/hooks/use-breakpoints'

interface PlatformMainSliderProps {
    items: SmartPlatformItem[]
    setSwiper: (swiper: SwiperType) => void
    connectedSwiper: SwiperType
}

const PlatformsMainSlider = ({ items, setSwiper, connectedSwiper }: PlatformMainSliderProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <Swiper
            modules={[Controller]}
            onSwiper={setSwiper}
            controller={{
                control: connectedSwiper,
            }}
            direction={is_mobile_or_tablet ? 'horizontal' : 'vertical'}
            slidesPerView={'auto'}
            rewind
            autoHeight
            grabCursor
            centeredSlides
            slideToClickedSlide
            spaceBetween={16}
            className={platform_swiper}
        >
            {items.map(({ id, data }) => (
                <SwiperSlide key={id}>
                    <MainSliderItem item={data} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default PlatformsMainSlider
