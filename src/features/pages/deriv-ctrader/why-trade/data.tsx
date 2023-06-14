import React from 'react'
import { DerivEzCardTypes } from '../types'
import AnyTime from 'images/svg/deriv-ez/twenty-four-seven.svg'
import MultipleAssets from 'images/svg/deriv-ctrader/multiple-assets.svg'
import QuickAccount from 'images/svg/deriv-ctrader/quick-account.svg'
import Image from 'features/components/atoms/image'

export const card_data: DerivEzCardTypes[] = [
    {
        title: '_t_Multiple assets on a single platform_t_',
        subtitle:
            '_t_Trade forex, stocks & indices, cryptocurrencies, commodities, and derived indices in one place._t_',
        icon: <Image src={MultipleAssets} height={48} alt={'_t_Multiple Assets_t_'} />,
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
        icon: <Image src={QuickAccount} height={48} alt={'_t_Quick account_t_'} />,
    },
]
