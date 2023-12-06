import { SmartTimelineItem } from 'types/generics'

export const cfdItems: SmartTimelineItem[] = [
    {
        id: 0,
        data: {
            title: '_t_Practise_t_',
            subtitle:
                '_t_Open a demo Deriv MT5 or demo Deriv X account and practise with an unlimited amount of virtual funds._t_',
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 11,
        data: {
            title: '_t_Practise_t_',
            subtitle:
                '_t_Open a demo CFDs account and practise with an unlimited amount of virtual funds._t_',
        },
        visibility: {
            is_eu: true,
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Trade_t_',
            subtitle:
                '_t_Trade with a real Deriv MT5 or real Deriv X account and get access to high leverage to trade positions larger than your existing capital._t_',
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 22,
        data: {
            title: '_t_Trade_t_',
            subtitle:
                '_t_Trade with a real CFDs account. Get access to leverage and trade positions larger than your existing capital._t_',
        },
        visibility: {
            is_eu: true,
        },
    },
    {
        id: 2,
        data: {
            title: '_t_Withdraw_t_',
            subtitle:
                '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
        },
    },
]
