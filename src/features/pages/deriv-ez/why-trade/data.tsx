import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { DerivEzCardTypes } from '../types'

export const card_data: DerivEzCardTypes[] = [
    {
        title: '_t_Easy to start_t_',
        subtitle:
            '_t_Start trading CFDs in two easy steps — click to get an account, start trading. No need to remember another login ID and password._t_',
        icon: (
            <StaticImage
                src="../../../../images/common/deriv-ez/easy-to-start.png"
                alt="easy to start deriv ez"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={50}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
    {
        title: '_t_24/7 trading_t_',
        subtitle:
            '_t_Trade anytime you want, including weekends and holidays, on cryptocurrencies and our proprietary derived indices._t_',
        icon: (
            <StaticImage
                src="../../../../images/common/deriv-ez/twenty-four-seven.png"
                alt="24/7 trading"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={50}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
    {
        title: '_t_All your favourite assets, one platform_t_',
        subtitle:
            '_t_Access over 150 assets in multiple markets simultaneously on one platform._t_',
        icon: (
            <StaticImage
                src="../../../../images/common/deriv-ez/favourite-assets.png"
                alt="favourite assets"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={50}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
]
