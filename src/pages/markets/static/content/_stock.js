import React from 'react'
import { Localize } from 'components/localization'
import Deposit from 'images/svg/deposit-and-withdrawal.svg'
import ExtendedTime from 'images/svg/extended-trading-times.svg'
import FriendlySupport from 'images/svg/friendly-support.svg'
import MinimalCapital from 'images/svg/minimal-capital.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'

export default [
    {
        src: MinimalCapital,
        alt: 'minimal capital',
        text: <Localize translate_text="Minimal capital requirements, limited risk" />,
    },
    {
        src: ExtendedTime,
        alt: 'extended trading times',
        text: <Localize translate_text="Extended trading time, up to 18 hours a day" />,
    },
    {
        src: Deposit,
        alt: 'deposit and withdrawal',
        text: <Localize translate_text="Fast and secure deposit and withdrawal options" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive website',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: FriendlySupport,
        alt: 'friendly support',
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]
