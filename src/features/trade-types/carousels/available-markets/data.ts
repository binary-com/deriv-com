import { TAvailableMarketSmartContent, TAvailableMarketsModel } from './types'
import Forex from 'images/svg/trade-types/forex.svg'
import Commodities from 'images/svg/trade-types/commodities.svg'
import Derived from 'images/svg/trade-types/derived.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'
import Cryptocurrencies from 'images/svg/trade-types/cryptocurrencies.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'

const forex_market_data: TAvailableMarketsModel = {
    name: 'Forex',
    image_src: Forex,
    image_alt: 'forex',
    text: '_t_Forex_t_',
    description:
        '_t_Speculate on the price movements of major forex pairs and increase your profit potential without losing more than your stake._t_',
    learn_more_path: '/markets/forex/',
}

const derived_market_data: TAvailableMarketsModel = {
    name: 'Derived',
    image_src: Derived,
    image_alt: 'derived',
    text: '_t_Derived_t_',
    description:
        '_t_Enjoy trading markets and indices mimicking actual market movements, with little to no disruption from real-world events._t_',
    learn_more_path: '/markets/synthetic/',
}

const stock_indices_market_data: TAvailableMarketsModel = {
    name: 'Stock Indices',
    image_src: StockIndices,
    image_alt: 'stock indices',
    text: '_t_Stocks & indices_t_',
    description:
        '_t_Go long or short on our OTC German index and utilise leverage to increase your potential profit._t_',
    learn_more_path: '/markets/stock/',
}

const crypto_market_data: TAvailableMarketsModel = {
    name: 'Cryptocurrencies',
    image_src: Cryptocurrencies,
    image_alt: 'cryptocurrencies',
    text: '_t_Cryptocurrencies_t_',
    description:
        '_t_Trade on the world’s most popular cryptocurrencies and potentially profit from correctly anticipating price movements._t_',
    learn_more_path: '/markets/cryptocurrencies/',
}

const commodities_market_data: TAvailableMarketsModel = {
    name: 'Commodities',
    image_src: Commodities,
    image_alt: 'commodities',
    description:
        '_t_Speculate on the price movements of silver, gold, oil, and more and use margin to amplify your possible profits._t_',
    text: '_t_Commodities_t_',
    learn_more_path: '/markets/commodities/',
}

const synthetic_market_data: TAvailableMarketsModel = {
    name: 'Synthetic indices',
    image_src: SyntheticIndices,
    image_alt: 'Synthetic indices',
    text: '_t_Synthetic indices_t_',
    description:
        '_t_Trade synthetic indices on margin 24/7 without being affected by natural events and liquidity risks._t_',
    learn_more_path: '/markets/synthetic/',
}

export const cfd_available_markets: TAvailableMarketSmartContent[] = [
    {
        id: 0,
        data: {
            ...forex_market_data,
            description: ({ is_uk_eu }) => {
                if (is_uk_eu) {
                    return '_t_Access over 30+ currency pairs and trade with leverage up to 1:30 to increase your market exposure._t_'
                } else {
                    return '_t_Access over 50 currency pairs and trade with leverage up to 1:1000 to increase your market exposure._t_'
                }
            },
        },
    },
    {
        id: 1,
        data: derived_market_data,
    },
    {
        id: 2,
        data: stock_indices_market_data,
        visiblity: {
            is_uk: false,
        },
    },
    {
        id: 3,
        data: crypto_market_data,
        visiblity: {
            is_uk: false,
        },
    },
    {
        id: 4,
        data: {
            ...commodities_market_data,
            description:
                '_t_Predict the price movements of commodities like silver, gold, and oil, and use margin to amplify your possible profits._t_',
        },
    },
]

export const margins_avialable_markets: TAvailableMarketSmartContent[] = [
    {
        id: 0,
        data: {
            ...forex_market_data,
            description: ({ is_uk_eu }) => {
                if (is_uk_eu) {
                    return '_t_Access over 30+ currency pairs and trade with leverage up to 1:30 to increase your market exposure._t_'
                } else {
                    return '_t_Access over 50 currency pairs and trade with leverage up to 1:1000 to increase your market exposure._t_'
                }
            },
        },
    },
    {
        id: 1,
        data: synthetic_market_data,
    },
    {
        id: 3,
        data: commodities_market_data,
    },
    {
        id: 4,
        data: stock_indices_market_data,
    },
]

export const multiplier_available_markets: TAvailableMarketSmartContent[] = [
    {
        id: 0,
        data: forex_market_data,
    },
    {
        id: 1,
        data: derived_market_data,
    },
]

export const options_available_markets: TAvailableMarketSmartContent[] = [
    {
        id: 0,
        data: {
            ...forex_market_data,
            description:
                '_t_Take part in the world’s largest financial market. Trade digital options and Call/Put Spreads on major, minor, and smart forex pairs._t_',
        },
    },
    {
        id: 1,
        data: {
            ...derived_market_data,
            description:
                '_t_Trade digital options, lookbacks, and Call/Put Spreads 24/7 on our synthetic indices that are free from real-world disruptions._t_',
        },
    },
    {
        id: 2,
        data: {
            ...stock_indices_market_data,
            description:
                '_t_Trade digital options on stocks & indices and profit from the price movements in our competitively priced asset baskets._t_',
        },
    },
    {
        id: 3,
        data: commodities_market_data,
    },
]
