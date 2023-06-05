import { TMarketNavItem } from './types'

export const marketItems: TMarketNavItem[] = [
    {
        title: '_t_Forex_t_',
        link: {
            type: 'internal',
            to: '/markets/forex/',
        },
    },
    {
        title: '_t_Derived_t_',
        link: {
            type: 'internal',
            to: '/markets/synthetic/',
        },
        active_urls: ['/markets/synthetic/', '/markets/basket-indices/', '/markets/derived-fx/'],
    },
    {
        title: '_t_Stocks & indices_t_',
        link: {
            type: 'internal',
            to: '/markets/stock/',
        },
    },
    {
        title: '_t_Cryptocurrencies_t_',
        link: {
            type: 'internal',
            to: '/markets/cryptocurrencies/',
        },
    },
    {
        title: '_t_Commodities_t_',
        link: {
            type: 'internal',
            to: '/markets/commodities/',
        },
    },
]
