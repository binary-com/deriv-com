import React from 'react'
import HomeHeroContent from './content'
import HomeHeroSlider from './slider'
import Flex from 'features/components/atoms/flex-box'
import ProductHeroContainer from 'features/components/templates/hero-banners/product'

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
