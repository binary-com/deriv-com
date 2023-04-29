import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { TDerivEzHero } from '../types'

export const hero_images: TDerivEzHero = {
    hero: (
        <StaticImage
            src="../../../../images/common/deriv-ez/hero-phone.png"
            alt="Deriv EZ online trading platform"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={30}
            objectFit="contain"
            placeholder="none"
        />
    ),
    hero_mobile: (
        <StaticImage
            src="../../../../images/common/deriv-ez/hero-phone-mobile.png"
            alt="Deriv EZ online trading platform"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={30}
            objectFit="contain"
            placeholder="none"
        />
    ),
    logo: (
        <StaticImage
            src="../../../../images/svg/deriv-ez/derivez-logo.svg"
            alt="Deriv EZ logo"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={30}
            objectFit="contain"
            placeholder="none"
            width={32}
            height={32}
        />
    ),
}
