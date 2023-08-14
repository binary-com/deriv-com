import Forex from 'images/svg/markets/forex_markets.svg'
import Stocks from 'images/svg/markets/stocks_markets.svg'
import CryptoCurrencies from 'images/svg/markets/crypto_markets.svg'
import Commodities from 'images/svg/markets/commodities_markets.svg'
import ETFs from 'images/svg/markets/etfs.svg'
import { SmartOtherMarketsItem } from 'features/components/molecules/other-markets-slider/data'

export const other_markets_items_deriv_prime: SmartOtherMarketsItem[] = [
    {
        id: 0,
        data: {
            header: '_t_Forex_t_',
            description: '_t_Major, minor, and exoticcurrency pairs._t_',
            icon: Forex,
        },
        visibility: {
            current_market: 'forex',
        },
    },
    {
        id: 1,
        data: {
            header: '_t_Cryptocurrencies_t_',
            description: '_t_24/7 trading with the world’s top crypto assets._t_',
            icon: CryptoCurrencies,
        },
        visibility: {
            current_market: 'cryptocurrencies',
        },
    },
    {
        id: 2,
        data: {
            header: '_t_Commodities_t_',
            description: '_t_Markets including metals and energies._t_',
            icon: Commodities,
        },
        visibility: {
            current_market: 'commodities',
        },
    },
    {
        id: 3,
        data: {
            header: '_t_Stocks & indices_t_',
            description: '_t_Leading company stocks and topglobal indices._t_',
            icon: Stocks,
            is_coming_soon: true,
        },
        visibility: {
            current_market: 'stock',
        },
    },
    {
        id: 4,
        data: {
            header: '_t_ETFs_t_',
            description: '_t_Diverse exchange-traded funds for broad market exposure._t_',
            icon: ETFs,
            is_coming_soon: true,
        },
        visibility: {
            current_market: 'etfs',
        },
    },
]
