type ItemType = {
    title: string
    short_title: string
}

type TopicType = {
    type: string
    items: ItemType[]
}

// academy topic
export const market_type: TopicType[] = [
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
                title: 'Stocks & stock indices',
                short_title: 'stocks_and_stock_indices',
            },
            {
                title: 'Cryptocurrencies',
                short_title: 'cryptocurrencies',
            },
            {
                title: 'Commodities',
                short_title: 'commodities',
            },
        ],
    },
]

export const platforms: TopicType[] = [
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

export const trade_types: TopicType[] = [
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
        ],
    },
]

export const resources: TopicType[] = [
    {
        type: 'Resources',
        items: [
            {
                title: 'Market report',
                short_title: 'market_report',
            },
            {
                title: 'Strategies and tips',
                short_title: 'strategies_and_tips',
            },
            {
                title: 'Payment methods',
                short_title: 'payment_methods',
            },
        ],
    },
]

export const combined_filter_type = [...market_type, ...platforms, ...trade_types, ...resources]
