import React from 'react'
import HomeHeroSlider from './slider'
import HomeHeroContent from './content'
import Flex from 'features/components/atoms/flex-box'
import ProductHeroContainer from 'features/components/templates/hero-banners/product'

const HomeHero = () => {
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
                <HomeHeroSlider />
            </Flex.Box>
        </ProductHeroContainer>
    )
}

export default HomeHero
