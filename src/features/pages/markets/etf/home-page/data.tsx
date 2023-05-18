import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { HomepageBannerType } from 'features/components/organisms/markets/home-page-banner/types'

export const BannerItems: HomepageBannerType = {
    title: '_t_Exchange-traded funds_t_',
    image: (
        <StaticImage
            src="../../../../../images/common/markets/markets-etf.png"
            alt="p2p banner"
            objectFit="cover"
            placeholder="none"
            formats={['avif', 'webp', 'auto']}
        />
    ),
    description:
        '_t_Exchange-traded funds (ETFs) allow you to diversify your portfolio with assets that track bonds, commodities, and indices, without the high cost of owning the underlying assets._t_',
}
