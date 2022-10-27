import { TMarketSmartContent } from './types'

export const market_data: TMarketSmartContent[] = [
    {
        id: 0,
        data: {
            header: '_t_Forex_t_',
            description:
                '_t_Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day._t_',
            img_name: 'market_forex',
            to: '/markets/forex/',
            gradient_start: '#661B20',
            gradient_end: '#190708',
        },
        visiblity: {},
    },
    {
        id: 1,
        data: {
            header: '_t_Synthetic indices_t_',
            description:
                '_t_Enjoy synthetic markets that emulate the excitement of real-world markets without unpredictable real-world disruptions._t_',
            img_name: 'market_synthetic_indices',
            to: '/markets/synthetic/',
            gradient_start: '#20403A',
            gradient_end: '#08100E',
        },
        visiblity: {
            is_uk: false,
        },
    },
    {
        id: 2,
        data: {
            header: '_t_Stocks & indices_t_',
            description:
                '_t_Trade share price movements of big brands and predict broader market trends with indices that measure the overall performance of a market._t_',
            img_name: 'market_stocks_indices',
            to: '/markets/stock/',
            gradient_start: '#2A2040',
            gradient_end: '#0A0810',
        },
        visiblity: {},
    },
    {
        id: 3,
        data: {
            header: '_t_Cryptocurrencies_t_',
            description:
                '_t_Trade on the rising and falling prices of the most popular cryptocurrencies without the need to own a digital wallet._t_',
            img_name: 'market_crypto',
            to: '/markets/cryptocurrencies/',
            gradient_start: '#664407',
            gradient_end: '#191102',
        },
        visiblity: {
            is_uk: false,
        },
    },
    {
        id: 4,
        data: {
            header: '_t_Basket indices_t_',
            description:
                '_t_Trade your favourite currency against a basket of major currencies and benefit from reduced risk and volatility._t_',
            img_name: 'market_basket_indices',
            to: '/markets/basket-indices/',
            gradient_start: '#555110',
            gradient_end: '#151404',
        },
        visiblity: {
            is_uk: false,
            is_eu: false,
        },
    },
    {
        id: 5,
        data: {
            header: '_t_Commodities_t_',
            description:
                '_t_Trade the price movements of natural resources that are central to the world’s economy and make the most of the market action._t_',
            img_name: 'market_commodities',
            to: '/markets/commodities/',
            gradient_start: '#183046',
            gradient_end: '#060C11',
        },
        visiblity: {},
    },
]
