import { TSmartNavContent } from '../../types'
// icons
import Commodities from 'images/svg/custom/commodities-nav.svg'
import Cryptocurrencies from 'images/svg/custom/cryptocurrencies-nav.svg'
import DerivedFX from 'images/svg/custom/derived-fx.svg'
import Forex from 'images/svg/custom/forex-nav.svg'
import StockIndices from 'images/svg/custom/stock-indices-nav.svg'

export const marketSectionContent: TSmartNavContent[] = [
    {
        id: 0,
        data: {
            aria_label: 'Forex',
            icon: {
                src: Forex,
                alt: 'Forex',
            },
            content: '_t_Trade the world’s largest financial market with popular forex pairs._t_',
            title: '_t_Forex_t_',
            to: '/markets/forex/',
        },
    },
    {
        id: 1,
        data: {
            aria_label: 'Derived',
            icon: {
                src: DerivedFX,
                alt: 'Synthetic indices',
            },
            content: ({ is_eu }) => {
                return is_eu
                    ? '_t_Enjoy trading asset prices derived from simulated markets._t_'
                    : '_t_Enjoy trading asset prices derived from real-world or simulated markets._t_'
            },
            title: '_t_Forex_t_',
            to: '/markets/forex/',
        },
    },
    {
        id: 2,
        data: {
            aria_label: 'Stocks & indices',
            icon: {
                src: StockIndices,
                alt: 'Stocks & indices',
            },
            content:
                '_t_Predict broader market trends and diversify your risk with stocks & indices._t_',
            title: '_t_Stocks & indices_t_',
            to: '/markets/stock/',
        },
    },
    {
        id: 3,
        data: {
            aria_label: 'Cryptocurrencies',
            icon: {
                src: Cryptocurrencies,
                alt: 'Cryptocurrencies',
            },
            content:
                '_t_Trade with leverage on the price movement of popular crypto-fiat pairs._t_',
            title: '_t_Cryptocurrencies_t_',
            to: '/markets/cryptocurrencies/',
        },
    },
    {
        id: 4,
        data: {
            aria_label: 'Commodities',
            icon: {
                src: Commodities,
                alt: 'Commodities',
            },
            content: "_t_Trade natural resources that are central to the world's economy._t_",
            title: '_t_Commodities_t_',
            to: '/markets/commodities/',
        },
    },
]
