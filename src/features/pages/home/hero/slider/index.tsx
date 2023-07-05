import React, { useMemo } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import SliderWrapper from './slider-wrapper'
import useRegion from 'components/hooks/use-region'
import Slideshow from 'features/components/molecules/slide-show'

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
                        placeholder="blurred"
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
            slide_images.unshift({
                key: 'hero_eu_1',
                image: (
                    <StaticImage
                        objectFit="fill"
                        src="../../../../../images/common/home/eu_hero_person_5.png"
                        alt="person-hero-1"
                        formats={['avif', 'webp', 'auto']}
                        quality={50}
                        placeholder="blurred"
                    />
                ),
            })
        }
        return slide_images
    }, [is_eu])

    return (
        <SliderWrapper>
            <Slideshow items={items} />
        </SliderWrapper>
    )
}

export default HomeHeroSlider
