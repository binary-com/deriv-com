import React from 'react'
import { SimpleStepContentElement } from './_simple_step_content'
import Stocks from 'images/svg/stock-indices/stocks-minimum-capital.svg'
import AdvancedCharting from 'images/svg/markets/advanced-charting-widgets-new.svg'
import Leverage from 'images/svg/stock-indices/stocks-high-leverage.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website-new.svg'
import PractiseIcon from 'images/svg/markets/aim-new.svg'
import TradeIcon from 'images/svg/markets/trade-new.svg'
import WithdrawIcon from 'images/svg/markets/deposit-and-withdrawal-new.svg'
import { TMarketsContent } from 'types/generics'

export const simple_step_content_basket: SimpleStepContentElement[] = [
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
        icon: <img src={WithdrawIcon} alt="Withdraw" width="32" height="32" />,
    },
]

export const basket_indices_content: TMarketsContent[] = [
    {
        src: Stocks,
        alt: 'Currency weight',
        text: '_t_Each currency weighted by 20%_t_',
    },
    {
        src: Leverage,
        alt: 'Narrow spreads',
        text: '_t_High leverage, tight spreads_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: 'Easy platform',
        text: '_t_Responsive, easy-to-use platforms_t_',
    },
    {
        src: AdvancedCharting,
        alt: 'Graphs and charts',
        text: '_t_Advanced charting widgets_t_',
    },
    {
        src: WithdrawIcon,
        alt: 'Convenient deposits and withdrawals',
        text: '_t_Convenient deposit and withdrawal methods_t_',
    },
]

export const basket_indices_content_eu: TMarketsContent[] = [
    {
        src: Stocks,
        alt: 'Currency weight',
        text: '_t_Each currency weighted by 20%_t_',
    },
    {
        src: Leverage,
        alt: 'Narrow spreads',
        text: '_t_Tight spreads_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: 'Easy platform',
        text: '_t_Responsive, easy-to-use platforms_t_',
    },
    {
        src: AdvancedCharting,
        alt: 'Graphs and charts',
        text: '_t_Advanced charting widgets_t_',
    },
    {
        src: WithdrawIcon,
        alt: 'Convenient deposits and withdrawals',
        text: '_t_Convenient deposit and withdrawal methods_t_',
    },
]
