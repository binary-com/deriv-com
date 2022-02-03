import React, { ReactElement } from 'react'
import { Localize } from 'components/localization'
import ExclusiveTradeType from 'images/svg/markets/exclusive-trade-types.svg'
import FriendlySupport from 'images/svg/markets/friendly-support.svg'
import MarketandRisk from 'images/svg/markets/market-and-risk.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website.svg'
import SevenTrading from 'images/svg/markets/seven-trading.svg'

type Synthetic = {
    src: string
    text: ReactElement
}
const synthetic: Synthetic[] = [
    {
        src: SevenTrading,
        text: <Localize translate_text="24/7 trading, including weekends and public holidays" />,
    },
    {
        src: MarketandRisk,
        text: <Localize translate_text="Free from real-world market and liquidity risks" />,
    },
    {
        src: ResponsiveWebsite,
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: ExclusiveTradeType,
        text: <Localize translate_text="Exclusive access to innovative trade types" />,
    },
    {
        src: FriendlySupport,
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]
export default synthetic
