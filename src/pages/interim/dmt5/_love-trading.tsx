import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { Localize } from 'components/localization'
import PlatformMt5 from 'images/svg/interim/bg-dmt5.svg'
import PlatformMt5Mobile from 'images/common/interim/interim-mt5-mobile-bg.png'
import { LoveTradingComponentProps } from 'types/generics'

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
