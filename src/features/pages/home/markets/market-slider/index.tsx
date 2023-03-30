import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import { market_items } from '../data'
import MarketSliderItem from '../market-item'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'
import Container from 'features/components/atoms/container'
import './market-slide.scss'
import 'swiper/swiper-bundle.min.css'

const MarketSlider = () => {
    const { is_eu } = useRegion()

    const slider_items = useVisibleContent({
        content: market_items,
        config: {
            is_eu,
        },
    })

    return (
        <Container.Fluid padding_inline="10x">
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 1000,
                }}
                pagination={{
                    enabled: true,
                    type: 'bullets',
                    horizontalClass: 'markets_slider_pagination',
                }}
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
