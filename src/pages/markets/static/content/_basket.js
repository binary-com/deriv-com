import React from 'react'
import { Localize } from 'components/localization'
import AdvancedCharting from 'images/svg/markets/basket-charting-widgets.svg'
import ConvenientDeposit from 'images/svg/markets/basket-deposit-withdrawal.svg'
import Leverage from 'images/svg/markets/basket-spreads.svg'
import MinimalCapital from 'images/svg/markets/basket-minimal-capital.svg'
import ResponsiveWebsite from 'images/svg/markets/basket-responsive-website.svg'

export default [
    {
        src: MinimalCapital,
        text: <Localize translate_text="Each currency weighted by 20%" />,
    },
    {
        src: Leverage,
        text: <Localize translate_text="High leverage, tight spreads" />,
    },
    {
        src: ResponsiveWebsite,
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: AdvancedCharting,
        text: <Localize translate_text="Advanced charting widgets" />,
    },
    {
        src: ConvenientDeposit,
        text: <Localize translate_text="Convenient deposit and withdrawal methods" />,
    },
]
