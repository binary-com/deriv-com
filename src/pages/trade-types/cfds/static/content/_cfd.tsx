import React from 'react'
import { Localize } from 'components/localization'
import ExtendedTime from 'images/svg/stock-indices/stocks-minimum-capital.svg'
import FriendlySupport from 'images/svg/markets/friendly-support-new.svg'
import MinimalCapital from 'images/svg/stock-indices/stocks-extended-time.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-another.svg'
import WithdrawIcon from 'images/svg/markets/deposit-and-withdrawal-new.svg'

type cfd_content = {
    src: string
    text: React.ReactNode
    item_title: React.ReactNode
    alt: string
}

export const cfd_content: cfd_content[] = [
    {
        src: ExtendedTime,
        alt: 'Low capital',
        item_title: <Localize translate_text="Minimal capital" />,
        text: <Localize translate_text="Minimal capital requirements, limited risk" />,
    },
    {
        src: MinimalCapital,
        alt: 'Time to trade',
        item_title: <Localize translate_text="Requirements, limited risk" />,
        text: <Localize translate_text="Extended trading time, up to 18 hours a day" />,
    },
    {
        src: WithdrawIcon,
        alt: 'Easy deposits and withdrawals',
        item_title: <Localize translate_text="Limited risk" />,
        text: <Localize translate_text="Fast and secure deposit and withdrawal options" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'Simple trading platforms',
        item_title: <Localize translate_text="Minimal risk" />,
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: FriendlySupport,
        alt: 'Smart support team',
        item_title: <Localize translate_text="Capital risk" />,
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]
