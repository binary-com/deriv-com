import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    IllustrativeLeverageIcon,
    IllustrativeOptionalIcon,
    IllustrativeSpreadsIcon,
    IllustrativeDepositAndWithdrawalIcon,
    IllustrativeSupportIcon,
} from '@deriv/quill-icons'
import { localize } from 'components/localization'
export const cards: CardContent[] = [
    {
        description: localize('_t_High leverage up to 1:1000_t_'),
        icon: <IllustrativeLeverageIcon fill="black" iconSize="md" />,
        size: 'lg',
        align: 'start',
        color: 'gray',
    },
    {
        description: localize('_t_Major pairs, minor pairs, exotic pairs_t_'),
        icon: <IllustrativeOptionalIcon fill="black" iconSize="md" />,
        size: 'lg',
        align: 'start',
        color: 'gray',
    },
    {
        description: localize('_t_Tight forex spreads from 0.3 pips_t_'),
        icon: <IllustrativeSpreadsIcon fill="black" iconSize="md" />,
        size: 'lg',
        align: 'start',
        color: 'gray',
    },
    {
        description: localize('_t_Easy deposit & withdrawal methods_t_'),
        icon: <IllustrativeDepositAndWithdrawalIcon fill="black" iconSize="md" />,
        size: 'lg',
        align: 'start',
        color: 'gray',
    },
    {
        description: localize('_t_24/7 multilingual support_t_'),
        icon: <IllustrativeSupportIcon fill="black" iconSize="md" />,
        size: 'lg',
        align: 'start',
        color: 'gray',
    },
]
