import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Pagination } from 'swiper'
// import { SmartPlatformItem } from '../../types'
// import { platform_swiper } from './platforms-main.module.scss'
import * as styles from './styles.module.scss'
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
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Pagination]}
                className={styles.swiper_wrapper}
            >
                {items.map((data, index) => (
                    <SwiperSlide key={index}>
                        <CardBasic item={data} key={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
        // <Swiper
        //     slidesPerView={1}
        //     spaceBetween={10}
        //     pagination={{
        //         clickable: true,
        //     }}
        //     breakpoints={{
        //         '@0.00': {
        //             slidesPerView: 1,
        //             spaceBetween: 10,
        //         },
        //         '@0.75': {
        //             slidesPerView: 2,
        //             spaceBetween: 20,
        //         },
        //         '@1.00': {
        //             slidesPerView: 3,
        //             spaceBetween: 40,
        //         },
        //         '@1.50': {
        //             slidesPerView: 4,
        //             spaceBetween: 50,
        //         },
        //     }}
        //     modules={[Pagination]}
        //     className="mySwiper"
        // >
        //     <SwiperSlide>Slide 1</SwiperSlide>
        //     <SwiperSlide>Slide 2</SwiperSlide>
        //     <SwiperSlide>Slide 3</SwiperSlide>
        //     <SwiperSlide>Slide 4</SwiperSlide>
        //     <SwiperSlide>Slide 5</SwiperSlide>
        //     <SwiperSlide>Slide 6</SwiperSlide>
        //     <SwiperSlide>Slide 7</SwiperSlide>
        //     <SwiperSlide>Slide 8</SwiperSlide>
        //     <SwiperSlide>Slide 9</SwiperSlide>
        // </Swiper>
        // <Swiper
        //     slidesPerView={3}
        //     spaceBetween={10}
        //     pagination={{
        //         clickable: true,
        //     }}
        //     breakpoints={{
        //         640: {
        //             slidesPerView: 2,
        //             spaceBetween: 20,
        //         },
        //         768: {
        //             slidesPerView: 3,
        //             spaceBetween: 40,
        //         },
        //         1024: {
        //             slidesPerView: 5,
        //             spaceBetween: 50,
        //         },
        //     }}
        //     modules={[Pagination]}
        //     className="mySwiper"
        // >

        //     <SwiperSlide>Slide eee</SwiperSlide>
        //     <SwiperSlide>Slide 2</SwiperSlide>
        //     <SwiperSlide>Slide 3</SwiperSlide>
        //     <SwiperSlide>Slide 4</SwiperSlide>
        //     <SwiperSlide>Slide 5</SwiperSlide>
        //     <SwiperSlide>Slide 6</SwiperSlide>
        //     <SwiperSlide>Slide 7</SwiperSlide>
        //     <SwiperSlide>Slide 8</SwiperSlide>
        //     <SwiperSlide>Slide 9</SwiperSlide>
        // </Swiper>
    )
}

export default MarketsMainSlider
