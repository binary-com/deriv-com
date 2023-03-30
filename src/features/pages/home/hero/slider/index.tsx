import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import { wrapper } from './slider.module.scss'
import 'swiper/swiper-bundle.min.css'

const slide_images = [
    {
        key: 'hero1',
        image: (
            <StaticImage
                objectFit="fill"
                src="../../../../../images/common/home/hero_1.png"
                alt="mobile app deriv go"
                formats={['avif', 'webp', 'auto']}
                loading="eager"
                placeholder="none"
            />
        ),
    },
    {
        key: 'hero2',
        image: (
            <StaticImage
                objectFit="fill"
                src="../../../../../images/common/home/hero_2.png"
                alt="laptop dtrader"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
    },
    {
        key: 'hero3',
        image: (
            <StaticImage
                objectFit="fill"
                src="../../../../../images/common/home/hero_3.png"
                alt="laptop dtrader"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
    },
    {
        key: 'hero4',
        image: (
            <StaticImage
                objectFit="fill"
                src="../../../../../images/common/home/hero_4.png"
                alt="laptop dtrader"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
    },
]

const HomeHeroSlider = () => {
    return (
        <div className={wrapper}>
            <Swiper
                speed={1000}
                effect={'fade'}
                slidesPerView={1}
                fadeEffect={{
                    crossFade: true,
                }}
                direction="horizontal"
                modules={[EffectFade, Autoplay]}
                autoplay={{
                    delay: 3000,
                }}
            >
                {slide_images.map((slide) => (
                    <SwiperSlide key={slide.key}>{slide.image}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HomeHeroSlider
