import React from 'react'
import { TradingPlatformCardDataType } from 'features/components/templates/trade-platform/types'
import Image from 'features/components/atoms/image'
import MultipleAssets from 'images/svg/trading-platforms/ctrader/multiple-assets.svg'
import AnyTime from 'images/svg/trading-platforms/deriv-ez/twenty-four-seven.svg'
import SignIn from 'images/svg/trading-platforms/ctrader/sign-in.svg'

export const trading_platform_why_trade: TradingPlatformCardDataType[] = [
    {
        title: '_t_Multiple assets on a single platform_t_',
        subtitle:
            '_t_Trade forex, stocks & indices, cryptocurrencies, commodities, and derived indices in one place._t_',
        icon: <Image src={MultipleAssets} height={48} alt={'_t_Easy start_t_'} />,
    },
    {
        title: '_t_All day, all year_t_',
        subtitle:
            '_t_Trade cryptocurrencies and synthetic indices anytime, even on weekends and holidays._t_',
        icon: <Image src={AnyTime} height={48} alt={'_t_24/7 chat_t_'} />,
    },
    {
        title: '_t_Quick account sign-in_t_',
        subtitle:
            '_t_Already have a Deriv account? Use those credentials to sign in to Deriv cTrader._t_',
        icon: <Image src={SignIn} height={48} alt={'_t_Favourite assets_t_'} />,
    },
]
