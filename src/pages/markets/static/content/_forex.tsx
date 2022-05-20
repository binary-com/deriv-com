import React, { ReactElement } from 'react'
import { Localize } from 'components/localization'
import type { SimpleStepsContent } from 'components/custom/_simple-steps'
import AdvancedCharting from 'images/svg/markets/advanced-charting-widgets-new.svg'
import Deposit from 'images/svg/markets/deposit-and-withdrawal-new.svg'
import FriendlySupport from 'images/svg/markets/friendly-support-new.svg'
import Leverage from 'images/svg/stock-indices/stocks-high-leverage.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website-new.svg'
import PractiseIcon from 'images/svg/markets/aim-new.svg'
import TradeIcon from 'images/svg/markets/trade-new.svg'

export type ForexContentElement = {
    src: string
    alt: string
    text: ReactElement
}

export const simple_step_content_forex: SimpleStepsContent[] = [
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
        icon: <img src={Deposit} alt="" width="32" height="32" />,
    },
]

export const forex_content: ForexContentElement[] = [
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
        src: Deposit,
        alt: 'deposit and withdrawal',
        text: <Localize translate_text="Convenient deposit and withdrawal methods" />,
    },
    {
        src: FriendlySupport,
        alt: 'friendly support',
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]

export const forex_content_eu: ForexContentElement[] = [
    {
        src: Leverage,
        alt: 'leverage',
        text: <Localize translate_text="Tight spreads" />,
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
        src: Deposit,
        alt: 'deposit and withdrawal',
        text: <Localize translate_text="Convenient deposit and withdrawal methods" />,
    },
    {
        src: FriendlySupport,
        alt: 'friendly support',
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]
