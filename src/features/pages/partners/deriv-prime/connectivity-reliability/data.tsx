import { SmartConnectivityTypeItemType } from './types'
import FixApiIcon from 'images/svg/deriv-prime/fix_api.svg'
import FastStableIcon from 'images/svg/deriv-prime/fast_stable.svg'

export const connectivity_items: SmartConnectivityTypeItemType[] = [
    {
        id: 0,
        data: {
            title: '_t_FIX API_t_',
            description:
                '_t_Our platform-agnostic FIX API allows for quick set-up, giving you fast, direct, and secure access to our liquidity pool. _t_',

            icon_src: FixApiIcon,
            alt: '_t_Quick setup and access to market liquidity_t_',
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Fast and stable_t_',
            description:
                '_t_Our intelligent routing to servers worldwide ensures rapid execution speeds and a stable, uninterrupted price feed with 99.97% uptime._t_',

            icon_src: FastStableIcon,
            alt: '_t_Rapid trade execution speeds for your clients_t_',
        },
    },
]
