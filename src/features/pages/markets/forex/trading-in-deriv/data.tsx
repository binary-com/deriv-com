import React from 'react'
import { CardContent } from '@deriv-com/components'
import { localize } from 'components/localization'
export const cards: CardContent[] = [
    {
        header: localize('_t_CFDs_t_'),
        description: localize(
            '_t_Speculate on the price movements of popular forex pairs with high leverage and advanced technical indicators._t_',
        ),
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
    {
        header: localize('_t_Options_t_'),
        description: localize(
            '_t_Predict the market trends of FX currency pairs without the risk of losing your initial stake_t_',
        ),
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
]
