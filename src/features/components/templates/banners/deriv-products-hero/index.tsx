import React from 'react'
import { hero_wrapper, hero_main_wrapper } from './deriv-products-hero.module.scss'
import { DerivProductContentType } from './types'
import ProductsButtons from './products-start-buttons'
import ProductsLogoAndText from './products-logo-and-text'
import ProductsHeading from './products-heading'
import ProductsBanner from './products-banner-image'
import FlexBox from 'features/components/atoms/flex-box'
import TradeHeroContainer from 'features/components/templates/hero-banners/trade'

interface DerivProductHeroType {
    contentData: DerivProductContentType
}

const DerivProductHero = ({ contentData }: DerivProductHeroType) => {
    return (
        <TradeHeroContainer
            container={'fixed'}
            direction={'col-reverse'}
            className={hero_main_wrapper}
            align="center"
            md={{ direction: 'row' }}
        >
            <FlexBox.Box
                className={hero_wrapper}
                direction={'col'}
                justify={'center'}
                margin_block={'15x'}
                margin_inline="15x"
                md={{ margin_inline: '8x' }}
            >
                <ProductsLogoAndText contentData={contentData} />
                <ProductsHeading title={contentData.main_title} />
                <ProductsButtons feature_buttons={contentData.feature_buttons} />
            </FlexBox.Box>
            <ProductsBanner contentData={contentData} />
        </TradeHeroContainer>
    )
}
export default DerivProductHero
