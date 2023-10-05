import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Image from 'features/components/atoms/image'
import CTraderLogo from 'images/svg/trading-platforms/ctrader/ctrader-logo.svg'
import DemoLogo from 'images/svg/trading-platforms/ctrader/demo_ctrader.svg'
import { DerivProductContentType } from 'features/components/templates/banners/deriv-products-hero/types'

export const hero_content_data: DerivProductContentType = {
    main_title: ['_t_A feature-rich_t_', '_t_CFD trading_t_', '_t_platform_t_'],
    hero: (
        <StaticImage
            src="../../../../images/common/trading-platforms/ctrader/ctrader-hero.png"
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
            src="../../../../images/common/trading-platforms/ctrader/ctrader-hero-mobile-new-2.png"
            alt="Deriv ctrader online trading platform"
            loading="eager"
            quality={100}
            formats={['avif', 'webp', 'auto']}
            objectFit="contain"
            placeholder="none"
        />
    ),
    logo: <Image src={CTraderLogo} height={64} alt={'_t_Deriv ctrader logo_t_'} />,
    mobile_logo: <Image src={CTraderLogo} height={32} alt={'_t_Deriv ctrader logo_t_'} />,
    demo_icon: <Image src={DemoLogo} height={28} width={55} alt={'_t_demo_t_'} />,
    mobile_demo_icon: <Image src={DemoLogo} height={24} width={49} alt={'_t_demo_t_'} />,
}
