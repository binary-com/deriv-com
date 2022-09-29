import { TMarketButtons } from './_types'

export const TABLE_VISIBLE_ROWS = 6

export const market_buttons: TMarketButtons[] = [
    {
        id: 0,
        button_text: 'Derived',
        market_name: 'synthetic_index',
    },
    {
        id: 1,
        button_text: 'Forex',
        market_name: 'forex',
    },
    {
        id: 2,
        button_text: 'Stock & Indices',
        market_name: 'indices',
    },
    {
        id: 3,
        button_text: 'Cryptocurrency',
        market_name: 'cryptocurrency',
    },
    {
        id: 4,
        button_text: 'Commodities',
        market_name: 'commodities',
    },
    {
        id: 6,
        button_text: 'Basket Indices',
        market_name: 'basket_index',
    },
]
