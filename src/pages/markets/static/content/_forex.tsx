import { TMarket, TSimpleStepContent } from './_types'
import AdvancedCharting from 'images/svg/markets/forex/charting.svg'
import Deposit from 'images/svg/markets/forex/deposit.svg'
import FriendlySupport from 'images/svg/markets/forex/smart.svg'
import Leverage from 'images/svg/markets/forex/spread.svg'
import ResponsiveWebsite from 'images/svg/markets/forex/platforms.svg'

export const simple_step_content_forex: TSimpleStepContent[] = [
    {
        header: '_t_Practise_t_',
        text: '_t_Open a demo account and practise with an unlimited amount of virtual funds._t_',
    },
    {
        header: '_t_Trade_t_',
        text: '_t_Open a real account, make a deposit, and start trading forex and other markets._t_',
    },
    {
        header: '_t_Withdraw_t_',
        text: '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
    },
]

export const simple_step_derived_fx: TSimpleStepContent[] = [
    {
        header: '_t_Practise_t_',
        text: '_t_Open a demo account and practise with an unlimited amount of virtual funds._t_',
    },
    {
        header: '_t_Trade_t_',
        text: '_t_Open a real account, make a deposit, and start trading derived FX and other markets._t_',
    },
    {
        header: '_t_Withdraw_t_',
        text: '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
    },
]

export const forex_content: TMarket[] = [
    {
        src: Leverage,
        alt: '_t_High and low_t_',
        text: '_t_High leverage, tight forex spreads_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: '_t_Responsive platforms_t_',
        text: '_t_Responsive, easy-to-use online trading platforms_t_',
    },
    {
        src: AdvancedCharting,
        alt: '_t_Charts_t_',
        text: '_t_Advanced charting widgets_t_',
    },
    {
        src: Deposit,
        alt: '_t_Deposits and withdrawals method_t_',
        text: '_t_Convenient deposit and withdrawal methods_t_',
    },
    {
        src: FriendlySupport,
        alt: '_t_Friendly support team_t_',
        text: '_t_Smart and friendly support, 7 days a week_t_',
    },
]

export const forex_content_eu: TMarket[] = [
    {
        src: Leverage,
        alt: '_t_High and low_t_',
        text: '_t_Tight spreads_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: '_t_Responsive platforms_t_',
        text: '_t_Responsive, easy-to-use platforms_t_',
    },
    {
        src: AdvancedCharting,
        alt: '_t_Charts_t_',
        text: '_t_Advanced charting widgets_t_',
    },
    {
        src: Deposit,
        alt: '_t_Deposits and withdrawals method_t_',
        text: '_t_Convenient deposit and withdrawal methods_t_',
    },
    {
        src: FriendlySupport,
        alt: '_t_Friendly support team_t_',
        text: '_t_Smart and friendly support, 7 days a week_t_',
    },
]
