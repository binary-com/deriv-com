import React, { ReactElement } from 'react'
import { Localize } from 'components/localization'
import Stocks from 'images/svg/stock-indices/stocks-minimum-capital.svg'
import AdvancedCharting from 'images/svg/markets/advanced-charting-widgets-new.svg'
import Leverage from 'images/svg/stock-indices/stocks-high-leverage.svg'
import ResponsiveWebsite from 'images/svg/markets/forex/platforms.svg'
import WithdrawIcon from 'images/svg/markets/deposit-and-withdrawal-new.svg'

export type SimpleStepContentElement = {
    header: ReactElement
    text: ReactElement
    icon: ReactElement
}

export type BasketIndicesContent = {
    src: string
    alt: string
    text: React.ReactNode
    icon?: ReactElement
}

export const simple_step_content_basket = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading forex and other markets." />
        ),
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
    },
]

export const basket_indices_content: BasketIndicesContent[] = [
    {
        src: Stocks,
        alt: 'Currency weight',
        text: <Localize translate_text="Each currency weighted by 20%" />,
    },
    {
        src: Leverage,
        alt: 'Narrow spreads',
        text: <Localize translate_text="High leverage, tight spreads" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'Easy platform',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: AdvancedCharting,
        alt: 'Graphs and charts',
        text: <Localize translate_text="Advanced charting widgets" />,
    },
    {
        src: WithdrawIcon,
        alt: 'Convenient deposits and withdrawals',
        text: <Localize translate_text="Convenient deposit and withdrawal methods" />,
    },
]

export const basket_indices_content_eu: BasketIndicesContent[] = [
    {
        src: Stocks,
        alt: 'Currency weight',
        text: <Localize translate_text="Each currency weighted by 20%" />,
    },
    {
        src: Leverage,
        alt: 'Narrow spreads',
        text: <Localize translate_text="Tight spreads" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'Easy platform',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: AdvancedCharting,
        alt: 'Graphs and charts',
        text: <Localize translate_text="Advanced charting widgets" />,
    },
    {
        src: WithdrawIcon,
        alt: 'Convenient deposits and withdrawals',
        text: <Localize translate_text="Convenient deposit and withdrawal methods" />,
    },
]
