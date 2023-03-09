import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { TString } from 'types/generics'

type LeftCTASectionProps = {
    header: TString
    button_url?: string
    button_text?: TString
    hide_cta?: boolean
    cta_props?: { is_white?: boolean }
    custom_content?: React.ReactElement
}
type RightCTASectionProps = LeftCTASectionProps & {
    button_props?: { type: 'dbot' | 'smart_trader' | 'mt5' }
}

type LoveTradingComponentProps = {
    left: LeftCTASectionProps
    right: RightCTASectionProps
    image: string
    bg_image?: string
    bg_image_mobile?: string
}

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
}

const LoveTrading = () => <LoveTradingComponent {...content} />

export default LoveTrading
