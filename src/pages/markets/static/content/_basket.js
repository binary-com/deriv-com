import React from 'react'
import { Localize } from 'components/localization'
import Stocks from 'images/svg/stock-indices/stocks-minimum-capital.svg'
import AdvancedCharting from 'images/svg/markets/advanced-charting-widgets-new.svg'
import Deposit from 'images/svg/markets/deposit-and-withdrawal-new.svg'
import Leverage from 'images/svg/stock-indices/stocks-high-leverage.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website-new.svg'

export const basket_indices_content = [
    {
        src: Stocks,
        alt: 'currency weighted by 20%',
        text: <Localize translate_text="Each currency weighted by 20%" />,
    },
    {
        src: Leverage,
        alt: 'leverage',
        text: <Localize translate_text="High leverage, tight spreads" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive website',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: AdvancedCharting,
        alt: 'advanced charting widgets',
        text: <Localize translate_text="Advanced charting widgets" />,
    },
    {
        src: Deposit,
        alt: 'deposit and withdrawal',
        text: <Localize translate_text="Convenient deposit and withdrawal methods" />,
    },
]

export const basket_indices_content_eu = [
    {
        src: Stocks,
        alt: 'currency weighted by 20%',
        text: <Localize translate_text="Each currency weighted by 20%" />,
    },
    {
        src: Leverage,
        alt: 'leverage',
        text: <Localize translate_text="Tight spreads" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive website',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: AdvancedCharting,
        alt: 'advanced charting widgets',
        text: <Localize translate_text="Advanced charting widgets" />,
    },
    {
        src: Deposit,
        alt: 'deposit and withdrawal',
        text: <Localize translate_text="Convenient deposit and withdrawal methods" />,
    },
]
