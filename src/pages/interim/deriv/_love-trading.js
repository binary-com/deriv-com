import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { Localize } from 'components/localization'

const content = {
    left: {
        header: <Localize translate_text="Be among the first to try Deriv.com" />,
        button_text: <Localize translate_text="Visit Deriv.com now" />,
        button_url: '/',
    },
    image: 'smart_trader',
    right: {
        header: <Localize translate_text="Love trading on Binary.com’s signature platform?" />,
        button_text: <Localize translate_text="Try SmartTrader on Deriv.com" />,
        button_url: 'trading',
        button_props: { type: 'smart_trader' },
        cta_props: { is_white: true },
    },
}

const LoveTrading = () => <LoveTradingComponent {...content} />

export default LoveTrading
