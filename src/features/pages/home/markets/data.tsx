import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { SmartMarketItem } from './types'

export const market_items: SmartMarketItem[] = [
    {
        id: 0,
        data: {
            header: '_t_Forex_t_',
            description:
                '_t_Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day._t_',
            url: {
                type: 'internal',
                to: '/markets/forex/',
            },
            img: (
                <StaticImage
                    src="../../../../images/common/home/market_forex.png"
                    alt="laptop dtrader"
                    formats={['avif', 'webp', 'auto']}
                    placeholder="none"
                />
            ),
        },
    },

    {
        id: 1,
        data: {
            header: '_t_Derived_t_',
            description:
                '_t_Enjoy trading markets and indices mimicking actual market movements, with little to no disruption from real-world events._t_',
            url: {
                type: 'internal',
                to: '/markets/synthetic/',
            },
            img: (
                <StaticImage
                    src="../../../../images/common/home/market_derived.png"
                    alt="laptop dtrader"
                    formats={['avif', 'webp', 'auto']}
                    placeholder="none"
                />
            ),
        },
    },
    {
        id: 2,
        data: {
            header: '_t_Stocks & indices_t_',
            description:
                '_t_Trade share price movements of big brands and predict broader market trends with indices that measure the overall performance of a market._t_',
            url: {
                type: 'internal',
                to: '/markets/stock/',
            },
            img: (
                <StaticImage
                    src="../../../../images/common/home/market_stocks_indices.png"
                    alt="laptop dtrader"
                    formats={['avif', 'webp', 'auto']}
                    placeholder="none"
                />
            ),
        },
    },
    {
        id: 3,
        data: {
            header: '_t_Cryptocurrencies_t_',
            description:
                '_t_Trade on the rising and falling prices of the most popular cryptocurrencies without the need to own a digital wallet._t_',
            url: {
                type: 'internal',
                to: '/markets/cryptocurrencies/',
            },
            img: (
                <StaticImage
                    src="../../../../images/common/home/market_crypto.png"
                    alt="laptop dtrader"
                    formats={['avif', 'webp', 'auto']}
                    placeholder="none"
                />
            ),
        },
    },
    {
        id: 4,
        data: {
            header: '_t_Commodities_t_',
            description:
                '_t_Trade the price movements of natural resources that are central to the world’s economy and make the most of the market action._t_',
            url: {
                type: 'internal',
                to: '/markets/commodities/',
            },
            img: (
                <StaticImage
                    src="../../../../images/common/home/market_commodities.png"
                    alt="laptop dtrader"
                    formats={['avif', 'webp', 'auto']}
                    placeholder="none"
                />
            ),
        },
    },
]
