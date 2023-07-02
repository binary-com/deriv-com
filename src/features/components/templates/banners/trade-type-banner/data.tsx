import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const banner_images = {
    banner: (
        <StaticImage
            src="../../../../../images/common/trade-types/trade-patterns.png"
            alt="Trade type banner"
            formats={['avif', 'webp', 'auto']}
            placeholder="none"
            style={{ height: '45rem' }}
        />
    ),
    banner_mobile: (
        <StaticImage
            src="../../../../../images/common/trade-types/trade-patterns-mobile.png"
            alt="Trade type banner"
            formats={['avif', 'webp', 'auto']}
            placeholder="none"
            style={{ height: '57rem' }}
        />
    ),
}
