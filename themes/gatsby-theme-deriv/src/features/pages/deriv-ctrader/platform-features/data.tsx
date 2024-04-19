import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { TradingPlatformWhatHaveData } from 'features/components/templates/trade-platform/types'
import { localize } from 'components/localization'

export const trading_platform_features: TradingPlatformWhatHaveData[] = [
    {
        id: 0,
        title: '_t_An intuitive interface_t_',
        subtitle:
            '_t_Take advantage of an easy-to-use interface for trading and charting that both new and experienced traders can enjoy._t_',
        image: (
            <StaticImage
                src="../../../../images/common/trading-platforms/ctrader/interface.png"
                alt={localize('_t_Deriv cTrader web terminal interface showcasing the features_t_')}
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
                src="../../../../images/common/trading-platforms/ctrader/assets.png"
                alt={localize(
                    '_t_A watchlist of popular currency pairs available on Deriv cTrader_t_',
                )}
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
                src="../../../../images/common/trading-platforms/ctrader/trade-margin.png"
                alt={localize('_t_Menu for calculating trade margins feature_t_')}
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
    {
        id: 3,
        title: '_t_Copy trading your way_t_',
        subtitle:
            '_t_Manage your risk by spreading your funds across different trading strategies._t_',
        image: (
            <StaticImage
                src="../../../../images/common/trading-platforms/ctrader/copy-trading.png"
                alt={localize(
                    '_t_List of trading strategy providers in the copy trading terminal_t_',
                )}
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
]
