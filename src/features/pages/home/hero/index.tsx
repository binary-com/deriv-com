import React from 'react'
import HomeHeroContent from './content'
import HomeHeroSlider from './slider'
import FlexBox from 'features/components/atoms/flex-box'
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
            <FlexBox
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
            </FlexBox>
        </ProductHeroContainer>
    )
}

export default HomeHero
