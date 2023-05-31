import React from 'react'
import { Autoplay, Controller, EffectFade, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { SmartPlatformItem } from '../../types'
import { platform_images_swiper, platform_slider_pagination } from './platform-images.module.scss'
import PlatformImageItem from './platform-image.item'
import { get_lang_direction } from 'components/localization'

interface PlatformMainSliderProps {
    items: SmartPlatformItem[]
    setSwiper: (swiper: SwiperType) => void
    connectedSwiper: SwiperType
}

const PlatformImageSlider = ({ items, setSwiper, connectedSwiper }: PlatformMainSliderProps) => {
    const sliderHandler = (swiper: SwiperType) => {
        console.log('dafd')
        setTimeout(function () {
            swiper.autoplay.start()
            swiper.params.autoplay = {
                delay: 4000,
            }
        }, 3000)
    }
    return (
        <Swiper
            onInit={sliderHandler}
            speed={800}
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
            modules={[Controller, EffectFade, Autoplay, Pagination]}
            className={platform_images_swiper}
            pagination={{
                enabled: true,
                type: 'bullets',
                horizontalClass: platform_slider_pagination,
                clickable: true,
            }}
            breakpoints={{
                992: {
                    pagination: {
                        enabled: false,
                        type: 'bullets',
                        horizontalClass: platform_slider_pagination,
                        clickable: true,
                    },
                },
            }}
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
