import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    IllustrativeCommoditiesIcon,
    IllustrativeCryptocurrenciesIcon,
    IllustrativeDerivedIcon,
    IllustrativeEtfIcon,
    IllustrativeStocksAndIndicesIcon,
} from '@deriv/quill-icons'
import { localize } from 'components/localization'

export const cards: CardContent[] = [
    {
        header: localize('_t_Derived indices_t_'),
        description: localize(
            '_t_Trade 24/7 on indices which are based on simulated and real-world markets._t_',
        ),
        icon: <IllustrativeDerivedIcon fill="black" iconSize="md" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/markets/synthetic/',
        },
    },
    {
        header: localize('_t_Stocks & indices_t_'),
        description: localize(
            '_t_Diversify your portfolio with popular brands and international stock indices._t_',
        ),
        icon: <IllustrativeStocksAndIndicesIcon fill="black" iconSize="md" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/markets/stock/',
        },
    },
    {
        header: localize('_t_Exchange-traded funds (ETFs)_t_'),
        description: localize(
            '_t_Speculate on the prices of exchange-traded funds that measure performance by industries._t_',
        ),
        icon: <IllustrativeEtfIcon fill="black" iconSize="md" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/markets/exchange-traded-funds/',
        },
    },
    {
        header: localize('_t_Cryptocurrencies_t_'),
        description: localize(
            '_t_Potentially profit from the high volatility and frequent price fluctuations of digital coins._t_',
        ),
        icon: <IllustrativeCryptocurrenciesIcon fill="black" iconSize="md" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/markets/cryptocurrencies/',
        },
    },
    {
        header: localize('_t_Commodities_t_'),
        description: localize('_t_Trade on the prices of precious metals and energy._t_'),
        icon: <IllustrativeCommoditiesIcon fill="black" iconSize="md" />,
        size: 'md',
        align: 'start',
        color: 'light',
        className: 'flex justify-center',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/markets/commodities/',
        },
    },
]
