import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { Localize } from 'components/localization'

const content = {
    left: {
        header: <Localize translate_text="Be among the first to try Deriv.com" />,
        button_text: <Localize translate_text="Visit Deriv.com now" />,
        button_url: '/',
    },
    image: 'dbot',
    right: {
        header: <Localize translate_text="Love Binary Bot?" />,
        button_text: <Localize translate_text="Try DBot on Deriv.com" />,
        button_props: { type: 'dbot' },
        cta_props: { is_white: true },
        hide_cta: true,
    },
}

const LoveTrading = () => <LoveTradingComponent {...content} />

export default LoveTrading
