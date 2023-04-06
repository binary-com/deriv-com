import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import { Controller, EffectFade } from 'swiper'
import type { Swiper as SwiperType } from 'swiper'
import { SmartPlatformItem } from '../../types'
import { platform_swiper } from './platforms-main.module.scss'
import MainSliderItem from './main-slider.item'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { get_lang_direction } from 'components/localization'

interface PlatformMainSliderProps {
    items: SmartPlatformItem[]
    setSwiper: (swiper: SwiperType) => void
    connectedSwiper: SwiperType
}

const PlatformsMainSlider = ({ items, setSwiper, connectedSwiper }: PlatformMainSliderProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <Swiper
            modules={[Controller, EffectFade]}
            onSwiper={setSwiper}
            controller={{
                control: connectedSwiper,
            }}
            effect={is_mobile_or_tablet ? 'fade' : undefined}
            fadeEffect={{
                crossFade: is_mobile_or_tablet,
            }}
            direction={is_mobile_or_tablet ? 'horizontal' : 'vertical'}
            dir={get_lang_direction()}
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
