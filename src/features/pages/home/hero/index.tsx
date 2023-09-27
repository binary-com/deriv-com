import React, { lazy, Suspense } from 'react'
import loadable from '@loadable/component'
import { StaticImage } from 'gatsby-plugin-image'
import pMinDelay from 'p-min-delay'
import HomeHeroContent from './content'
import SliderWrapper from './slider/slider-wrapper'
import Flex from 'features/components/atoms/flex-box'
import ProductHeroContainer from 'features/components/templates/hero-banners/product'
import useRegion from 'components/hooks/use-region'

const HomeHeroSlider = lazy(() => pMinDelay(import('./slider'), 4000))
const HomeHeroSliderEu = lazy(() => pMinDelay(import('./slider'), 4000))

// const HomeHeroSlider = loadable(() => pMinDelay(import('./slider'), 4000), {
//     fallback: (
//         <SliderWrapper>
//             <StaticImage
//                 objectFit="contain"
//                 src="../../../../images/common/home/hero_1.png"
//                 alt="person-hero-1"
//                 formats={['avif', 'webp', 'auto']}
//                 loading="eager"
//                 quality={100}
//                 placeholder="none"
//             />
//         </SliderWrapper>
//     ),
// })

// const HomeHeroSliderEu = loadable(() => pMinDelay(import('./slider'), 4000), {
//     fallback: (
//         <SliderWrapper>
//             <StaticImage
//                 objectFit="contain"
//                 src="../../../../images/common/home/eu_hero_person_5.png"
//                 alt="person-hero-1"
//                 formats={['avif', 'webp', 'auto']}
//                 loading="eager"
//                 quality={100}
//                 placeholder="none"
//             />
//         </SliderWrapper>
//     ),
// })

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
                {is_eu ? (
                    <Suspense
                        fallback={
                            <SliderWrapper>
                                <StaticImage
                                    objectFit="fill"
                                    src="../../../../images/common/home/eu_hero_person_5.png"
                                    alt="person-hero-1"
                                    formats={['avif', 'webp', 'auto']}
                                    loading="eager"
                                    quality={50}
                                    placeholder="blurred"
                                />
                            </SliderWrapper>
                        }
                    >
                        <HomeHeroSliderEu />
                    </Suspense>
                ) : (
                    <Suspense
                        fallback={
                            <SliderWrapper>
                                <StaticImage
                                    objectFit="fill"
                                    src="../../../../images/common/home/hero_1.png"
                                    alt="person-hero-1"
                                    formats={['avif', 'webp', 'auto']}
                                    loading="eager"
                                    quality={50}
                                    placeholder="blurred"
                                />
                            </SliderWrapper>
                        }
                    >
                        <HomeHeroSlider />
                    </Suspense>
                )}
            </Flex.Box>
        </ProductHeroContainer>
    )
}

export default HomeHero
