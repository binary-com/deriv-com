import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    IllustrativeCfdsIcon,
    IllustrativeMultipliersIcon,
    IllustrativeOptionsIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Illustrative'
import { Localize } from 'components/localization'

export const RowCards: CardContent[] = [
    {
        id: 1,
        header: <Localize translate_text="_t_CFDs_t_" />,
        description: (
            <Localize translate_text="_t_Trade with leverage, unbeatable spreads, and fast execution on the widest range of markets._t_" />
        ),
        icon: <IllustrativeCfdsIcon iconSize="lg" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/trade-types/cfds/',
            descriptiveText: 'about CFDs',
        },
    },
    {
        id: 2,
        header: <Localize translate_text="_t_Options_t_" />,
        description: (
            <Localize translate_text="_t_Trade diverse vanilla and exotic options across platforms and markets without risking more than your initial stake._t_" />
        ),
        icon: <IllustrativeOptionsIcon iconSize="lg" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/trade-types/options/digital-options/up-and-down/',
            descriptiveText: 'about options',
        },
    },
    {
        id: 3,
        header: <Localize translate_text="_t_Multipliers_t_" />,
        description: (
            <Localize translate_text="_t_Trade on global financial markets and multiply your potential profit without losing more than your stake._t_" />
        ),
        icon: <IllustrativeMultipliersIcon iconSize="lg" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/trade-types/multiplier/',
            descriptiveText: 'about multiplier',
        },
    },
]

export const EUCards: CardContent[] = [
    {
        id: 1,
        header: <Localize translate_text="_t_CFDs_t_" />,
        description: (
            <Localize translate_text="_t_Trade with leverage, unbeatable spreads, and fast execution on the widest range of markets._t_" />
        ),
        icon: <IllustrativeCfdsIcon iconSize="lg" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/trade-types/cfds/',
            descriptiveText: 'about CFDs',
        },
    },
    {
        id: 2,
        header: <Localize translate_text="_t_Multipliers_t_" />,
        description: (
            <Localize translate_text="_t_Trade on global financial markets and multiply your potential profit without losing more than your stake._t_" />
        ),
        icon: <IllustrativeMultipliersIcon iconSize="lg" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/trade-types/multiplier/',
            descriptiveText: 'about multipliers',
        },
    },
]
