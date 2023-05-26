import React from 'react'
import loadable from '@loadable/component'
import { StaticImage } from 'gatsby-plugin-image'
import pMinDelay from 'p-min-delay'
import HomeHeroContent from './content'
import SliderWrapper from './slider/slider-wrapper'
import Flex from 'features/components/atoms/flex-box'
import ProductHeroContainer from 'features/components/templates/hero-banners/product'
import useRegion from 'components/hooks/use-region'

const HomeHeroSlider = loadable(() => pMinDelay(import('./slider'), 4000), {
    fallback: (
        <SliderWrapper>
            <StaticImage
                objectFit="fill"
                src="../../../../images/common/home/hero_1.png"
                alt="person-hero-1"
                formats={['avif', 'webp']}
                loading="eager"
                quality={50}
                placeholder="blurred"
            />
        </SliderWrapper>
    ),
})

const HomeHeroSliderEu = loadable(() => pMinDelay(import('./slider'), 4000), {
    fallback: (
        <SliderWrapper>
            <StaticImage
                objectFit="fill"
                src="../../../../images/common/home/eu_hero_person_5.png"
                alt="person-hero-1"
                formats={['avif', 'webp']}
                loading="eager"
                quality={50}
                placeholder="blurred"
            />
        </SliderWrapper>
    ),
})

const HomeHero = () => {
    const { is_eu } = useRegion()
    return (
        <ProductHeroContainer
            container="fixed"
            style={{ direction: 'ltr' }}
            pt="40x"
            md={{
                justify: 'center',
                align: 'center',
                pt: '0x',
            }}
        >
            <Flex.Box
                container="fluid"
                align="center"
                gap={'20x'}
                direction="col"
                md={{
                    direction: 'row',
                    justify: 'start',
                }}
            >
                <HomeHeroContent />
                {is_eu ? <HomeHeroSliderEu /> : <HomeHeroSlider />}
            </Flex.Box>
        </ProductHeroContainer>
    )
}

export default HomeHero
