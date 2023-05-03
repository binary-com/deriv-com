import { SmartNavContent, SmartNavSectionColumns } from '../../../types'
import BinaryBot from 'images/svg/custom/rebranding/binarybot-icon.svg'
import DerivX from 'images/svg/custom/rebranding/deriv-x-icon.svg'
import CFD from 'images/svg/custom/rebranding/cfds-icon.svg'
import Multipliers from 'images/svg/custom/rebranding/multipliers-icon.svg'
import Options from 'images/svg/custom/rebranding/options-icon.svg'
import Smarttrader from 'images/svg/custom/rebranding/smarttrader-icon.svg'
import DerivGo from 'images/svg/custom/rebranding/deriv-go-icon.svg'
import DMT5 from 'images/svg/custom/rebranding/dmt5-icon.svg'
import DTrader from 'images/svg/custom/rebranding/dtrader-icon.svg'
import DerivEZ from 'images/svg/custom/rebranding/deriv-ez-icon.svg'
import DerivBot from 'images/svg/custom/rebranding/deriv-bot-icon.svg'

export const tradeTypesContent: SmartNavContent[] = [
    {
        id: 0,
        data: {
            aria_label: 'Deriv Trader',
            icon: {
                src: DTrader,
                alt: 'Dtrader trading platform',
            },
            content: '_t_A whole new trading experience on a powerful yet easy to use platform._t_',
            title: '_t_deriv Trader_t_',
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
            content: '_t_Earn a range of payouts without risking more than your initial stake._t_',
            title: '_t_Options_t_',
            url: { type: 'internal', to: '/trade-types/options/' },
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
]

export const tradingPlatformsContent: SmartNavContent[] = [
    {
        id: 0,
        data: {
            aria_label: 'Deriv MT5',
            icon: {
                src: DMT5,
                alt: 'Deriv MT5 trading platform',
            },
            content: '_t_Trade on Deriv MT5, the all-in-one CFD trading platform._t_',
            title: '_t_deriv MT5_t_',
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
            content: '_t_A highly customisable and easy-to-use CFD trading platform._t_',
            title: '_t_deriv X_t_',
            url: { type: 'internal', to: '/derivx/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 2,
        data: {
            aria_label: 'Derivez',
            icon: {
                src: DerivEZ,
                alt: 'Deriv EZ trading paltform',
            },
            content:
                '_t_Trade on global markets from anywhere with our mobile-first CFD trading platform._t_',
            title: '_t_deriv EZ_t_',
            url: { type: 'internal', to: '/derivez/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 3,
        data: {
            aria_label: 'SmartTrader',
            icon: {
                src: Smarttrader,
                alt: 'SmartTrader trading platform',
            },
            content: '_t_Trade the world’s markets with our popular user-friendly platform._t_',
            title: '_t_SmartTrader_t_',
            url: { type: 'company', url_name: 'smart_trader', target: '_blank' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 4,
        data: {
            aria_label: 'Deriv Trader',
            icon: {
                src: DTrader,
                alt: 'Deriv trader trading platform',
            },
            content: '_t_A whole new trading experience on a powerful yet easy to use platform._t_',
            title: '_t_deriv Trader_t_',
            url: { type: 'internal', to: '/dtrader/' },
        },
        visibility: {
            is_eu: true,
        },
    },
]

export const noTitleSection: SmartNavContent[] = [
    {
        id: 0,
        data: {
            aria_label: 'Dtrader',
            icon: {
                src: DTrader,
                alt: 'Dtrader trading platform',
            },
            content: '_t_A whole new trading experience on a powerful yet easy to use platform._t_',
            title: '_t_deriv Trader_t_',
            url: { type: 'internal', to: '/dtrader/' },
        },
        visibility: {
            is_row: true,
        },
    },
    {
        id: 1,
        data: {
            aria_label: 'deriv GO',
            icon: {
                src: DerivGo,
                alt: 'Deriv GO mobile trading app',
            },
            content:
                '_t_Trade multipliers on forex, cryptocurrencies, and synthetic indices with our mobile app._t_',
            title: '_t_deriv GO_t_',

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
            content: '_t_Automated trading at your fingertips. No coding needed._t_',
            title: '_t_deriv Bot_t_',

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
            url: { type: 'company', url_name: 'binary_bot', target: '_blank' },
        },
        visibility: {
            is_row: true,
        },
    },
]

export const trade_nav_section_items: SmartNavSectionColumns[] = [
    {
        id: 0,
        data: {
            title: '_t_Trade types_t_',
            section: tradeTypesContent,
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Trading platforms_t_',
            section: tradingPlatformsContent,
        },
    },
    {
        id: 3,
        data: {
            section: noTitleSection,
        },
        visibility: {
            is_row: true,
        },
    },
]
