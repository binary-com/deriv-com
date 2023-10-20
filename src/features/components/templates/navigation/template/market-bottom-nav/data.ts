import { MarketTradeTypeItem } from './types'

export const marketItems: MarketTradeTypeItem[] = [
    {
        id: 0,
        data: {
            title: '_t_Forex_t_',
            link: {
                type: 'internal',
                to: '/markets/forex/',
            },
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Derived indices_t_',
            link: {
                type: 'internal',
                to: '/markets/synthetic/',
            },
            active_urls: [
                '/markets/synthetic/',
                '/markets/basket-indices/',
                '/markets/derived-fx/',
            ],
        },
    },
    {
        id: 2,
        data: {
            title: '_t_Stocks & indices_t_',
            link: {
                type: 'internal',
                to: '/markets/stock/',
            },
        },
    },
    {
        id: 3,
        data: {
            title: '_t_ETFs_t_',
            link: {
                type: 'internal',
                to: '/markets/exchange-traded-funds/',
            },
        },
    },
    {
        id: 4,
        data: {
            title: '_t_Cryptocurrencies_t_',
            link: {
                type: 'internal',
                to: '/markets/cryptocurrencies/',
            },
        },
    },
    {
        id: 5,
        data: {
            title: '_t_Commodities_t_',
            link: {
                type: 'internal',
                to: '/markets/commodities/',
            },
        },
    },
]
