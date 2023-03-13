import React, { useMemo } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import useRegion from 'components/hooks/use-region'

const HeroImageCarousel = () => {
    const { is_eu, is_row } = useRegion()
    const slide_images = useMemo(() => {
        if (is_row)
            return [
                {
                    key: 'hero1',
                    image: (
                        <StaticImage
                            src="../../../../images/common/home/hero_platform1.png"
                            alt="mobile app deriv go"
                            formats={['avif', 'webp', 'auto']}
                            quality={36}
                            loading="eager"
                            placeholder="none"
                        />
                    ),
                },
                {
                    key: 'hero2',
                    image: (
                        <StaticImage
                            src="../../../../images/common/home/hero_platform2.png"
                            alt="laptop dtrader"
                            formats={['avif', 'webp', 'auto']}
                            quality={44}
                            placeholder="none"
                        />
                    ),
                },
                {
                    key: 'hero3',
                    image: (
                        <StaticImage
                            src="../../../../images/common/home/hero_platform3.png"
                            alt="laptop mt5"
                            formats={['avif', 'webp', 'auto']}
                            quality={38}
                            placeholder="none"
                        />
                    ),
                },
                {
                    key: 'hero4',
                    image: (
                        <StaticImage
                            src="../../../../images/common/home/hero_platform4.png"
                            alt="laptop deriv x"
                            formats={['avif', 'webp', 'auto']}
                            quality={44}
                            placeholder="none"
                        />
                    ),
                },
            ]

        if (is_eu)
            return [
                {
                    key: 'hero1_eu',
                    image: (
                        <StaticImage
                            src="../../../../images/common/home/hero_platform1_eu.png"
                            alt="laptop dtrader eu"
                            formats={['avif', 'webp', 'auto']}
                            quality={44}
                            loading="eager"
                            placeholder="none"
                        />
                    ),
                },
                {
                    key: 'hero2_eu',
                    image: (
                        <StaticImage
                            src="../../../../images/common/home/hero_platform2_eu.png"
                            alt="laptop dmt5 eu"
                            formats={['avif', 'webp', 'auto']}
                            quality={38}
                            placeholder="none"
                        />
                    ),
                },
            ]
    }, [is_eu, is_row])

    return (
        <Swiper
            speed={1000}
            effect={'fade'}
            slidesPerView={1}
            fadeEffect={{
                crossFade: true,
            }}
            modules={[EffectFade, Autoplay]}
            autoplay={{
                delay: 5000,
            }}
        >
            {slide_images.map((slide) => (
                <SwiperSlide key={slide.key}>{slide.image}</SwiperSlide>
            ))}
        </Swiper>
    )
}

export default HeroImageCarousel
