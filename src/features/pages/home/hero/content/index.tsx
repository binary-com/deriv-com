import React from 'react'
import HeroCtaButton from './hero-cta.button'
import HeroFeaturesCarousel from './hero-features.carousel'
import HeroHeaderItems from './hero-header.items'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const HomeHeroContent = () => {
    return (
        <Flex.Box justify="start" direction="col" align="start" gap="5x">
            <HeroHeaderItems />
            <Typography.Heading as="h5" size={'xs'} weight="normal">
                <Localize translate_text="_t_Get the widest range of markets, trades and platforms_t_" />
            </Typography.Heading>
            <HeroFeaturesCarousel />
            <HeroCtaButton />
        </Flex.Box>
    )
}

export default HomeHeroContent
