import React from 'react'
import { product_hero } from './product-hero.module.scss'
import FlexBox, { FlexBoxProps } from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'

const ProductHeroContainer = ({ className, ...rest }: FlexBoxProps<'div'>) => {
    return <FlexBox className={dclsx(className, product_hero)} {...rest} />
}

export default ProductHeroContainer
