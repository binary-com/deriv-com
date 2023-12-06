import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    DerivProductDerivBotBrandDarkLogoHorizontalIcon,
    DerivProductDerivGoBrandDarkLogoHorizontalIcon,
    DerivProductDerivTraderBrandDarkLogoHorizontalIcon,
    DerivProductDerivXBrandDarkLogoIcon,
    PartnersProductDerivCtraderBrandLightLogoHorizontalIcon,
    PartnersProductDerivMt5BrandLightLogoHorizontalIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Logo'
import { localize } from 'components/localization'

export const platformTabs = [
    { children: 'All' },
    { children: 'CFDs' },
    { children: 'Options' },
    { children: 'Bots' },
    { children: 'Social' },
]

export const RowCards: CardContent[] = [
    {
        header: localize('_t_Deriv MT5_t_'),
        description: localize('_t_The most popular and comprehensive CFDs platform._t_'),
        icon: <PartnersProductDerivMt5BrandLightLogoHorizontalIcon width={48} height={48} />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
    {
        header: localize('_t_Deriv cTrader_t_'),
        description: localize('_t_The most popular and comprehensive CFDs platform._t_'),
        icon: <PartnersProductDerivCtraderBrandLightLogoHorizontalIcon height="48" width="48" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
    {
        header: localize('_t_Deriv X_t_'),
        description: localize('_t_The most popular and comprehensive CFDs platform._t_'),
        icon: <DerivProductDerivXBrandDarkLogoIcon height="48" width="48" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
    {
        header: localize('_t_Deriv GO_t_'),
        description: localize('_t_The most popular and comprehensive CFDs platform._t_'),
        icon: <DerivProductDerivGoBrandDarkLogoHorizontalIcon width={48} height={48} />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
    {
        header: localize('_t_Deriv Trader_t_'),
        description: localize('_t_The most popular and comprehensive CFDs platform._t_'),
        icon: <DerivProductDerivTraderBrandDarkLogoHorizontalIcon height="48" width="48" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
    {
        header: localize('_t_Deriv Bot_t_'),
        description: localize('_t_The most popular and comprehensive CFDs platform._t_'),
        icon: <DerivProductDerivBotBrandDarkLogoHorizontalIcon height="48" width="48" />,
        size: 'md',
        align: 'start',
        color: 'light',
        className: 'flex justify-center',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
]

export const EUCards: CardContent[] = [
    {
        header: localize('_t_Deriv MT5_t_'),
        description: localize('_t_The most popular and comprehensive CFDs platform._t_'),
        icon: <PartnersProductDerivMt5BrandLightLogoHorizontalIcon width={48} height={48} />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
    {
        header: localize('_t_Deriv Trader_t_'),
        description: localize('_t_The most popular and comprehensive CFDs platform._t_'),
        icon: <DerivProductDerivTraderBrandDarkLogoHorizontalIcon height="48" width="48" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
]
