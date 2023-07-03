import React, { useMemo } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Virtual } from 'swiper'
import SliderWrapper from './slider-wrapper'
import useRegion from 'components/hooks/use-region'

const HomeHeroSlider = () => {
    const { is_eu } = useRegion()

    const items = useMemo(() => {
        const slide_images = [
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
                        loading="eager"
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
                        loading="eager"
                    />
                ),
            },
        ]
        if (!is_eu) {
            slide_images.push(
                {
                    key: 'hero2',
                    image: (
                        <StaticImage
                            objectFit="fill"
                            src="../../../../../images/common/home/hero_2.png"
                            alt="person-hero-2"
                            formats={['avif', 'webp', 'auto']}
                            loading="eager"
                            placeholder="none"
                        />
                    ),
                },
                {
                    key: 'hero1',
                    image: (
                        <StaticImage
                            objectFit="fill"
                            src="../../../../../images/common/home/hero_1.png"
                            alt="person-hero-1"
                            formats={['avif', 'webp', 'auto']}
                            quality={50}
                            placeholder="none"
                        />
                    ),
                },
            )
        } else {
            slide_images.push({
                key: 'hero_eu_1',
                image: (
                    <StaticImage
                        objectFit="fill"
                        src="../../../../../images/common/home/eu_hero_person_5.png"
                        alt="person-hero-1"
                        formats={['avif', 'webp', 'auto']}
                        quality={50}
                        placeholder="none"
                    />
                ),
            })
        }
        return slide_images
    }, [is_eu])

    return (
        <SliderWrapper>
            <Swiper
                speed={1500}
                effect={'fade'}
                slidesPerView={1}
                fadeEffect={{
                    crossFade: true,
                }}
                direction="horizontal"
                modules={[EffectFade, Autoplay, Virtual]}
                autoplay={{
                    delay: 2000,
                }}
                virtual
            >
                {items.map((slide, index) => (
                    <SwiperSlide key={slide.key} virtualIndex={index}>
                        {slide.image}
                    </SwiperSlide>
                ))}
            </Swiper>
        </SliderWrapper>
    )
}

export default HomeHeroSlider
