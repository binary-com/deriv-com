import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { Localize } from 'components/localization'

const content = {
    left: {
        header: <Localize translate_text="_t_Be among the first to try Deriv.com_t_" />,
        button_text: <Localize translate_text="_t_Visit Deriv.com now_t_" />,
        button_url: '/',
    },
    image: 'dbot',
    right: {
        header: <Localize translate_text="_t_Love Binary Bot?_t_" />,
        button_text: <Localize translate_text="_t_Try DBot on Deriv.com_t_" />,
        button_props: { type: 'dbot' },
        cta_props: { is_white: true },
        hide_cta: true,
    },
}

const LoveTrading = () => <LoveTradingComponent {...content} />

export default LoveTrading
