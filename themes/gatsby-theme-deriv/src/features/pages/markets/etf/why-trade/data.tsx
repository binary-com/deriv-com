import { BenefitTradeTypeItem } from 'features/components/organisms/markets/greyed-container/types'
import ETF1 from 'images/svg/markets/etf_1.svg'
import ETF2 from 'images/svg/markets/etf_2.svg'
import ETF3 from 'images/svg/markets/etf_3.svg'
import ETF4 from 'images/svg/markets/etf_4.svg'
import ETF5 from 'images/svg/markets/etf_5.svg'

export const ETFTradeBenefitItems: BenefitTradeTypeItem[] = [
    {
        id: 0,
        data: {
            description: '_t_A low-cost way to trade diverse asset groups_t_',
            icon: {
                src: ETF1,
                alt: '_t_low-cost trading_t_',
            },
        },
    },
    {
        id: 1,
        data: {
            description: '_t_Numerous intraday trading opportunities_t_',
            icon: {
                src: ETF2,
                alt: '_t_intraday trading opportunities_t_',
            },
        },
    },
    {
        id: 2,
        data: {
            description: '_t_Fast, secure deposit and withdrawal options_t_',
            icon: {
                src: ETF3,
                alt: '_t_fast, secure deposit and withdrawal_t_',
            },
        },
    },
    {
        id: 3,
        data: {
            description: '_t_Powerful, intuitive platforms_t_',
            icon: {
                src: ETF4,
                alt: '_t_powerful and intuitive platforms_t_',
            },
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 4,
        data: {
            description: '_t_Smart and friendly support, 7 days a week_t_',
            icon: {
                src: ETF5,
                alt: '_t_smart and friendly support_t_',
            },
        },
    },
]
