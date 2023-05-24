import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper'
// import { SmartPlatformItem } from '../../types'
// import { platform_swiper } from './platforms-main.module.scss'
import * as styles from './styles.module.scss'
import useBreakpoints from 'components/hooks/use-breakpoints'
import CardBasic from 'features/components/atoms/card/card-primary'

interface PlatformMainSliderProps {
    items: any
    setSwiper: (swiper: SwiperType) => void
    connectedSwiper: SwiperType
}

const MarketsMainSlider = ({ items, setSwiper, connectedSwiper }: PlatformMainSliderProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <>
            <Swiper
                slidesPerView={4}
                // spaceBetween={20}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                speed={1200}
                modules={[Autoplay]}
                // breakpoints={{
                //     640: {
                //         slidesPerView: 2,
                //     },
                //     768: {
                //         slidesPerView: 3,
                //     },
                //     1024: {
                //         slidesPerView: 3,
                //     },
                // }}
                className={styles.swiper_wrapper}
            >
                {items.map((data, index) => (
                    <SwiperSlide key={index}>
                        <CardBasic item={data} key={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default MarketsMainSlider
