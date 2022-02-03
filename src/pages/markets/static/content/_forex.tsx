import React, { ReactElement } from 'react'
import { Localize } from 'components/localization'
import AdvancedCharting from 'images/svg/markets/advanced-charting-widgets.svg'
import Deposit from 'images/svg/markets/deposit-and-withdrawal.svg'
import FriendlySupport from 'images/svg/markets/friendly-support.svg'
import Leverage from 'images/svg/markets/leverage.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website.svg'

export type ForexContentContent = {
    src: string
    alt: string
    text: ReactElement
}

export const forex_content: ForexContentContent[] = [
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

export const forex_content_eu: ForexContentContent[] = [
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
