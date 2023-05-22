import { CardType } from 'features/components/atoms/card/card-primary/type'
import Forex from 'images/svg/markets/forex_markets.svg'
import Derived from 'images/svg/markets/derived_markets.svg'
import Stocks from 'images/svg/markets/stocks_markets.svg'
import CryptoCurrencies from 'images/svg/markets/crypto_markets.svg'
import Commodities from 'images/svg/markets/commodities_markets.svg'

export const ETFOtherMarkets: CardType[] = [
    {
        id: 0,
        header: '_t_Forex_t_',
        description:
            '_t_Forex trading gives you the chance to profit from changes in the relative values of currencies on the forex market._t_',
        icon: Forex,
        link: '/markets/forex',
    },
    {
        id: 1,

        header: '_t_Derived_t_',
        description:
            '_t_ Derived trading gives you a chance to make a profit from correctly predicting the price movement of instruments that mimic characteristics of financial markets or are derived from them._t_',
        icon: Derived,
        link: '/markets/synthetic/',
    },
    {
        id: 2,

        header: '_t_Stocks & indices_t_',
        description:
            '_t_Stocks & indices trading allows you to profit from the price movements in a market without buying the underlying assets._t_',
        icon: Stocks,
        link: '/markets/stock/',
    },

    {
        id: 3,

        header: '_t_Cryptocurrencies_t_',
        description:
            '_t_Crypto trading gives you an opportunity to benefit from correctly predicting the price movements of cryptocurrencies without buying them._t_',
        icon: CryptoCurrencies,
        link: '/markets/cryptocurrencies/',
    },
    {
        id: 4,

        header: '_t_Commodities_t_',
        description:
            '_t_Commodities trading on Deriv lets you profit from correctly predicting the market movement on precious metals and crude oil._t_',
        icon: Commodities,
        link: '/markets/commodities/',
    },
]
