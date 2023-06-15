import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Image from 'features/components/atoms/image'
import DerivCTraderLogo from 'images/svg/deriv-ctrader/deriv-ctrader-logo.svg'
import { DerivCfdContentType } from 'features/components/molecules/deriv-cfd-hero/types'

export const hero_content_data: DerivCfdContentType = {
    main_title: '_t_A feature-rich_t_',
    secondary_title: '_t_CFD trading_t_',
    sub_title: '_t_platform_t_',
    hero: (
        <StaticImage
            src="../../../../images/common/deriv-ctrader/hero-desktop.png"
            alt="Deriv ctrader online trading platform"
            loading="eager"
            quality={100}
            formats={['avif', 'webp', 'auto']}
            objectFit="contain"
            placeholder="none"
        />
    ),
    hero_mobile: (
        <StaticImage
            src="../../../../images/common/deriv-ctrader/hero-mobile.png"
            alt="Deriv ctrader online trading platform"
            loading="eager"
            quality={100}
            formats={['avif', 'webp', 'auto']}
            objectFit="contain"
            placeholder="none"
        />
    ),
    logo: <Image src={DerivCTraderLogo} height={64} alt={'_t_Deriv ctrader logo_t_'} />,
    mobile_logo: <Image src={DerivCTraderLogo} height={32} alt={'_t_Deriv ctrader logo_t_'} />,
}
