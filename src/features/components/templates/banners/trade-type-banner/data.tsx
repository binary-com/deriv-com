import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const banner_images = {
    banner: (
        <StaticImage
            src="../../../../../images/common/trade-types/trade-patterns-new.png"
            alt="Trade type banner"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            placeholder="blurred"
            style={{ height: '45rem' }}
        />
    ),
    banner_mobile: (
        <StaticImage
            src="../../../../../images/common/trade-types/trade-patterns-mobile-new.png"
            alt="Trade type banner"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            placeholder="blurred"
            style={{ height: '57rem' }}
        />
    ),
}
