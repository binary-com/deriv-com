import React from 'react'
import { Localize } from 'components/localization'
import StraightForward from 'images/svg/options/straightforward.svg'
import Significant from 'images/svg/options/significant.svg'
import LowCapital from 'images/svg/options/low_capital.svg'
import RiskManagement from 'images/svg/options/risk_management.svg'
import TradeSmartly from 'images/svg/options/trade_smartly.svg'

type AccumulatorContentProps = {
    src: string
    alt: string
    item_title: React.ReactNode
    text: React.ReactNode
}

const accumulator_content: AccumulatorContentProps[] = [
    {
        src: StraightForward,
        alt: 'Low',
        item_title: <Localize translate_text="Straightforward trading" />,
        text: (
            <Localize translate_text="Define your stake amount, choose your accumulator value, and start trading." />
        ),
    },
    {
        src: Significant,
        alt: 'Low',
        item_title: <Localize translate_text="Significant profit potential" />,
        text: (
            <Localize translate_text="Your payout can potentially grow by 1% or 5% on average per tick." />
        ),
    },
    {
        src: LowCapital,
        alt: 'Low',
        item_title: <Localize translate_text="Low capital requirement" />,
        text: <Localize translate_text="You can open a position for as low as 1 USD." />,
    },
    {
        src: RiskManagement,
        alt: 'Low',
        item_title: <Localize translate_text="Risk management" />,
        text: (
            <Localize translate_text="You can set a take profit/payout level. When this level is reached, your contract will be automatically closed." />
        ),
    },
    {
        src: TradeSmartly,
        alt: 'Low',
        item_title: <Localize translate_text="Trade smartly" />,
        text: (
            <Localize translate_text="Tick counters are available between consecutive barrier crosses to help you make smart trading decisions." />
        ),
    },
]

export default accumulator_content
