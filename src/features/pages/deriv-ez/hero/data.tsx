import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Image from 'features/components/atoms/image'
import DerivEzLogo from 'images/svg/deriv-ez/deriv-ez-logo.svg'
import { DerivCfdContentType } from 'features/components/molecules/deriv-cfd-hero/types'

export const hero_content_data: DerivCfdContentType = {
    main_title: '_t_An intuitive,_t_',
    secondary_title: '_t_easy-to-get-started_t_',
    sub_title: '_t_CFDs trading platform_t_',
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
    logo: <Image src={DerivEzLogo} height={64} alt={'_t_Deriv EZ logo_t_'} />,
    mobile_logo: <Image src={DerivEzLogo} height={32} alt={'_t_Deriv EZ logo_t_'} />,
}
