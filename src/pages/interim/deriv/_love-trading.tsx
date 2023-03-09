import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { LoveTradingComponentProps } from 'types/generics'

const content: LoveTradingComponentProps = {
    left: {
        header: '_t_Be among the first to try Deriv.com_t_',
        button_text: '_t_Visit Deriv.com now_t_',
        button_url: '/',
    },
    image: 'smart_trader',
    right: {
        header: '_t_Love trading on Binary.com’s signature platform?_t_',
        button_text: '_t_Try SmartTrader on Deriv.com_t_',
        button_url: 'trading',
        button_props: { type: 'smart_trader' },
        cta_props: { is_white: true },
    },
} as const

const LoveTrading = () => <LoveTradingComponent {...content} />

export default LoveTrading
