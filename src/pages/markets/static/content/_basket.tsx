import React, { ReactElement } from 'react'
import { Localize } from 'components/localization'
import Stocks from 'images/svg/stock-indices/stocks-minimum-capital.svg'
import AdvancedCharting from 'images/svg/markets/advanced-charting-widgets-new.svg'
import Leverage from 'images/svg/stock-indices/stocks-high-leverage.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website-new.svg'
import PractiseIcon from 'images/svg/markets/aim-new.svg'
import TradeIcon from 'images/svg/markets/trade-new.svg'
import WithdrawIcon from 'images/svg/markets/deposit-and-withdrawal-new.svg'

export type SimpleStepContentElement = {
    header: ReactElement
    text: ReactElement
    icon: ReactElement
}

export type BasketIndicesContent = {
    src: string
    alt: string
    text: ReactElement
}

export const simple_step_content_basket: SimpleStepContentElement[] = [
    {
        header: <Localize translate_text="_t_Practise_t_" />,
        text: (
            <Localize translate_text="_t_Open a demo account and practise with an unlimited amount of virtual funds._t_" />
        ),
        icon: <img src={PractiseIcon} alt="" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="_t_Trade_t_" />,
        text: (
            <Localize translate_text="_t_Open a real account, make a deposit, and start trading forex and other markets._t_" />
        ),
        icon: <img src={TradeIcon} alt="" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="_t_Withdraw_t_" />,
        text: (
            <Localize translate_text="_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_" />
        ),
        icon: <img src={WithdrawIcon} alt="" width="32" height="32" />,
    },
]

export const basket_indices_content: BasketIndicesContent[] = [
    {
        src: Stocks,
        alt: 'currency weighted by 20%',
        text: <Localize translate_text="_t_Each currency weighted by 20%_t_" />,
    },
    {
        src: Leverage,
        alt: 'leverage',
        text: <Localize translate_text="_t_High leverage, tight spreads_t_" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive website',
        text: <Localize translate_text="_t_Responsive, easy-to-use platforms_t_" />,
    },
    {
        src: AdvancedCharting,
        alt: 'advanced charting widgets',
        text: <Localize translate_text="_t_Advanced charting widgets_t_" />,
    },
    {
        src: WithdrawIcon,
        alt: 'deposit and withdrawal',
        text: <Localize translate_text="_t_Convenient deposit and withdrawal methods_t_" />,
    },
]

export const basket_indices_content_eu: BasketIndicesContent[] = [
    {
        src: Stocks,
        alt: 'currency weighted by 20%',
        text: <Localize translate_text="_t_Each currency weighted by 20%_t_" />,
    },
    {
        src: Leverage,
        alt: 'leverage',
        text: <Localize translate_text="_t_Tight spreads_t_" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive website',
        text: <Localize translate_text="_t_Responsive, easy-to-use platforms _t_" />,
    },
    {
        src: AdvancedCharting,
        alt: 'advanced charting widgets',
        text: <Localize translate_text="_t_Advanced charting widgets_t_" />,
    },
    {
        src: WithdrawIcon,
        alt: 'deposit and withdrawal',
        text: <Localize translate_text="_t_Convenient deposit and withdrawal methods_t_" />,
    },
]
