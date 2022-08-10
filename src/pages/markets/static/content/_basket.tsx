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
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading forex and other markets." />
        ),
        icon: <img src={TradeIcon} alt="" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
        icon: <img src={WithdrawIcon} alt="" width="32" height="32" />,
    },
]

export const basket_indices_content: BasketIndicesContent[] = [
    {
        src: Stocks,
        alt: 'currency weighted by 20%',
        text: <Localize translate_text="Each currency weighted by 20%" />,
    },
    {
        src: Leverage,
        alt: 'leverage',
        text: <Localize translate_text="High leverage, tight spreads" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive website',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: AdvancedCharting,
        alt: 'advanced charting widgets',
        text: <Localize translate_text="Advanced charting widgets" />,
    },
    {
        src: WithdrawIcon,
        alt: 'deposit and withdrawal',
        text: <Localize translate_text="Convenient deposit and withdrawal methods" />,
    },
]

export const basket_indices_content_eu: BasketIndicesContent[] = [
    {
        src: Stocks,
        alt: 'currency weighted by 20%',
        text: <Localize translate_text="Each currency weighted by 20%" />,
    },
    {
        src: Leverage,
        alt: 'leverage',
        text: <Localize translate_text="Tight spreads" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive website',
        text: <Localize translate_text="Responsive, easy-to-use platforms " />,
    },
    {
        src: AdvancedCharting,
        alt: 'advanced charting widgets',
        text: <Localize translate_text="Advanced charting widgets" />,
    },
    {
        src: WithdrawIcon,
        alt: 'deposit and withdrawal',
        text: <Localize translate_text="Convenient deposit and withdrawal methods" />,
    },
]
