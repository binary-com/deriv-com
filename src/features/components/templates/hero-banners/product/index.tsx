import React from 'react'
import { product_hero } from './product-hero.module.scss'
import Flex from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'

const ProductHeroContainer = ({ className, ...rest }: FlexBoxProps<'div'>) => {
    return <Flex.Box className={dclsx(className, product_hero)} {...rest} />
}

export default ProductHeroContainer
