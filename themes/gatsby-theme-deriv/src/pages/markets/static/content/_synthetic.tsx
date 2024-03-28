import { TMarket, TSimpleStepContent } from './_types'
import ExclusiveTradeType from 'images/svg/markets/exclusive-trade-types-another.svg'
import MarketandRisk from 'images/svg/markets/market-and-risk-new.svg'
import SevenTrading from 'images/svg/jump-indices/jump-indices-24-7-trading.svg'
import FriendlySupport from 'images/svg/markets/forex/smart.svg'
import ResponsiveWebsite from 'images/svg/markets/forex/platforms.svg'

export const simple_step_content_synthetic: TSimpleStepContent[] = [
    {
        header: '_t_Practise_t_',
        text: '_t_Open a demo account and practise with an unlimited amount of virtual funds._t_',
    },
    {
        header: '_t_Trade_t_',
        text: '_t_Open a real account, make a deposit, and start trading synthetic indices and other markets._t_',
    },
    {
        header: '_t_Withdraw_t_',
        text: '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
    },
]

const synthetic: TMarket[] = [
    {
        src: SevenTrading,
        alt: '_t_Trading available everyday_t_',
        text: '_t_24/7 trading, including weekends and public holidays_t_',
    },
    {
        src: MarketandRisk,
        alt: '_t_Real world market_t_',
        text: '_t_Free from real-world market and liquidity risks_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: '_t_Easy to use platform_t_',
        text: '_t_Responsive, easy-to-use platforms_t_',
    },
    {
        src: ExclusiveTradeType,
        alt: '_t_Exclusive access_t_',
        text: '_t_Exclusive access to innovative assets_t_',
    },
    {
        src: FriendlySupport,
        alt: '_t_Chat support_t_',
        text: '_t_Smart and friendly support, 7 days a week_t_',
    },
]

export default synthetic
