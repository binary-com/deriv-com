import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Pagination } from 'swiper'
// import { SmartPlatformItem } from '../../types'
// import { platform_swiper } from './platforms-main.module.scss'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { get_lang_direction } from 'components/localization'
import CardBasic from 'features/components/atoms/card/card-primary'

interface PlatformMainSliderProps {
    items: any
    setSwiper: (swiper: SwiperType) => void
    connectedSwiper: SwiperType
}

const MarketsMainSlider = ({ items, setSwiper, connectedSwiper }: PlatformMainSliderProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {items.map((data, index) => (
                <SwiperSlide key={index}>
                    <CardBasic item={data} key={index} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MarketsMainSlider
