import { TMarket, TSimpleStepContent } from './_types'
import Baskets from 'images/svg/stock-indices/baskets.svg'
import AdvancedCharting from 'images/svg/markets/advanced-charting-widgets-new.svg'
import Leverage from 'images/svg/stock-indices/stocks-high-leverage.svg'
import TightSpread from 'images/svg/markets/tight-spread-new.svg'
import ResponsiveWebsite from 'images/svg/markets/forex/platforms.svg'
import WithdrawIcon from 'images/svg/markets/deposit-and-withdrawal-new.svg'

export const simple_step_content_basket: TSimpleStepContent[] = [
    {
        header: '_t_Practise_t_',
        text: '_t_Open a demo account and practise with an unlimited amount of virtual funds._t_',
    },
    {
        header: '_t_Trade_t_',
        text: '_t_Open a real account, make a deposit, and start trading basket indices and other markets._t_',
    },
    {
        header: '_t_Withdraw_t_',
        text: '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
    },
]

export const basket_indices_content: TMarket[] = [
    {
        src: Baskets,
        alt: '_t_Currency weight_t_',
        text: '_t_Each currency weighted by 20%_t_',
    },
    {
        src: TightSpread,
        alt: '_t_Narrow spreads_t_',
        text: '_t_High leverage, tight spreads_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: '_t_Easy platform_t_',
        text: '_t_Responsive, easy-to-use platforms_t_',
    },
    {
        src: AdvancedCharting,
        alt: '_t_Graphs and charts_t_',
        text: '_t_Advanced charting widgets_t_',
    },
    {
        src: WithdrawIcon,
        alt: '_t_Convenient deposits and withdrawals_t_',
        text: '_t_Convenient deposit and withdrawal methods_t_',
    },
]

export const basket_indices_content_eu: TMarket[] = [
    {
        src: Baskets,
        alt: '_t_Currency weight_t_',
        text: '_t_Each currency weighted by 20%_t_',
    },
    {
        src: Leverage,
        alt: '_t_Narrow spreads_t_',
        text: '_t_Tight spreads_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: '_t_Easy platform_t_',
        text: '_t_Responsive, easy-to-use platforms_t_',
    },
    {
        src: AdvancedCharting,
        alt: '_t_Graphs and charts_t_',
        text: '_t_Advanced charting widgets_t_',
    },
    {
        src: WithdrawIcon,
        alt: '_t_Convenient deposits and withdrawals_t_',
        text: '_t_Convenient deposit and withdrawal methods_t_',
    },
]
