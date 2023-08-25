import React from 'react'
import { hero_image } from './deriv-products-hero.module.scss'
import { DerivProductContentType } from './types'
import FlexBox from 'features/components/atoms/flex-box'

interface ProductsLogoTextProps {
    contentData: DerivProductContentType
}

const ProductsLogoAndText = ({ contentData }: ProductsLogoTextProps) => {
    const { mobile_logo, logo, coming_soon_icon, mobile_coming_soon_icon } = contentData

    return (
        <FlexBox.Box className={hero_image} justify="start">
            <FlexBox.Box visible="phone-and-tablet" align="center" gap="4x">
                {mobile_logo}
                {mobile_coming_soon_icon}
            </FlexBox.Box>
            <FlexBox.Box visible="larger-than-tablet" align="center" gap="12x">
                {logo}
                {coming_soon_icon}
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default ProductsLogoAndText
