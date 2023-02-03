import React from 'react'
import { Localize } from 'components/localization'
import ExtendedTime from 'images/svg/stock-indices/stocks-minimum-capital.svg'
import FriendlySupport from 'images/svg/markets/friendly-support-new.svg'
import MinimalCapital from 'images/svg/stock-indices/stocks-extended-time.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-another.svg'
import WithdrawIcon from 'images/svg/markets/deposit-and-withdrawal-new.svg'

type Accumulator = {
    src: string
    text: React.ReactNode
    heading: React.ReactNode
    alt: string
}

const Accumulator: Accumulator[] = [
    {
        src: ExtendedTime,
        alt: 'Low capital',
        heading: <Localize translate_text="Minimal capital requirements, limited risk" />,
        text: <Localize translate_text="Minimal capital requirements, limited risk" />,
    },
    {
        src: MinimalCapital,
        alt: 'Time to trade',
        heading: <Localize translate_text="Minimal capital requirements, limited risk" />,
        text: <Localize translate_text="Extended trading time, up to 18 hours a day" />,
    },
    {
        src: WithdrawIcon,
        alt: 'Easy deposits and withdrawals',
        heading: <Localize translate_text="Minimal capital requirements, limited risk" />,
        text: <Localize translate_text="Fast and secure deposit and withdrawal options" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'Simple trading platforms',
        heading: <Localize translate_text="Minimal capital requirements, limited risk" />,
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: FriendlySupport,
        alt: 'Smart support team',
        heading: <Localize translate_text="Minimal capital requirements, limited risk" />,
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]

export default Accumulator
