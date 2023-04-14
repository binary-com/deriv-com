import React from 'react'
import loadable from '@loadable/component'
import { StaticImage } from 'gatsby-plugin-image'
import HomeHeroContent from './content'
import SliderWrapper from './slider/slider-wrapper'
import Flex from 'features/components/atoms/flex-box'
import ProductHeroContainer from 'features/components/templates/hero-banners/product'

const HomeHeroSlider = loadable(() => import('./slider'), {
    fallback: (
        <SliderWrapper>
            <StaticImage
                objectFit="fill"
                src="../../../../images/common/home/hero_1.png"
                alt="person-hero-1"
                formats={['avif', 'webp', 'auto']}
                loading="eager"
                quality={50}
                placeholder="none"
            />
        </SliderWrapper>
    ),
})
const HomeHero = () => {
    return (
        <ProductHeroContainer
            container="fixed"
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
                justify="between"
                direction="col"
                md={{
                    direction: 'row',
                    justify: 'start',
                }}
            >
                <HomeHeroContent />
                <HomeHeroSlider />
            </Flex.Box>
        </ProductHeroContainer>
    )
}

export default HomeHero
