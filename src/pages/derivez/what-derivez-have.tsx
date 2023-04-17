import React, { ReactElement } from 'react'
import { localize, Localize } from 'components/localization'
import DTrading from 'components/custom/_dtrading'
import { TString } from 'types/generics'

type TradingType = {
    title?: ReactElement
    subtitle?: ReactElement
    image_name?: string
    image_alt?: string
}

const on_go_trading_title: TString = '_t_On-the-go trading_t_'
const on_go_trading_subtitle: TString =
    '_t_Access your Deriv EZ trades effortlessly on the Deriv GO mobile app. No extra apps to download, no extra passwords to remember._t_'
const on_go_trading_alt: TString = '_t_Deriv GO trading app_t_'
const indicator_title: TString = '_t_50+ indicators and tools_t_'
const indicator_subtitle: TString =
    '_t_Take advantage of more than 50 trading indicators and tools to make informed decisions._t_'
const indicator_alt: TString = '_t_Trading indicators and tools’_t_'
const instant_platform_title: TString = '_t_Instant platform access_t_'
const instant_platform_subtitle: TString =
    '_t_Start trading immediately, with no additional login ID or password to fill in. Don’t miss out on market opportunities._t_'
const instant_platform_alt: TString = '_t_Deriv EZ account creation_t_'

const trading: TradingType[] = [
    {
        title: <Localize translate_text={on_go_trading_title} />,
        subtitle: <Localize translate_text={on_go_trading_subtitle} />,
        image_name: 'on_go_trading',
        image_alt: localize(on_go_trading_alt),
    },
    {
        title: <Localize translate_text={indicator_title} />,
        subtitle: <Localize translate_text={indicator_subtitle} />,
        image_name: 'indicator',
        image_alt: localize(indicator_alt),
    },
    {
        title: <Localize translate_text={instant_platform_title} />,
        subtitle: <Localize translate_text={instant_platform_subtitle} />,
        image_name: 'instant_platform',
        image_alt: localize(instant_platform_alt),
    },
]

const WhatIsDerivEZ = () => {
    return (
        <div>
            <DTrading trading={trading} max_width="40rem" max_height="30rem" />
        </div>
    )
}
export default WhatIsDerivEZ
