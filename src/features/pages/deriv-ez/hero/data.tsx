import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Image from 'features/components/atoms/image'
import { DerivEzLogo } from 'images/svg/deriv-ez'
import { localize } from 'components/localization'

export const hero_images = {
    hero: (
        <StaticImage
            src="../../../../images/common/deriv-ez/hero-phone.png"
            alt={localize('_t_Deriv EZ online trading platform_t_')}
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
            alt={'_t_Deriv EZ online trading platform_t_'}
            loading="eager"
            quality={100}
            formats={['avif', 'webp', 'auto']}
            objectFit="contain"
            placeholder="none"
        />
    ),
    logo: <Image src={DerivEzLogo} height={64} alt={localize('_t_Deriv EZ_t_')} />,
    mobile_logo: <Image src={DerivEzLogo} height={32} alt={localize('_t_Deriv EZ_t_')} />,
}
