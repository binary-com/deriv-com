import React from 'react'
import { Localize } from 'components/localization'
import FriendlySupport from 'images/svg/markets/forex/smart.svg'
import Leverage from 'images/svg/markets/forex/spread.svg'
import ResponsiveWebsite from 'images/svg/markets/forex/platforms.svg'
import Deposit from 'images/svg/markets/forex/deposit.svg'

type cfd_content = {
    src: string
    text: React.ReactNode
    item_title: React.ReactNode
    alt: string
}

export const cfd_content: cfd_content[] = [
    {
        src: Deposit,
        alt: 'High leverage, tight spreads',
        item_title: <Localize translate_text="High leverage, tight spreads" />,
        text: (
            <Localize translate_text="Take advantage of high leverage and tight spreads on Deriv’s CFD trading platforms." />
        ),
    },
    {
        src: Leverage,
        alt: 'All your favourite markets',
        item_title: <Localize translate_text="All your favourite markets" />,
        text: (
            <Localize translate_text="Trade on financial markets plus our proprietary synthetics that are available 24/7." />
        ),
    },
    {
        src: Deposit,
        alt: 'Easy deposits and withdrawals',
        item_title: <Localize translate_text="Go long or short" />,
        text: (
            <Localize translate_text="Open long or short positions based on your predictions of the market price movements." />
        ),
    },
    {
        src: ResponsiveWebsite,
        alt: 'Expert and friendly support',
        item_title: <Localize translate_text="Expert and friendly support" />,
        text: <Localize translate_text="Get expert, friendly support when you need it." />,
    },
    {
        src: FriendlySupport,
        alt: 'Instant access',
        item_title: <Localize translate_text="Instant access" />,
        text: <Localize translate_text="Open an account and start trading in minutes." />,
    },
]
