import React from 'react'
import DP2HeroContent from './content'
import DP2HeroBanner from './banner'
import Flex from 'features/components/atoms/flex-box'
import ProductHeroContainer from 'features/components/templates/hero-banners/product'

const DP2Hero = () => {
    return (
        <ProductHeroContainer
            container="fixed"
            style={{ direction: 'ltr' }}
            pt="40x"
            md={{
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
                <DP2HeroContent />
                <DP2HeroBanner />
            </Flex.Box>
        </ProductHeroContainer>
    )
}

export default DP2Hero
