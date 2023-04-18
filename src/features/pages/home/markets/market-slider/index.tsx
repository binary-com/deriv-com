import React, { useEffect, useRef } from 'react'
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
    const sliderRef = useRef(null)

    const slider_items = useVisibleContent({
        content: market_items,
        config: {
            is_eu,
        },
    })

    useEffect(() => {
        const slider = sliderRef.current?.swiper

        if (slider) {
            const handleVisibilityChange = () => {
                if (document.hidden) {
                    slider.autoplay.stop()
                } else {
                    slider.autoplay.start()
                }
            }

            document.addEventListener('visibilitychange', handleVisibilityChange)

            return () => {
                document.removeEventListener('visibilitychange', handleVisibilityChange)
            }
        }
    }, [sliderRef])

    return (
        <Container.Fluid padding_inline="10x">
            <Swiper
                ref={sliderRef}
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
