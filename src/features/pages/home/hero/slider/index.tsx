import React, { useEffect, useMemo, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
// eslint-disable-next-line import/no-unresolved
import { register } from 'swiper/element/bundle'
import SliderWrapper from './slider-wrapper'
import useRegion from 'components/hooks/use-region'

register()
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

    const swiperElRef = useRef(null)

    return (
        <SliderWrapper>
            <swiper-container
                ref={swiperElRef}
                slides-per-view="1"
                // navigationOptions="true"
                // speed={1500}
                effect={'fade'}
                // slides-per-view={1}
                // fadeEffect={{
                //     crossFade: true,
                // }}
                direction="horizontal"
                // modules={[EffectFade]}
                // autoplay={{
                //     delay: 2000,
                // }}
                autoplay-delay="2000"
                // effect="slide"
                fade-effect-cross-fade="true"
            >
                {items.map((slide) => (
                    <swiper-slide key={slide.key}>{slide.image}</swiper-slide>
                ))}
            </swiper-container>
        </SliderWrapper>
    )
}

export default HomeHeroSlider
