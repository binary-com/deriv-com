import { StepsTradeTypeItem } from 'features/components/organisms/markets/markets-trade-steps/types'

export const ETFStepItems: StepsTradeTypeItem[] = [
    {
        id: 0,

        data: {
            description:
                '_t_Open a demo account and practise with an unlimited amount of virtual funds._t_',
            title: '_t_Practise_t_',
        },
    },
    {
        id: 1,
        data: {
            description:
                '_t_Open a real account, make a deposit, and start trading basket indices and other markets._t_',
            title: '_t_Trade_t_',
        },
    },
    {
        id: 2,
        data: {
            description:
                '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
            title: '_t_Withdraw_t_',
        },
    },
]
