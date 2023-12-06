import { Features } from '@deriv-com/blocks'
import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    IllustrativeCfdsIcon,
    IllustrativeMultipliersIcon,
    IllustrativeOptionsIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Illustrative'
import { localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const RowCards: CardContent[] = [
    {
        header: localize('_t_CFDs_t_'),
        description: localize(
            '_t_Trade with leverage, unbeatable spreads, and fast execution on the widest range of markets._t_',
        ),
        icon: <IllustrativeCfdsIcon iconSize="lg" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
    {
        header: localize('_t_Options_t_'),
        description: localize(
            '_t_Trade diverse vanilla and exotic options across platforms and markets without risking more than your initial stake._t_',
        ),
        icon: <IllustrativeOptionsIcon iconSize="lg" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
    {
        header: localize('_t_Multipliers_t_'),
        description: localize(
            '_t_Trade on global financial markets and multiply your potential profit without losing more than your stake._t_',
        ),
        icon: <IllustrativeMultipliersIcon iconSize="lg" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
]

const EUCards: CardContent[] = [
    {
        header: localize('_t_CFDs_t_'),
        description: localize(
            '_t_Trade with leverage, unbeatable spreads, and fast execution on the widest range of markets._t_',
        ),
        icon: <IllustrativeCfdsIcon iconSize="lg" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
    {
        header: localize('_t_Multipliers_t_'),
        description: localize(
            '_t_Trade on global financial markets and multiply your potential profit without losing more than your stake._t_',
        ),
        icon: <IllustrativeMultipliersIcon iconSize="lg" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
]
const TradeTypeSection = () => {
    const { is_eu } = useRegion()
    const heading = is_eu
        ? localize('_t_Trade CFDs & Multipliers_t_')
        : localize('_t_Trade CFDs, Options, or Multipliers_t_')
    return (
        <Features.Card
            title={heading}
            cols="three"
            cards={is_eu ? EUCards : RowCards}
            className="!bg-background-secondary-container"
        />
    )
}

export default TradeTypeSection
