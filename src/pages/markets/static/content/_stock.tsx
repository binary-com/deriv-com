import React from 'react'
import { Localize } from 'components/localization'
import ExtendedTime from 'images/svg/stock-indices/stocks-extented-time.svg'
import FriendlySupport from 'images/svg/markets/forex/smart.svg'
import MinimalCapital from 'images/svg/stock-indices/stocks-minimum-capital.svg'
import ResponsiveWebsite from 'images/svg/markets/forex/platforms.svg'
import WithdrawIcon from 'images/svg/stock-indices/deposit-and-withdrawal-new.svg'

type Stock = {
    src: string
    text: React.ReactNode
    alt: string
}

export const simple_step_content_stock = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading stocks & indices and other markets." />
        ),
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
    },
]

const stocks: Stock[] = [
    {
        src: MinimalCapital,
        alt: 'Low capital',
        text: <Localize translate_text="Minimal capital requirements, limited risk" />,
    },
    {
        src: ExtendedTime,
        alt: 'Time to trade',
        text: <Localize translate_text="Extended trading time, up to 18 hours a day" />,
    },
    {
        src: WithdrawIcon,
        alt: 'Easy deposits and withdrawals',
        text: <Localize translate_text="Fast and secure deposit and withdrawal options" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'Simple trading platforms',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: FriendlySupport,
        alt: 'Smart support team',
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]
export default stocks
