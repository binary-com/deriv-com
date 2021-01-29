import React from 'react'
import { Localize } from 'components/localization'
import AdvancedCharting from 'images/svg/advanced-charting-widgets.svg'
import Deposit from 'images/svg/deposit-and-withdrawal.svg'
import FriendlySupport from 'images/svg/friendly-support.svg'
import Leverage from 'images/svg/leverage.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'

export default [
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
