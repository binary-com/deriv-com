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

            icon_src: ETF1,
        },
    },
    {
        id: 1,
        data: {
            description: '_t_Numerous intraday trading opportunities_t_',

            icon_src: ETF2,
        },
    },
    {
        id: 2,
        data: {
            description: '_t_Fast, secure deposit and withdrawal options_t_',

            icon_src: ETF3,
        },
    },
    {
        id: 3,
        data: {
            description: '_t_Powerful, intuitive platforms_t_',

            icon_src: ETF4,
        },
    },
    {
        id: 4,
        data: {
            description: '_t_Smart and friendly support, 7 days a week_t_',

            icon_src: ETF5,
        },
    },
]
