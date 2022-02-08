import React, { ReactElement } from 'react'
import { Localize } from 'components/localization'
import TightSpread from 'images/svg/markets/tight-spread.svg'
import CryptoPairs from 'images/svg/markets/crypto-pairs.svg'
import ZeroCommission from 'images/svg/markets/zero-commission.svg'
import Leverage from 'images/svg/markets/leverage.svg'
import type { SimpleStepsContent } from 'components/custom/_simple-steps'
import PractiseIcon from 'images/svg/markets/aim.svg'
import TradeIcon from 'images/svg/markets/trade.svg'
import WithdrawIcon from 'images/svg/markets/withdraw.svg'

export type CryptocurrenciesContent = {
    src: string
    alt: string
    text: ReactElement
}

export const simple_step_content_cryptocurrencies: SimpleStepsContent[] = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading commodities and other markets. " />
        ),
        icon: <img src={TradeIcon} alt="" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
        icon: <img src={WithdrawIcon} alt="" width="32" height="32" />,
    },
]
const cryptocurrencies: CryptocurrenciesContent[] = [
    {
        src: Leverage,
        alt: 'leverage',
        text: <Localize translate_text="1:50 leverage" />,
    },
    {
        src: TightSpread,
        alt: 'responsive website',
        text: <Localize translate_text="Tight spreads" />,
    },
    {
        src: CryptoPairs,
        alt: 'advanced charting widgets',
        text: <Localize translate_text="10 crypto pairs" />,
    },
    {
        src: ZeroCommission,
        alt: 'deposit and withdrawal',
        text: <Localize translate_text="Zero commission" />,
    },
]

export default cryptocurrencies
