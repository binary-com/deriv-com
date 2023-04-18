import React, { useCallback, useEffect, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import { market_items } from '../data'
import MarketSliderItem from '../market-item'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'
import Container from 'features/components/atoms/container'
import './market-slide.scss'

const MarketSlider = () => {
    const { is_eu } = useRegion()
    const [swiper, setSwiper] = useState<SwiperType>()

    const slider_items = useVisibleContent({
        content: market_items,
        config: {
            is_eu,
        },
    })

    const resumeAutoplay = useCallback(() => {
        if (swiper) {
            swiper.autoplay.resume()
            swiper.autoplay.start()
        }
    }, [swiper])

    // HINT: [Michio] There is an issue with autoplay and slidesPreview 'auto' in swiper 9.x
    // this will fix the issue
    useEffect(() => {
        window.addEventListener('focus', resumeAutoplay)
        return () => {
            window.removeEventListener('focus', resumeAutoplay)
        }
    }, [resumeAutoplay])

    return (
        <Container.Fluid padding_inline="10x">
            <Swiper
                onSwiper={setSwiper}
                modules={[Pagination, Autoplay]}
                speed={2000}
                autoplay={{
                    delay: 1000,
                }}
                pagination={{
                    enabled: true,
                    type: 'bullets',
                    horizontalClass: 'markets_slider_pagination',
                    clickable: true,
                }}
                rewind
                spaceBetween={18}
                className={'markets_swiper'}
                slidesPerView={'auto'}
            >
                {slider_items.map(({ id, data }) => {
                    return (
                        <SwiperSlide key={id} className={'market_slide'}>
                            <MarketSliderItem item={data} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Container.Fluid>
    )
}

export default MarketSlider
