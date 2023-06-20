import React, { FC, ReactElement } from 'react'
import HeroMainButton from './products-signup'
import FlexBox from 'features/components/atoms/flex-box'

interface ProductsButtonsProps {
    feature_buttons: ReactElement[]
}

const ProductsButtons = ({ feature_buttons }: ProductsButtonsProps) => {
    return (
        <FlexBox.Box wrap="wrap" gap="5x">
            <FlexBox.Item pt={'15x'} basis="full" md={{ basis: '6-12' }}>
                <HeroMainButton />
            </FlexBox.Item>
            {/* can pass buttons here to render (optional) */}
            {feature_buttons?.map((button, index) => (
                <FlexBox.Item key={index} pt={'15x'} basis="full" md={{ basis: '5-12' }}>
                    {button}
                </FlexBox.Item>
            ))}
        </FlexBox.Box>
    )
}
export default ProductsButtons
