import React from 'react'
import { DerivProductContentType } from './types'
import { hero_image_wrapper } from './deriv-products-hero.module.scss'
import FlexBox from 'features/components/atoms/flex-box'

interface ProductsBannerProps {
    contentData: DerivProductContentType
}

const ProductsBanner = ({ contentData }: ProductsBannerProps) => {
    const { hero, hero_mobile } = contentData
    return (
        <>
            <FlexBox.Box ml={'17x'} className={hero_image_wrapper} visible="larger-than-phone">
                {hero}
            </FlexBox.Box>
            <FlexBox.Box ml={'20x'} className={hero_image_wrapper} visible="phone-only">
                {hero_mobile}
            </FlexBox.Box>
        </>
    )
}
export default ProductsBanner
