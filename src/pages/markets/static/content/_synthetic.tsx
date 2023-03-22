import React from 'react'
import { Localize } from 'components/localization'
import ExclusiveTradeType from 'images/svg/markets/exclusive-trade-types-another.svg'
import MarketandRisk from 'images/svg/markets/market-and-risk-new.svg'
import SevenTrading from 'images/svg/jump-indices/jump-indices-24-7-trading.svg'
import FriendlySupport from 'images/svg/markets/forex/smart.svg'
import ResponsiveWebsite from 'images/svg/markets/forex/platforms.svg'

type Synthetic = {
    src: string
    text: React.ReactNode
    alt: string
}

export const simple_step_content_synthetic = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading synthetics and other markets." />
        ),
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
    },
]

const synthetic: Synthetic[] = [
    {
        src: SevenTrading,
        alt: 'Trading available everyday',
        text: <Localize translate_text="24/7 trading, including weekends and public holidays" />,
    },
    {
        src: MarketandRisk,
        alt: 'Real world market',
        text: <Localize translate_text="Free from real-world market and liquidity risks" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'Easy to use platform',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: ExclusiveTradeType,
        alt: 'Exclusive access',
        text: <Localize translate_text="Exclusive access to innovative assets" />,
    },
    {
        src: FriendlySupport,
        alt: 'Chat support',
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]

export default synthetic
