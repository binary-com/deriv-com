import React from 'react'
import { localize, Localize } from 'components/localization'
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
    text: string
    alt: string
}

export const simple_step_content_synthetic = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="Practise" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading synthetics and other markets." />
        ),
        icon: <img src={TradeIcon} alt="Trade" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
        icon: <img src={WithdrawIcon} alt="Withdraw" width="32" height="32" />,
    },
]

const synthetic: Synthetic[] = [
    {
        src: SevenTrading,
        text: localize('24/7 trading, including weekends and public holidays'),
        alt: '24/7 trading',
    },
    {
        src: MarketandRisk,
        text: localize('Free from real-world market and liquidity risks'),
        alt: 'real-world market and liquidity risk',
    },
    {
        src: ResponsiveWebsite,
        text: localize('Responsive, easy-to-use platforms'),
        alt: 'responsive platforms',
    },
    {
        src: ExclusiveTradeType,
        text: localize('Exclusive access to innovative trade types'),
        alt: 'exclusive access to innovative trade types',
    },
    {
        src: FriendlySupport,
        text: localize('Smart and friendly support, 7 days a week'),
        alt: 'support',
    },
]

export default synthetic
