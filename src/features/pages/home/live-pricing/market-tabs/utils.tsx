import { TMarketButtons } from '../types'
import Forex from 'images/svg/home/ts_fx_icon.svg'
import Derived from 'images/svg/home/ts_derived_icon.svg'
import Stocks from 'images/svg/home/ts_stocks_icon.svg'
import Crypto from 'images/svg/home/ts_crypto_icon.svg'
import Commodities from 'images/svg/home/ts_commodities_icon.svg'
import SelectedForex from 'images/svg/home/selected_ts_fx_icon.svg'
import SelectedDerived from 'images/svg/home/selected_ts_derived_icon.svg'
import SelectedStocks from 'images/svg/home/selected_ts_stocks_icon.svg'
import SelectedCrypto from 'images/svg/home/selected_ts_crypto_icon.svg'
import SelectedCommodities from 'images/svg/home/selected_ts_commodities_icon.svg'

export const market_buttons: TMarketButtons[] = [
    {
        src: Forex,
        selected_src: SelectedForex,
        button_text: 'Forex',
        market_name: 'forex',
        market_description:
            '_t_Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events._t_',
        to: '/markets/forex/',
    },
    {
        src: Derived,
        selected_src: SelectedDerived,
        button_text: 'Derived',
        market_name: 'derived',
        market_description:
            '_t_Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX, and baskets._t_',
        to: '/markets/synthetic/',
    },
    {
        src: Stocks,
        selected_src: SelectedStocks,
        button_text: 'Stocks & indices',
        market_name: 'indices',
        market_description:
            '_t_Trade global stocks of your favourite household brands and international stock market indices on Deriv. Expand your trading opportunities with access to a wide range of stocks and indices at competitive prices, and the convenience to trade indices beyond standard market hours._t_',
        to: '/markets/stock/',
    },
    {
        src: Crypto,
        selected_src: SelectedCrypto,
        button_text: 'Cryptocurrencies',
        market_name: 'cryptocurrency',
        market_description:
            "_t_Take advantage of a highly liquid market with round-the-clock trading. Profit from correctly predicting the movement of world's most popular cryptocurrencies._t_",
        to: '/markets/cryptocurrencies/',
    },
    {
        src: Commodities,
        selected_src: SelectedCommodities,
        button_text: 'Commodities',
        market_name: 'commodities',
        market_description:
            '_t_Speculate on the price movements of silver, gold, oil and more. Profit from the price difference when the market moves in the direction that you have predicted._t_',
        to: '/markets/commodities/',
    },
]
