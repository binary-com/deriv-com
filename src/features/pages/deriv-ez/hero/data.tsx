import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export const hero_images = {
    hero: (
        <StaticImage
            src="../../../../images/common/deriv-ez/hero-phone.png"
            alt="Deriv EZ online trading platform"
            loading="eager"
            quality={100}
            formats={['avif', 'webp', 'auto']}
            objectFit="contain"
            placeholder="none"
        />
    ),
    hero_mobile: (
        <StaticImage
            src="../../../../images/common/deriv-ez/hero-phone-mobile.png"
            alt="Deriv EZ online trading platform"
            loading="eager"
            quality={100}
            formats={['avif', 'webp', 'auto']}
            objectFit="contain"
            placeholder="none"
        />
    ),
    logo: (
        <StaticImage
            src="../../../../images/common/deriv-ez/deriv-ez-logo.png"
            alt="Deriv EZ logo"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={80}
            objectFit="contain"
            placeholder="none"
            height={64}
        />
    ),
    mobile_logo: (
        <StaticImage
            src="../../../../images/common/deriv-ez/deriv-ez-logo.png"
            alt="Deriv EZ logo"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={80}
            objectFit="contain"
            placeholder="none"
            height={32}
        />
    ),
}
