import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { HomepageBannerType } from 'features/components/organisms/markets/market-banner/types'

export const BannerItems: HomepageBannerType = {
    title: '_t_Exchange-traded funds_t_',
    image_tablet: (
        <StaticImage
            src="../../../../../images/common/markets/etf-desktop-new.jpg"
            alt="etf banner"
            objectFit="cover"
            placeholder="none"
            formats={['avif', 'webp', 'auto']}
        />
    ),
    image_phone: (
        <StaticImage
            src="../../../../../images/common/markets/ETF.jpg"
            alt="etf banner"
            objectFit="cover"
            placeholder="none"
            formats={['avif', 'webp', 'auto']}
        />
    ),
    description:
        '_t_Exchange-traded funds (ETFs) allow you to diversify your portfolio with assets that track bonds, commodities, and indices, without the high cost of owning the underlying assets._t_',
}
