import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { Localize } from 'components/localization'
import PlatformMt5 from 'images/svg/interim/bg-dmt5.svg'
import PlatformMt5Mobile from 'images/common/interim/interim-mt5-mobile-bg.png'

const content = {
    left: {
        header: <Localize translate_text="Be among the first to try Deriv.com" />,
        button_text: <Localize translate_text="Visit Deriv.com now" />,
        button_url: '/',
    },
    bg_image: PlatformMt5,
    bg_image_mobile: PlatformMt5Mobile,
    image: 'dmt5',
    right: {
        header: <Localize translate_text="Love MT5 on Binary.com?" />,
        button_text: <Localize translate_text="Try MT5 on Deriv.com" />,
        button_props: { type: 'mt5' },
        hide_cta: true,
    },
}

const LoveTrading = () => <LoveTradingComponent {...content} />

export default LoveTrading
