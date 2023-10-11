import { CardType } from 'features/components/atoms/card/type'
import Forex from 'images/svg/trade-types/forex.svg'
import Derived from 'images/svg/markets/derived_markets.svg'
import Stocks from 'images/svg/markets/stocks_markets.svg'
import CryptoCurrencies from 'images/svg/markets/crypto_markets.svg'
import Commodities from 'images/svg/markets/commodities_markets.svg'
import ETFs from 'images/svg/markets/etfs.svg'
import { TSmartContent } from 'types/generics'

export type MarketPageType =
    | 'forex'
    | 'synthetic'
    | 'stock'
    | 'etfs'
    | 'cryptocurrencies'
    | 'commodities'

export type OtherMarketsConfig = {
    current_market: MarketPageType
    is_eu: boolean
}

export type SmartOtherMarketsItem = TSmartContent<CardType, OtherMarketsConfig>

export const other_markets_items: SmartOtherMarketsItem[] = [
    {
        id: 0,
        data: {
            header: '_t_Forex_t_',
            description:
                '_t_Forex trading gives you the chance to profit from changes in the relative values of currencies on the forex market._t_',
            icon: Forex,
            link: {
                type: 'internal',
                to: '/markets/forex',
            },
        },
        visibility: {
            current_market: 'forex',
        },
    },
    {
        id: 1,
        data: {
            header: '_t_Derived indices_t_',
            description:
                '_t_ Derived trading gives you a chance to make a profit from correctly predicting the price movement of instruments that mimic characteristics of financial markets or are derived from them._t_',
            icon: Derived,
            link: {
                type: 'internal',
                to: '/markets/synthetic/',
            },
        },
        visibility: {
            current_market: 'synthetic',
        },
    },
    {
        id: 2,
        data: {
            header: '_t_Stocks & indices_t_',
            description:
                '_t_Stocks & indices trading allows you to profit from the price movements in a market without buying the underlying assets._t_',
            icon: Stocks,
            link: {
                type: 'internal',
                to: '/markets/stock/',
            },
        },
        visibility: {
            current_market: 'stock',
        },
    },
    {
        id: 3,
        data: {
            header: '_t_Exchange-traded funds (ETFs)_t_',
            description:
                '_t_ETFs allow you to diversify your portfolio with various assets that track bonds, commodities, and indices, without the high cost of owning the underlying assets._t_',
            icon: ETFs,
            link: {
                type: 'internal',
                to: '/markets/exchange-traded-funds/',
            },
        },
        visibility: {
            current_market: 'etfs',
            is_eu: false,
        },
    },
    {
        id: 4,
        data: {
            header: '_t_Cryptocurrencies_t_',
            description:
                '_t_Crypto trading gives you an opportunity to benefit from correctly predicting the price movements of cryptocurrencies without buying them._t_',
            icon: CryptoCurrencies,
            link: {
                type: 'internal',
                to: '/markets/cryptocurrencies/',
            },
        },
        visibility: {
            current_market: 'cryptocurrencies',
        },
    },
    {
        id: 5,
        data: {
            header: '_t_Commodities_t_',
            description:
                '_t_Commodities trading on Deriv lets you profit from correctly predicting the market movement on precious metals and crude oil._t_',
            icon: Commodities,
            link: {
                type: 'internal',
                to: '/markets/commodities/',
            },
        },
        visibility: {
            current_market: 'commodities',
        },
    },
]
