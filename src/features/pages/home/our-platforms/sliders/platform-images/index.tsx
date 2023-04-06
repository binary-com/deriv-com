import React from 'react'
import { Autoplay, Controller, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { SmartPlatformItem } from '../../types'
import { platform_images_swiper } from './platform-images.module.scss'
import PlatformImageItem from './platform-image.item'
import { get_lang_direction } from 'components/localization'

interface PlatformMainSliderProps {
    items: SmartPlatformItem[]
    setSwiper: (swiper: SwiperType) => void
    connectedSwiper: SwiperType
}

const PlatformImageSlider = ({ items, setSwiper, connectedSwiper }: PlatformMainSliderProps) => {
    return (
        <Swiper
            speed={600}
            effect={'fade'}
            slidesPerView={1}
            fadeEffect={{
                crossFade: true,
            }}
            onSwiper={setSwiper}
            controller={{
                control: connectedSwiper,
            }}
            dir={get_lang_direction()}
            modules={[Controller, EffectFade, Autoplay]}
            autoplay={{
                delay: 3000,
            }}
            className={platform_images_swiper}
        >
            {items.map(({ id, data }) => (
                <SwiperSlide key={id}>
                    <PlatformImageItem item={data} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default PlatformImageSlider
