type ItemType = {
    title: string
    short_title: string
}

type MarketTypeType = {
    type: string
    items: ItemType[]
}

// academy topic
export const market_type: MarketTypeType[] = [
    {
        type: 'Market',
        items: [
            {
                title: 'Forex',
                short_title: 'forex',
            },
            {
                title: 'Synthetic indices',
                short_title: 'synthetic_indices',
            },
            {
                title: 'Synthetic',
                short_title: 'synthetic',
            },
            {
                title: 'Stocks',
                short_title: 'stocks',
            },
            {
                title: 'Crypto',
                short_title: 'crypto',
            },
            {
                title: 'Commodities',
                short_title: 'commodities',
            },
        ],
    },
]

export const platforms = [
    {
        type: 'Platform',
        items: [
            {
                title: 'Deriv MT5',
                short_title: 'deriv_mt5',
            },
            {
                title: 'Deriv X',
                short_title: 'deriv_x',
            },
            {
                title: 'DTrader',
                short_title: 'dtrader',
            },
            {
                title: 'DBot',
                short_title: 'dbot',
            },
            {
                title: 'Deriv Go',
                short_title: 'deriv_go',
            },
        ],
    },
]

export const trade_types = [
    {
        type: 'Trade types',
        items: [
            {
                title: 'Multipliers',
                short_title: 'multipliers',
            },
            {
                title: 'CFD',
                short_title: 'cfd',
            },
            {
                title: 'Options',
                short_title: 'options',
            },
            {
                title: 'P2P',
                short_title: 'p2p',
            },
            {
                title: 'Gold',
                short_title: 'gold',
            },
        ],
    },
]

export const resources = [
    {
        type: 'Resources',
        items: [
            {
                title: 'Market report',
                short_title: 'market_report',
            },
            {
                title: 'Market news',
                short_title: 'market_news',
            },
            {
                title: 'Trading tips',
                short_title: 'trading_tips',
            },
            {
                title: 'Payment methods',
                short_title: 'payment_method',
            },
            {
                title: 'Ebooks',
                short_title: 'ebooks',
            },
        ],
    },
]

export const combined_filter_type = [...market_type, ...platforms, ...trade_types, ...resources]
