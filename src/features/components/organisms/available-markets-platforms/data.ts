// markets icons
import ForexIcon from 'images/svg/home/ts_fx_icon.svg'
import DerivedIndicesIcon from 'images/svg/home/ts_derived_icon.svg'
import CommoditiesIcon from 'images/svg/home/ts_commodities_icon.svg'
import StockIndicesIcon from 'images/svg/home/ts_stocks_icon.svg'
// platforms icons
import DTraderIcon from 'images/svg/custom/rebranding/dtrader-icon.svg'
import SmartTraderIcon from 'images/svg/custom/rebranding/smarttrader-icon.svg'
import DerivBotIcon from 'images/svg/custom/rebranding/deriv-bot-icon.svg'
import { OptionContentAvailability } from 'features/components/templates/options-content/type'

export type AllMarkets = 'forex' | 'derived_indices' | 'commodities' | 'stock_indices'

export type AllOptionsMarket = {
    [key in AllMarkets]: OptionContentAvailability
}

export type AllTradePlatforms = 'deriv_trader' | 'smart_trader' | 'deriv_bot'

export type AllOptionsTradePlatforms = {
    [key in AllTradePlatforms]: OptionContentAvailability
}

export const allOptionsTradePlatforms: AllOptionsTradePlatforms = {
    deriv_bot: {
        icon: {
            src: DerivBotIcon,
            alt: '_t_Deriv Bot_t_',
        },
        link: {
            type: 'internal',
            to: '/dbot/',
        },
        title: '_t_Deriv Bot_t_',
    },
    deriv_trader: {
        icon: {
            src: DTraderIcon,
            alt: '_t_Deriv Trader_t_',
        },
        link: {
            type: 'internal',
            to: '/dtrader/',
        },
        title: '_t_Deriv Trader_t_',
    },
    smart_trader: {
        icon: {
            src: SmartTraderIcon,
            alt: '_t_SmartTrader_t_',
        },
        link: {
            type: 'company',
            url_name: 'smart_trader',
            target: '_blank',
        },
        title: '_t_SmartTrader_t_',
    },
}

export const allOptionsMarkets: AllOptionsMarket = {
    forex: {
        icon: {
            src: ForexIcon,
            alt: '_t_Forex market icon_t_',
        },
        link: {
            type: 'internal',
            to: '/markets/forex/',
        },
        title: '_t_Forex_t_',
    },
    derived_indices: {
        icon: {
            src: DerivedIndicesIcon,
            alt: '_t_Derived indices_t_',
        },
        link: {
            type: 'internal',
            to: '/markets/synthetic/',
        },
        title: '_t_Derived indices_t_',
    },
    commodities: {
        icon: {
            src: CommoditiesIcon,
            alt: '_t_Commodities_t_',
        },
        link: {
            type: 'internal',
            to: '/markets/commodities/',
        },
        title: '_t_Commodities_t_',
    },
    stock_indices: {
        icon: {
            src: StockIndicesIcon,
            alt: '_t_Stock indices_t_',
        },
        link: {
            type: 'internal',
            to: '/markets/stock/',
        },
        title: '_t_Stock & indices_t_',
    },
}
