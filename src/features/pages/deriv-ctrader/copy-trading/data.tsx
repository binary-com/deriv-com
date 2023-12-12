import React from 'react'
import { TradingPlatformCardDataType } from 'features/components/templates/trade-platform/types'
import Image from 'features/components/atoms/image'
import MultipleAssets from 'images/svg/trading-platforms/ctrader/multiple-assets.svg'
import CallTheShots from 'images/svg/trading-platforms/ctrader/call-the-shots.svg'
import RiskManagement from 'images/svg/trading-platforms/ctrader/risk-management.svg'
import { localize } from 'components/localization'

export const why_copy_trade: TradingPlatformCardDataType[] = [
    {
        title: '_t_Various trading strategies_t_',
        subtitle:
            '_t_Choose from a list of strategy providers and find the trading strategy that suits you._t_',
        icon: (
            <Image
                src={MultipleAssets}
                height={48}
                alt={localize('_t_Various trading strategies_t_')}
            />
        ),
    },
    {
        title: '_t_You call the shots_t_',
        subtitle:
            '_t_Choose to stop a trade or unsubscribe from a strategy provider whenever you want._t_',
        icon: <Image src={CallTheShots} height={48} alt={localize('_t_You call the shots_t_')} />,
    },
    {
        title: '_t_Risk management tools_t_',
        subtitle:
            '_t_Minimise the potential risks associated with your chosen trading strategies._t_',
        icon: (
            <Image src={RiskManagement} height={48} alt={localize('_t_Risk management tools_t_')} />
        ),
    },
]
