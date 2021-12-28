import React from 'react'
import { Localize } from 'components/localization'
import TightSpread from 'images/svg/markets/tight-spread.svg'
import CryptoPairs from 'images/svg/markets/crypto-pairs.svg'
import ZeroCommission from 'images/svg/markets/zero-commission.svg'
import Leverage from 'images/svg/markets/leverage.svg'

export default [
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
