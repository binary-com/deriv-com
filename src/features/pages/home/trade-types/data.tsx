import { SmartTradeTypeItem } from './types'

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
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Multipliers_t_',
            description:
                '_t_Multiply potential profit without risking more than your initial stake._t_',
            url: {
                type: 'internal',
                to: '/trade-types/multiplier/',
            },
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
        },
        visibility: {
            is_eu: false,
        },
    },
]
