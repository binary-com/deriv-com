import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { wrapper, image_style } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'

const DP2HeroBanner = () => {
    return (
        <Flex.Box align="end" className={wrapper} pt="34x" md={{ pt: '0x' }}>
            <div className={image_style}>
                <StaticImage
                    src="../../../../images/common/p2p/p2p_hero_banner.png"
                    alt="p2p banner"
                    loading="eager"
                    formats={['avif', 'webp', 'auto']}
                    placeholder="none"
                />
            </div>
        </Flex.Box>
    )
}

export default DP2HeroBanner
