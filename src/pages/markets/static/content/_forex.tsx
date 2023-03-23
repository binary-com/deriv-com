import React from 'react'
import { SimpleStepContentElement } from './_simple_step_content'
import AdvancedCharting from 'images/svg/markets/advanced-charting-widgets-new.svg'
import Deposit from 'images/svg/markets/deposit-and-withdrawal-new.svg'
import FriendlySupport from 'images/svg/markets/friendly-support-new.svg'
import Leverage from 'images/svg/stock-indices/stocks-high-leverage.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website-new.svg'
import PractiseIcon from 'images/svg/markets/aim-new.svg'
import TradeIcon from 'images/svg/markets/trade-new.svg'
import { TMarketsContent } from 'types/generics'

export const simple_step_content_forex: SimpleStepContentElement[] = [
    {
        header: '_t_Practise_t_',
        text: '_t_Open a demo account and practise with an unlimited amount of virtual funds._t_',
        icon: <img src={PractiseIcon} alt="Practise" width="32" height="32" />,
    },
    {
        header: '_t_Trade_t_',
        text: '_t_Open a real account, make a deposit, and start trading forex and other markets._t_',
        icon: <img src={TradeIcon} alt="Trade" width="32" height="28" />,
    },
    {
        header: '_t_Withdraw_t_',
        text: '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
        icon: <img src={Deposit} alt="Withdraw" width="32" height="32" />,
    },
]

export const forex_content: TMarketsContent[] = [
    {
        src: Leverage,
        alt: 'High and low',
        text: '_t_High leverage, tight forex spreads_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: 'Responsive platforms',
        text: '_t_Responsive, easy-to-use online trading platforms_t_',
    },
    {
        src: AdvancedCharting,
        alt: 'Charts',
        text: '_t_Advanced charting widgets_t_',
    },
    {
        src: Deposit,
        alt: 'Deposits and withdrawals method',
        text: '_t_Convenient deposit and withdrawal methods_t_',
    },
    {
        src: FriendlySupport,
        alt: 'Friendly support team',
        text: '_t_Smart and friendly support, 7 days a week_t_',
    },
]

export const forex_content_eu: TMarketsContent[] = [
    {
        src: Leverage,
        alt: 'High and low',
        text: '_t_Tight spreads_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: 'Responsive platforms',
        text: '_t_Responsive, easy-to-use platforms_t_',
    },
    {
        src: AdvancedCharting,
        alt: 'Charts',
        text: '_t_Advanced charting widgets_t_',
    },
    {
        src: Deposit,
        alt: 'Deposits and withdrawals method',
        text: '_t_Convenient deposit and withdrawal methods_t_',
    },
    {
        src: FriendlySupport,
        alt: 'Friendly support team',
        text: '_t_Smart and friendly support, 7 days a week_t_',
    },
]
