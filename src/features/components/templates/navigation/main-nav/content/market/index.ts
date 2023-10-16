import { SmartNavSectionColumns } from '../../../types'
import Commodities from 'images/svg/components/component_commodities_icon.svg'
import Cryptocurrencies from 'images/svg/components/component_cryptocurrencies_icon.svg'
import DerivedFX from 'images/svg/components/component_derived_fx_icon.svg'
import Forex from 'images/svg/components/component_forex_icon.svg'
import ETF from 'images/svg/components/component_etf_icon.svg'
import StockIndices from 'images/svg/components/component_stock_indices_icon.svg'

export const marketSectionContent: SmartNavSectionColumns[] = [
    {
        id: 0,
        data: {
            section: [
                {
                    id: 0,
                    data: {
                        aria_label: 'Forex',
                        icon: {
                            src: Forex,
                            alt: 'Forex',
                        },
                        content:
                            '_t_Trade the world’s largest financial market with popular forex pairs._t_',
                        title: '_t_Forex_t_',
                        url: { type: 'internal', to: '/markets/forex/' },
                    },
                },
                {
                    id: 1,
                    data: {
                        aria_label: 'Derived indices',
                        icon: {
                            src: DerivedFX,
                            alt: 'Synthetic indices',
                        },
                        content: ({ is_eu }) => {
                            return is_eu
                                ? '_t_Enjoy trading asset prices derived from simulated markets._t_'
                                : '_t_Enjoy trading asset prices derived from real-world or simulated markets._t_'
                        },
                        title: '_t_Derived indices_t_',
                        url: { type: 'internal', to: '/markets/synthetic/' },
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
                        url: { type: 'internal', to: '/markets/stock/' },
                    },
                },
            ],
            no_divider: true,
            no_title: true,
        },
    },
    {
        id: 1,
        data: {
            section: [
                {
                    id: 3,
                    data: {
                        aria_label: 'Commodities',
                        icon: {
                            src: Commodities,
                            alt: 'Commodities',
                        },
                        content:
                            "_t_Trade natural resources that are central to the world's economy._t_",
                        title: '_t_Commodities_t_',
                        url: { type: 'internal', to: '/markets/commodities/' },
                    },
                },
                {
                    id: 4,
                    data: {
                        aria_label: 'Cryptocurrencies',
                        icon: {
                            src: Cryptocurrencies,
                            alt: 'Cryptocurrencies',
                        },
                        content:
                            '_t_Trade with leverage on the price movement of popular crypto-fiat pairs._t_',
                        title: '_t_Cryptocurrencies_t_',
                        url: { type: 'internal', to: '/markets/cryptocurrencies/' },
                    },
                },
                {
                    id: 3,
                    data: {
                        aria_label: 'Exchange-traded funds (ETFs)',
                        icon: {
                            src: ETF,
                            alt: 'Exchange-traded funds (ETFs)',
                        },
                        content:
                            '_t_Diversify your portfolio and enjoy low-cost intraday trading with ETFs._t_',
                        title: '_t_Exchange-traded funds (ETFs)_t_',
                        url: { type: 'internal', to: '/markets/exchange-traded-funds/' },
                    },
                    visibility: {
                        is_row: true,
                    },
                },
            ],
            no_divider: true,
            no_title: true,
        },
    },
]
