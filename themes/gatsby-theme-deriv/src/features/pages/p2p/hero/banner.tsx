import React from 'react'
import { wrapper, image_style } from './styles.module.scss'
import { banner_image } from './data'
import Flex from 'features/components/atoms/flex-box'

const DP2HeroBanner = () => {
    return (
        <Flex.Box align="end" className={wrapper} pt="34x" md={{ pt: '0x', basis: '6-12' }}>
            <div className={image_style}>{banner_image}</div>
        </Flex.Box>
    )
}

export default DP2HeroBanner
