import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import SliderWrapper from './slider-wrapper'

const slide_images = [
    {
        key: 'hero1',
        image: (
            <StaticImage
                objectFit="fill"
                src="../../../../../images/common/home/hero_1.png"
                alt="person-hero-1"
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
                alt="person-hero-2"
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
                alt="person-hero-3"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
                quality={75}
            />
        ),
    },
    {
        key: 'hero4',
        image: (
            <StaticImage
                objectFit="fill"
                src="../../../../../images/common/home/hero_4.png"
                alt="person-hero-4"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
    },
]

const HomeHeroSlider = () => {
    return (
        <SliderWrapper>
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
        </SliderWrapper>
    )
}

export default HomeHeroSlider
