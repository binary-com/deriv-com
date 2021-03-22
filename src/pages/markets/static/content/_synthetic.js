import React from 'react'
import { Localize } from 'components/localization'
import ExclusiveTradeType from 'images/svg/exclusive-trade-types.svg'
import FriendlySupport from 'images/svg/friendly-support.svg'
import MarketandRisk from 'images/svg/market-and-risk.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import SevenTrading from 'images/svg/seven-trading.svg'

export default [
    {
        src: SevenTrading,
        alt: 'seven trading',
        text: <Localize translate_text="High leverage, tight spreads, and 24/7 trading" />,
    },
    {
        src: MarketandRisk,
        alt: 'market and risk',
        text: <Localize translate_text="Free from real-world market and liquidity risks" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive website',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: ExclusiveTradeType,
        alt: 'exclusive trade types',
        text: <Localize translate_text="Exclusive access to innovative trade types" />,
    },
    {
        src: FriendlySupport,
        alt: 'friendly support',
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]
