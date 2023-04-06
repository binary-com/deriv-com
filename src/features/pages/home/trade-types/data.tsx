import { SmartTradeTypeItem } from './types'
import OptionsHomeIcon from 'images/svg/home/options_icon.svg'
import MultipliersHomeIcon from 'images/svg/home/multipliers_icon.svg'
import CfdHomeIcon from 'images/svg/home/cfd_icon.svg'

export const tradeTypesItems: SmartTradeTypeItem[] = [
    {
        id: 0,
        data: {
            title: '_t_CFDs_t_',
            description:
                '_t_Trade with leverage and low spreads for better returns on successful trades._t_',
            url: {
                type: 'internal',
                to: '/trade-types/cfds/',
            },
            icon_src: CfdHomeIcon,
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Multipliers_t_',
            description:
                '_t_Multiply your potential profit without risking more than your stake._t_',
            url: {
                type: 'internal',
                to: '/trade-types/multiplier/',
            },
            icon_src: MultipliersHomeIcon,
        },
    },
    {
        id: 2,
        data: {
            title: '_t_Options_t_',
            description: '_t_Earn a range of payouts by correctly predicting market movements._t_',
            url: {
                type: 'internal',
                to: '/trade-types/options/',
            },
            icon_src: OptionsHomeIcon,
        },
        visibility: {
            is_eu: false,
        },
    },
]
