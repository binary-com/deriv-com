import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { Localize } from 'components/localization'
import PlatformMt5 from 'images/svg/interim/bg-dmt5.svg'
import PlatformMt5Mobile from 'images/common/interim/interim-mt5-mobile-bg.png'
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
    bg_image: PlatformMt5,
    bg_image_mobile: PlatformMt5Mobile,
    image: 'dmt5',
    right: {
        header: '_t_Love MT5 on Binary.com?_t_',
        button_text: '_t_Try MT5 on Deriv.com_t_',
        button_props: { type: 'mt5' },
        hide_cta: true,
    },
}

const LoveTrading = () => <LoveTradingComponent {...content} />

export default LoveTrading
