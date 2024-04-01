import React from 'react'
import { TradingPlatformCardDataType } from 'features/components/templates/trade-platform/types'
import Image from 'features/components/atoms/image'
import MultipleAssets from 'images/svg/trading-platforms/ctrader/multiple-assets.svg'
import AnyTime from 'images/svg/trading-platforms/deriv-ez/twenty-four-seven.svg'
import SignIn from 'images/svg/trading-platforms/ctrader/sign-in.svg'
import CtraderCopyTrading from 'images/svg/trading-platforms/ctrader/ctrader-copy-trading.svg'
import { localize } from 'components/localization'

export const trading_platform_why_trade: TradingPlatformCardDataType[] = [
    {
        title: '_t_Multiple assets on a single platform_t_',
        subtitle:
            '_t_Trade forex, stocks & indices, cryptocurrencies, commodities, and derived indices in one place._t_',
        icon: (
            <Image src={MultipleAssets} width={48} height={48} alt={localize('_t_Easy start_t_')} />
        ),
    },
    {
        title: '_t_24/7 trading_t_',
        subtitle:
            '_t_Trade cryptocurrencies and synthetic indices anytime, even on weekends and holidays._t_',
        icon: <Image src={AnyTime} width={48} height={48} alt={localize('_t_24/7 chat_t_')} />,
    },
    {
        title: '_t_Copy trading_t_',
        subtitle: '_t_Copy the trading strategies of seasoned traders at a fee._t_',
        icon: (
            <Image
                src={CtraderCopyTrading}
                width={48}
                height={48}
                alt={localize('_t_Ctrader copy trading_t_')}
            />
        ),
    },
    {
        title: '_t_Quick account    sign-up_t_',
        subtitle: '_t_Practise with a demo account preloaded with unlimited virtual funds._t_',
        icon: (
            <Image src={SignIn} width={48} height={48} alt={localize('_t_Favourite assets_t_')} />
        ),
    },
]
