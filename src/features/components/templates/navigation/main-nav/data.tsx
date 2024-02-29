import { NavItems } from '../types'
import DerivcTrader from 'images/svg/custom/rebranding/deriv-ctrader-icon.svg'
import BinaryBot from 'images/svg/custom/rebranding/binarybot-icon.svg'
import DerivX from 'images/svg/custom/rebranding/deriv-x-icon.svg'
import CFD from 'images/svg/custom/rebranding/cfds-icon.svg'
import Multipliers from 'images/svg/custom/rebranding/multipliers-icon.svg'
import Options from 'images/svg/custom/rebranding/options-icon.svg'
import Smarttrader from 'images/svg/custom/rebranding/smarttrader-icon.svg'
import DerivGo from 'images/svg/custom/rebranding/deriv-go-icon.svg'
import DMT5 from 'images/svg/custom/rebranding/dmt5-icon.svg'
import DTrader from 'images/svg/custom/rebranding/dtrader-icon.svg'
import DerivBot from 'images/svg/custom/rebranding/deriv-bot-icon.svg'
import Commodities from 'images/svg/custom/rebranding/commodities-icon.svg'
import Cryptocurrencies from 'images/svg/custom/rebranding/cryptocurrencies-icon.svg'
import DerivedFX from 'images/svg/custom/rebranding/derived-fx-icon.svg'
import Forex from 'images/svg/custom/rebranding/forex-icon.svg'
import ETF from 'images/svg/custom/rebranding/etf-icon.svg'
import StockIndices from 'images/svg/custom/rebranding/stock-indices-icon.svg'

