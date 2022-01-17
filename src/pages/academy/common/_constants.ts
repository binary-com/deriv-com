type ItemType = {
    title: string
}

export type TopicType = {
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
            },
            {
                title: 'Synthetic indices',
            },
            {
                title: 'Stocks & stock indices',
            },
            {
                title: 'Cryptocurrencies',
            },
            {
                title: 'Commodities',
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
            },
            {
                title: 'Deriv X',
            },
            {
                title: 'DTrader',
            },
            {
                title: 'DBot',
            },
            {
                title: 'Deriv Go',
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
            },
            {
                title: 'CFDs',
            },
            {
                title: 'Options',
            },
        ],
    },
]

export const resources: TopicType[] = [
    {
        type: 'Resources',
        items: [
            {
                title: 'Market reports',
            },
            {
                title: 'Strategies and tips',
            },
            {
                title: 'Payment methods',
            },
        ],
    },
]

export const combined_filter_type = [...market_type, ...platforms, ...trade_types, ...resources]
