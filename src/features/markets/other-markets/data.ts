import { TOtherMarketsContent } from './types'
import Arrow from 'images/svg/trade-types/arrow-right.svg'
import Basket from 'images/svg/custom/basket-nav.svg'
import Commodities from 'images/svg/markets/commodities-new.svg'
import Cryptocurrencies from 'images/svg/markets/cryptocurrencies-new.svg'
import Forex from 'images/svg/markets/forex-new.svg'
import StockIndices from 'images/svg/markets/stock-new.svg'
import SyntheticIndices from 'images/svg/markets/synthetic-new.svg'

export const other_markets_data: TOtherMarketsContent[] = [
    {
        id: 0,
        data: {
            name: 'forex',
            title: '_t_Forex_t_',
            icon: Forex,
            content:
                '_t_Forex trading gives you the chance to profit from changes in the relative values of currencies on the forex market._t_',
            to: '/markets/forex/',
            dynamic_id: 'marketforexothermarkets',
        },
        visiblity: {},
    },
    {
        id: 1,
        data: {
            name: 'synthetic_indices',
            title: '_t_Synthetic indices_t_',
            icon: SyntheticIndices,
            content:
                '_t_Synthetic indices trading lets you benefit from correctly predicting the price movements of our proprietary indices that simulate real-world market movements._t_',
            to: '/markets/synthetic/',
            dynamic_id: 'marketsyntheticothermarkets',
        },
        visiblity: {
            is_uk: false,
        },
    },
    {
        id: 2,
        data: {
            name: 'stock_indices',
            title: '_t_Stocks & indices_t_',
            icon: StockIndices,
            content:
                '_t_Stocks & indices trading allows you to profit from the price movements in a market without buying the underlying assets._t_',
            to: '/markets/stock/',
            dynamic_id: 'marketstockothermarkets',
        },
        visiblity: {},
    },
    {
        id: 3,
        data: {
            name: 'commodities',
            title: '_t_Commodities_t_',
            icon: Commodities,
            content:
                '_t_Commodities trading on Deriv lets you profit from correctly predicting the market movement on precious metals and crude oil._t_',
            to: '/markets/commodities/',
            dynamic_id: 'marketcommoditiesothermarket',
        },
        visiblity: {},
    },
    {
        id: 4,
        data: {
            name: 'cryptocurrencies',
            title: '_t_Cryptocurrencies_t_',
            icon: Cryptocurrencies,
            content:
                '_t_Crypto trading gives you an opportunity to benefit from correctly predicting the price movements of cryptocurrencies without buying them._t_',
            to: '/markets/cryptocurrencies/',
            dynamic_id: 'marketcryptocurrenciesothermarket',
        },
        visiblity: {
            is_uk: false,
        },
    },
    {
        id: 5,
        data: {
            name: 'basket_indices',
            title: '_t_Basket indices_t_',
            icon: Basket,
            content:
                '_t_In trading basket indices, the change in the value of one currency is measured against a basket of the most liquid currencies in the world._t_',
            to: '/markets/basket-indices/',
            dynamic_id: 'marketbasket_indicesothermarket',
        },
        visiblity: {
            is_eu: false,
            is_uk: false,
        },
    },
]
