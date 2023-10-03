import React from 'react'
import { hero_image } from './deriv-products-hero.module.scss'
import { DerivProductContentType } from './types'
import FlexBox from 'features/components/atoms/flex-box'

interface ProductsLogoTextProps {
    contentData: DerivProductContentType
}

const ProductsLogoAndText = ({ contentData }: ProductsLogoTextProps) => {
    const { mobile_logo, logo, demo_icon, mobile_demo_icon } = contentData

    return (
        <FlexBox.Box className={hero_image} justify="start">
            <FlexBox.Box visible="phone-and-tablet" align="center" gap="4x">
                {mobile_logo}
                {mobile_demo_icon}
            </FlexBox.Box>
            <FlexBox.Box visible="larger-than-tablet" align="center" gap="4x">
                {logo}
                {demo_icon}
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default ProductsLogoAndText
