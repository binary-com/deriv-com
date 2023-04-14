import React from 'react'
import loadable from '@loadable/component'
import HeroCtaButton from './hero-cta.button'
import HeroHeaderItems from './hero-header.items'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const HeroFeaturesCarousel = loadable(() => import('./hero-features.carousel'), {
    fallback: (
        <Typography.Heading as="h3" size="large" weight="bold" color="primary">
            <Localize translate_text="_t_Forex_t_" />
        </Typography.Heading>
    ),
})

const HomeHeroContent = () => {
    return (
        <Flex.Box justify="start" direction="col" align="start" gap="5x">
            <HeroHeaderItems />
            <Typography.Heading as="h2" size={'xs'} weight="normal">
                <Localize translate_text="_t_Get the widest range of markets, trades and platforms_t_" />
            </Typography.Heading>
            <HeroFeaturesCarousel />
            <HeroCtaButton />
        </Flex.Box>
    )
}

export default HomeHeroContent
