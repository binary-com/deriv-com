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
    },
    {
        title: '_t_Stock & indices_t_',
        link: {
            type: 'internal',
            to: '/markets/stock/',
        },
    },
    {
        title: '_t_ETFs_t_',
        link: {
            type: 'internal',
            to: '/markets/exchange-traded-funds/',
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