export const mainItems: NavItems = [
    {
        id: 0,
        data: {
            title: '_t_Trade_t_',
            type: 'multi-column',
            content: [
                {
                    id: 0,
                    data: {
                        title: '_t_Trade types_t_',
                        section: [
                            {
                                id: 0,
                                data: {
                                    aria_label: 'Deriv Trader',
                                    icon: {
                                        src: DTrader,
                                        alt: 'Dtrader trading platform',
                                    },
                                    content:
                                        '_t_A whole new trading experience on a powerful yet easy to use platform._t_',
                                    title: '_t_Deriv Trader_t_',
                                    url: { type: 'internal', to: '/dtrader/' },
                                },
                                visibility: {
                                    is_eu: true,
                                    is_ppc: false,
                                    is_row: true,
                                },
                            },
                            {
                                id: 1,
                                data: {
                                    aria_label: 'CFDs',
                                    icon: {
                                        src: CFD,
                                        alt: 'CFDs trade type',
                                    },
                                    content:
                                        '_t_Trade with leverage and tight spreads for better returns on successful trades._t_',
                                    title: '_t_CFDs_t_',
                                    url: { type: 'internal', to: '/trade-types/cfds/' },
                                },
                                visibility: {
                                    is_ppc: false,
                                },
                            },
                            {
                                id: 2,
                                data: {
                                    aria_label: 'Options',
                                    icon: {
                                        src: Options,
                                        alt: 'Options trade type',
                                    },
                                    content:
                                        '_t_Earn a range of payouts without risking more than your initial stake._t_',
                                    title: '_t_Options_t_',
                                    url: {
                                        type: 'internal',
                                        to: '/trade-types/options/digital-options/up-and-down/',
                                    },
                                },
                                visibility: {
                                    is_ppc: false,
                                    is_row: true,
                                },
                            },
                            {
                                id: 3,
                                data: {
                                    aria_label: 'Multipliers',
                                    icon: {
                                        src: Multipliers,
                                        alt: 'Multipliers trade type',
                                    },
                                    content:
                                        '_t_Get the upside of CFDs without the downside of losing more than your stake._t_',
                                    title: '_t_Multipliers_t_',
                                    url: { type: 'internal', to: '/trade-types/multiplier/' },
                                },
                                visibility: {
                                    is_ppc: false,
                                },
                            },
                        ],
                    },
                },
                {
                    id: 1,
                    data: {
                        title: '_t_Trading platforms_t_',
                        section: [
                            {
                                id: 0,
                                data: {
                                    aria_label: 'Deriv MT5',
                                    icon: {
                                        src: DMT5,
                                        alt: 'Deriv MT5 trading platform',
                                    },
                                    content:
                                        '_t_Trade on Deriv MT5, the all-in-one CFD trading platform._t_',
                                    title: '_t_Deriv MT5_t_',
                                    url: ({ is_ppc_redirect }) => ({
                                        type: 'internal',
                                        to: is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/',
                                    }),
                                },
                                visibility: {},
                            },
                            {
                                id: 1,
                                data: {
                                    aria_label: 'Derivx',
                                    icon: {
                                        src: DerivX,
                                        alt: 'Deriv X trading paltform',
                                    },
                                    content:
                                        '_t_A highly customisable and easy-to-use CFD trading platform._t_',
                                    title: '_t_Deriv X_t_',
                                    url: { type: 'internal', to: '/derivx/' },
                                },
                                visibility: {
                                    is_row: true,
                                },
                            },
                            {
                                id: 2,
                                data: {
                                    aria_label: 'SmartTrader',
                                    icon: {
                                        src: Smarttrader,
                                        alt: 'SmartTrader trading platform',
                                    },
                                    content:
                                        '_t_Trade the world’s markets with our popular user-friendly platform._t_',
                                    title: '_t_SmartTrader_t_',
                                    url: {
                                        type: 'company',
                                        url_name: 'smart_trader',
                                        target: '_blank',
                                    },
                                },
                                visibility: {
                                    is_row: true,
                                },
                            },
                            {
                                id: 3,
                                data: {
                                    aria_label: 'Deriv Trader',
                                    icon: {
                                        src: DTrader,
                                        alt: 'Deriv trader trading platform',
                                    },
                                    content:
                                        '_t_A whole new trading experience on a powerful yet easy to use platform._t_',
                                    title: '_t_Deriv Trader_t_',
                                    url: { type: 'internal', to: '/dtrader/' },
                                },
                                visibility: {
                                    is_eu: true,
                                },
                            },
                            {
                                id: 4,
                                data: {
                                    aria_label: 'Deriv cTrader',
                                    icon: {
                                        src: DerivcTrader,
                                        alt: 'Deriv cTrader trading platform',
                                    },
                                    content:
                                        '_t_An intuitive, multi-asset CFD trading platform with copy trading and custom indicators._t_',
                                    title: '_t_Deriv cTrader_t_',
                                    url: { type: 'internal', to: '/deriv-ctrader/' },
                                },
                                visibility: {
                                    is_row: true,
                                },
                            },
                        ],
                    },
                },
                {
                    id: 3,
                    data: {
                        section: [
                            {
                                id: 0,
                                data: {
                                    aria_label: 'Dtrader',
                                    icon: {
                                        src: DTrader,
                                        alt: 'Dtrader trading platform',
                                    },
                                    content:
                                        '_t_A whole new trading experience on a powerful yet easy to use platform._t_',
                                    title: '_t_Deriv Trader_t_',
                                    url: { type: 'internal', to: '/dtrader/' },
                                },
                                visibility: {
                                    is_row: true,
                                },
                            },
                            {
                                id: 1,
                                data: {
                                    aria_label: 'Deriv GO',
                                    icon: {
                                        src: DerivGo,
                                        alt: 'Deriv GO mobile trading app',
                                    },
                                    content:
                                        '_t_Trade multipliers on forex, cryptocurrencies, and synthetic indices with our mobile app._t_',
                                    title: '_t_Deriv GO_t_',

                                    url: { type: 'internal', to: '/deriv-go/' },
                                },
                                visibility: {
                                    is_row: true,
                                },
                            },
                            {
                                id: 2,
                                data: {
                                    aria_label: 'Deriv Bot',
                                    icon: {
                                        src: DerivBot,
                                        alt: 'Deriv Bot Automated trading',
                                    },
                                    content:
                                        '_t_Automated trading at your fingertips. No coding needed._t_',
                                    title: '_t_Deriv Bot_t_',

                                    url: { type: 'internal', to: '/dbot/' },
                                },
                                visibility: {
                                    is_row: true,
                                },
                            },
                            {
                                id: 3,
                                data: {
                                    aria_label: 'Binary Bot',
                                    icon: {
                                        src: BinaryBot,
                                        alt: 'Binary bot for creating trading bot',
                                    },
                                    content:
                                        '_t_Our classic "drag-and-drop" tool for creating trading bots, featuring pop-up trading charts, for advanced users._t_',
                                    title: '_t_Binary Bot_t_',
                                    url: {
                                        type: 'company',
                                        url_name: 'binary_bot',
                                        target: '_blank',
                                    },
                                },
                                visibility: {
                                    is_row: true,
                                },
                            },
                        ],
                    },
                    visibility: {
                        is_row: true,
                    },
                },
            ],
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Markets_t_',
            type: 'multi-column',
            content: [
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
                                    url: {
                                        type: 'internal',
                                        to: '/markets/exchange-traded-funds/',
                                    },
                                },
                            },
                        ],
                        no_divider: true,
                        no_title: true,
                    },
                },
            ],
        },
    },
    {
        id: 2,
        data: {
            title: '_t_About us_t_',
            type: 'single-column',
            content: [
                {
                    id: 0,
                    data: {
                        title: '_t_Who we are_t_',
                        url: { type: 'internal', to: '/who-we-are/' },
                    },
                },
                {
                    id: 1,
                    data: {
                        title: '_t_Regulatory information_t_',
                        url: { type: 'internal', to: '/regulatory/' },
                    },
                },
                {
                    id: 2,
                    data: {
                        title: '_t_Why choose us_t_',
                        url: { type: 'internal', to: '/why-choose-us/' },
                    },
                },
                {
                    id: 3,
                    data: {
                        title: '_t_Partnership programmes_t_',
                        url: { type: 'internal', to: '/partners/' },
                    },
                },
                {
                    id: 4,
                    data: {
                        title: '_t_Contact us_t_',
                        url: { type: 'internal', to: '/contact_us/' },
                    },
                },
                {
                    id: 5,
                    data: {
                        title: '_t_Careers_t_',
                        url: { type: 'internal', to: '/careers/' },
                    },
                },
                {
                    id: 6,
                    data: {
                        url: { type: 'company', url_name: 'derivlife', target: '_blank' },
                        title: '_t_Deriv life_t_',
                    },
                },
            ],
        },
        visibility: {
            is_mobile: false,
        },
    },
    {
        id: 3,
        data: {
            title: '_t_Resources_t_',
            type: 'single-column',
            content: [
                {
                    id: 0,
                    data: {
                        title: '_t_Help centre_t_',
                        url: { type: 'internal', to: '/help-centre/' },
                    },
                },
                {
                    id: 1,
                    data: {
                        title: '_t_Community_t_',
                        url: { type: 'company', url_name: 'community', target: '_blank' },
                    },
                },
                {
                    id: 2,
                    data: {
                        title: '_t_Traders’ tools_t_',
                        url: { type: 'internal', to: '/trader-tools/' },
                    },
                },
                {
                    id: 3,
                    data: {
                        title: '_t_Payment methods_t_',
                        url: { type: 'internal', to: '/payment-methods/' },
                    },
                },
                {
                    id: 4,
                    data: {
                        title: '_t_Deriv MT5 Signals_t_',
                        url: { type: 'internal', to: '/dmt5-trading-signals/#signal-subscriber/' },
                    },
                },
                {
                    id: 5,
                    data: {
                        title: '_t_Status page_t_',
                        url: {
                            type: 'non-company',
                            href: 'https://deriv.statuspage.io',
                            show_eu_modal: true,
                        },
                    },
                    visibility: {
                        is_mobile: true,
                    },
                },
                {
                    id: 6,
                    data: {
                        title: '_t_Deriv Blog_t_',
                        url: { type: 'company', url_name: 'blog', target: '_blank' },
                    },
                },
            ],
        },
    },
    {
        id: 4,
        data: {
            title: '_t_Legal_t_',
            type: 'single-column',
            content: [
                {
                    id: 0,
                    data: {
                        title: '_t_Regulatory information_t_',
                        url: { type: 'internal', to: '/regulatory/' },
                    },
                },
                {
                    id: 1,
                    data: {
                        title: '_t_Terms and conditions_t_',
                        url: { type: 'internal', to: '/terms-and-conditions/#clients' },
                    },
                },
                {
                    id: 2,
                    data: {
                        title: '_t_Secure and responsible trading_t_',
                        url: { type: 'internal', to: '/responsible/' },
                    },
                },
            ],
        },
        visibility: {
            is_mobile: true,
        },
    },
    {
        id: 5,
        data: {
            title: '_t_Partners_t_',
            type: 'single-column',
            content: [
                {
                    id: 0,
                    data: {
                        title: '_t_Deriv Prime_t_',
                        url: { type: 'internal', to: '/partners/deriv-prime/' },
                    },
                },
                {
                    id: 1,
                    data: {
                        title: '_t_Affiliates and IBs_t_',
                        url: { type: 'internal', to: '/partners/affiliate-ib/' },
                    },
                    visibility: {
                        is_row: true,
                    },
                },
                {
                    id: 2,
                    data: {
                        title: '_t_Affiliates_t_',
                        url: { type: 'internal', to: '/partners/affiliate-ib/' },
                    },
                    visibility: {
                        is_eu: true,
                    },
                },
                {
                    id: 3,
                    data: {
                        title: '_t_Payment agents_t_',
                        url: { type: 'internal', to: '/partners/payment-agent/' },
                    },
                    visibility: {
                        is_row: true,
                    },
                },
                {
                    id: 4,
                    data: {
                        title: '_t_API_t_',
                        url: { type: 'company', url_name: 'api', target: '_blank' },
                    },
                },
            ],
        },
        visibility: {
            is_mobile: true,
        },
    },
]
