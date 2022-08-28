import React, { ReactElement } from 'react'
import { Localize } from 'components/localization'
import type { SimpleStepsContent } from 'components/custom/_simple-steps'
import ExclusiveTradeType from 'images/svg/markets/exclusive-trade-types-another.svg'
import FriendlySupport from 'images/svg/markets/friendly-support-new.svg'
import MarketandRisk from 'images/svg/markets/market-and-risk-new.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website-new.svg'
import SevenTrading from 'images/svg/jump-indices/jump-indices-24-7-trading.svg'
import PractiseIcon from 'images/svg/markets/aim-new.svg'
import TradeIcon from 'images/svg/markets/trade-new.svg'
import WithdrawIcon from 'images/svg/markets/deposit-and-withdrawal-new.svg'

type Synthetic = {
    src: string
    text: ReactElement
}

export const simple_step_content_synthetic: SimpleStepsContent[] = [
    {
        header: <Localize translate_text="_t_Practise_t_" />,
        text: (
            <Localize translate_text="_t_Open a demo account and practise with an unlimited amount of virtual funds._t_" />
        ),
        icon: <img src={PractiseIcon} alt="" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="_t_Trade_t_" />,
        text: (
            <Localize translate_text="_t_Open a real account, make a deposit, and start trading synthetic indices and other markets._t_" />
        ),
        icon: <img src={TradeIcon} alt="" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="_t_Withdraw_t_" />,
        text: (
            <Localize translate_text="_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_" />
        ),
        icon: <img src={WithdrawIcon} alt="" width="32" height="32" />,
    },
]

const synthetic: Synthetic[] = [
    {
        src: SevenTrading,
        text: <Localize translate_text="_t_24/7 trading, including weekends and public holidays_t_" />,
    },
    {
        src: MarketandRisk,
        text: <Localize translate_text="_t_Free from real-world market and liquidity risks_t_" />,
    },
    {
        src: ResponsiveWebsite,
        text: <Localize translate_text="_t_Responsive, easy-to-use platforms_t_" />,
    },
    {
        src: ExclusiveTradeType,
        text: <Localize translate_text="_t_Exclusive access to innovative trade types_t_" />,
    },
    {
        src: FriendlySupport,
        text: <Localize translate_text="_t_Smart and friendly support, 7 days a week_t_" />,
    },
]

export default synthetic
