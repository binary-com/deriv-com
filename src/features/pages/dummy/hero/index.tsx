import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import HomeHeroContent from './content'
import Flex from 'features/components/atoms/flex-box'
import TradePlatformHeroContainer from 'features/components/templates/trade-platforms-banner/'
import useRegion from 'components/hooks/use-region'
import TradingPlatformHeroContent from 'features/components/templates/trade-platforms-banner/content'

const DummyHero = () => {
    const { is_eu } = useRegion()
    return (
        <TradePlatformHeroContainer
            container="fixed"
            style={{ direction: 'ltr' }}
            pt="40x"
            md={{
                pt: '0x',
            }}
            curveColor="blue"
        >
            <TradingPlatformHeroContent
                heading="The all-in-one CFD trading platform"
                imageWidth="843px"
                rightImage={true}
            >
                <StaticImage
                    src="../../../../images/common/dmt5/rebranded-dmt5-banner.png"
                    loading="eager"
                    alt="banner"
                    formats={['avif', 'webp', 'auto']}
                />
            </TradingPlatformHeroContent>
        </TradePlatformHeroContainer>
    )
}

export default DummyHero
