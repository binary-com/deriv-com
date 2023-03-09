import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { LoveTradingComponentProps } from 'types/generics'

const content: LoveTradingComponentProps = {
    left: {
        header: '_t_Be among the first to try Deriv.com_t_',
        button_text: '_t_Visit Deriv.com now_t_',
        button_url: '/',
    },
    image: 'dbot',
    right: {
        header: '_t_Love Binary Bot?_t_',
        button_text: '_t_Try DBot on Deriv.com_t_',
        button_props: { type: 'dbot' },
        cta_props: { is_white: true },
        hide_cta: true,
    },
}

const LoveTrading = () => <LoveTradingComponent {...content} />

export default LoveTrading
