import React, { ReactElement } from 'react'
import { Localize } from 'components/localization'
import Deposit from 'images/svg/markets/deposit-and-withdrawal.svg'
import ExtendedTime from 'images/svg/markets/extended-trading-times.svg'
import FriendlySupport from 'images/svg/markets/friendly-support.svg'
import MinimalCapital from 'images/svg/markets/minimal-capital.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website.svg'

type Stock = {
    src: string
    text: ReactElement
}

const stocks: Stock[] = [
    {
        src: MinimalCapital,
        text: <Localize translate_text="Minimal capital requirements, limited risk" />,
    },
    {
        src: ExtendedTime,
        text: <Localize translate_text="Extended trading time, up to 18 hours a day" />,
    },
    {
        src: Deposit,
        text: <Localize translate_text="Fast and secure deposit and withdrawal options" />,
    },
    {
        src: ResponsiveWebsite,
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: FriendlySupport,
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]
export default stocks
