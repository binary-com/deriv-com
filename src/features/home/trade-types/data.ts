import { TTradeTypeSmartContent } from './types'

export const trade_types: TTradeTypeSmartContent[] = [
    {
        id: 0,
        data: {
            image_url: (regions) => {
                if (regions.is_eu) {
                    return 'trade_type_cfds_eu'
                } else if (regions.is_uk) {
                    return 'trade_type_cfds_uk'
                } else {
                    return 'trade_type_cfds'
                }
            },
            image_alt: '_t_CFDs_t_',
            header: '_t_CFDs_t_',
            desc: '_t_Trade with leverage and low spreads for better returns on successful trades._t_',
            link: '/trade-types/cfds/',
            link_text: '_t_More on CFDs_t_',
        },
        visiblity: {},
    },
    {
        id: 1,
        data: {
            image_url: (regions) => {
                if (regions.is_eu) {
                    return 'trade_type_multipliers_eu'
                } else if (regions.is_uk) {
                    return 'trade_type_multipliers_uk'
                } else {
                    return 'trade_type_multipliers'
                }
            },
            image_alt: '_t_Multipliers_t_',
            header: '_t_Multipliers_t_',
            desc: '_t_Multiply your potential profit without risking more than your stake._t_',
            link: '/trade-types/multiplier/',
            link_text: '_t_More on multipliers_t_',
        },
        visiblity: {},
    },
    {
        id: 2,
        data: {
            image_url: 'trade_type_digitaloptions',
            image_alt: '_t_Options_t_',
            header: '_t_Options_t_',
            desc: '_t_Earn fixed payouts by predicting asset price movements._t_',
            link: '/trade-types/options/',
            link_text: '_t_More on options_t_',
        },
        visiblity: {
            is_eu: false,
            is_uk: false,
        },
    },
]
