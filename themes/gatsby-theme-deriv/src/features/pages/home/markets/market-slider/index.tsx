import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { market_items } from '../data'
import MarketSliderItem from '../market-item'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'
import './market-slide.scss'

const MarketSlider = () => {
    const { is_eu } = useRegion()

    const slider_items = useVisibleContent({
        content: market_items,
        config: {
            is_eu,
        },
    })

    return (
        <div className="markets_swiper_container">
            <Swiper
                modules={[Pagination]}
                pagination={{
                    enabled: true,
                    type: 'bullets',
                    horizontalClass: 'markets_slider_pagination',
                    clickable: true,
                }}
                rewind
                className={'markets_swiper'}
                slidesPerView={'auto'}
            >
                {slider_items.map(({ id, data }) => {
                    return (
                        <SwiperSlide key={id} className={'market_slide'}>
                            <MarketSliderItem item={data} is_eu={is_eu} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default MarketSlider
