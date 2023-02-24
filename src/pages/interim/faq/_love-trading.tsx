import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { Localize } from 'components/localization'

const content = {
    left: {
        header: <Localize translate_text="_t_Be among the first to try Deriv.com_t_" />,
        button_text: <Localize translate_text="_t_Visit Deriv.com now_t_" />,
        button_url: '/',
    },
    image: 'smart_trader',
    right: {
        header: (
            <Localize translate_text="_t_Love trading on Binary.com’s signature platform?_t_" />
        ),
        button_text: <Localize translate_text="_t_Try SmartTrader on Deriv.com_t_" />,
        button_url: 'trading',
        button_props: { type: 'smart_trader' },
        cta_props: { is_white: true },
    },
}

const LoveTrading = () => <LoveTradingComponent {...content} />

export default LoveTrading
