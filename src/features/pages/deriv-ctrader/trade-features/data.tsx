import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { TradingPlatformWhatHaveProps } from 'features/components/templates/trading-platform/types'

export const trading_platform_features: TradingPlatformWhatHaveProps = [
    {
        id: 0,
        title: '_t_An intuitive interface_t_',
        subtitle:
            '_t_Take advantage of an easy-to-use interface for trading and charting that both new and experienced traders can enjoy._t_',
        image: (
            <StaticImage
                src="../../../images/common/trading-platforms/ctrader/interface.png"
                alt="An intuitive interface"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
    {
        id: 1,
        title: '_t_All your favourite assets in one place_t_',
        subtitle:
            '_t_Trade derived and financial assets on one CFD account, without needing to switch between multiple accounts._t_',
        image: (
            <StaticImage
                src="../../../images/common/trading-platforms/ctrader/assets.png"
                alt="Favourite assets"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
    {
        id: 2,
        title: '_t_Know your trade margins_t_',
        subtitle:
            '_t_Useful menus where you can find out how each asset’s margin impacts your trade before placing them._t_',
        image: (
            <StaticImage
                src="../../../images/common/trading-platforms/ctrader/trade-margins.png"
                alt="Trade margins"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
]
