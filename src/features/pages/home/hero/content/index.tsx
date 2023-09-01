import React from 'react'
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import { useFeatureValue } from '@growthbook/growthbook-react'
import HeroCtaButton from './hero-cta.button'
import { hero_content_title, hero_typewriter } from './hero-content.module.scss'
import HeroHeaderItems from './hero-header.items'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { get_lang_direction, Localize } from 'components/localization'

const HeroFeaturesCarousel = loadable(() => pMinDelay(import('./hero-features.carousel'), 3000), {
    fallback: (
        <div className={hero_typewriter}>
            <Typography.Heading as="h3" size="large" weight="bold" color="primary">
                <Localize translate_text="_t_Forex_t_" />
            </Typography.Heading>
        </div>
    ),
})

const HomeHeroContent = () => {
    const ebookStocksHeadingTest = useFeatureValue('homepage', 'control')

    const headings = {
        control: '_t_Get the widest range of markets, trades and platforms_t_',
        'new-title': '_t_Get the widest range of markets, trades and platforms_t_',
    }

    const heading = headings[ebookStocksHeadingTest] || headings.control

    return (
        <Flex.Box justify="start" direction="col" align="start" gap="4x" dir={get_lang_direction()}>
            <HeroHeaderItems />
            <Typography.Heading as="h2" size={'xs'} weight="normal" className={hero_content_title}>
                <Localize translate_text={heading} />
            </Typography.Heading>
            <HeroFeaturesCarousel />
            <HeroCtaButton />
        </Flex.Box>
    )
}

export default HomeHeroContent
