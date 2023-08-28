import { StartTradingType } from 'features/components/templates/start-trading'
import { WhyTradeOptionsType } from 'features/components/templates/why-trade-options'
import FlexibleLayoutIcon from 'images/svg/trade-types/options/options-images/why_trade_options/flexiable_layout.svg'
import AllFavoriteIcon from 'images/svg/trade-types/options/options-images/why_trade_options/all_you_ favorite_markets.svg'
import InstantAccessIcon from 'images/svg/trade-types/options/options-images/why_trade_options/Instant_access.svg'
import AdvancedChartingWidgetsIcon from 'images/svg/trade-types/options/options-images/why_trade_options/advanced_charting_widgets.svg'
import FlexibleTradeTypesIcon from 'images/svg/trade-types/options/options-images/why_trade_options/flexiable_trade_types.svg'

export const start_trading_data: StartTradingType = {
    heading: '_t_Start trading options on Deriv_t_',
    button: {
        text: '_t_Create free demo account_t_',
        url: {
            type: 'internal',
            to: '/signup',
        },
    },
    items: [
        {
            heading: '_t_Practise_t_',
            description:
                '_t_Open a demo account and get unlimited virtual funds to practise on our platforms — Deriv Trader, SmartTrader, and Deriv Bot._t_',
        },
        {
            heading: '_t_Trade_t_',
            description:
                '_t_Open a real account, make a deposit, and start trading options for real._t_',
        },
        {
            heading: '_t_Withdraw_t_',
            description:
                '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
        },
    ],
}

export const why_trade_options_data: WhyTradeOptionsType = {
    heading: '_t_Why trade options on Deriv_t_',
    heading2: "_t_Don't have a Deriv account yet?_t_",
    button: {
        text: '_t_Create free demo account_t_',
        url: {
            type: 'internal',
            to: '/signup',
        },
    },
    items: [
        {
            heading: '_t_Flexible payout options_t_',
            description:
                '_t_Know your potential profit with fixed payouts, or maximise potential profit with variable payouts if your predictions are right._t_',
            icon_src: FlexibleLayoutIcon,
        },
        {
            heading: '_t_All favorite markets and more_t_',
            description:
                '_t_Trade on all popular markets plus our proprietary synthetics that are available 24/7._t_',
            icon_src: AllFavoriteIcon,
        },
        {
            heading: '_t_Instant access_t_',
            description:
                '_t_Open an account now and gain access to the world of trading. No need to wait — you can begin trading in minutes._t_',
            icon_src: InstantAccessIcon,
        },
        {
            heading: '_t_User-friendly platforms with powerful chart widgets_t_',
            description:
                '_t_Trade on secure, intuitive, and easy to use platforms with powerful chart technology._t_',
            icon_src: AdvancedChartingWidgetsIcon,
        },
        {
            heading: '_t_Flexible trade types with minimal capital requirements_t_',
            description:
                '_t_Deposit as little as 5 USD to start trading and customise your trades to suit your strategy._t_',
            icon_src: FlexibleTradeTypesIcon,
        },
    ],
}
