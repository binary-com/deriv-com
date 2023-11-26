import React from 'react'
import { NavLinkItems } from '@deriv-com/providers'
import {
    DerivProductDerivBotBrandDarkLogoHorizontalIcon,
    DerivProductDerivEzBrandDarkLogoHorizontalIcon,
    DerivProductDerivGoBrandDarkLogoHorizontalIcon,
    DerivProductDerivNakalaBrandDarkLogoHorizontalIcon,
    DerivProductDerivTraderBrandDarkLogoHorizontalIcon,
    DerivProductDerivXBrandDarkLogoIcon,
    PartnersProductDerivCtraderBrandDarkLogoHorizontalIcon,
    PartnersProductDerivMt5BrandDarkLogoHorizontalIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Logo'

export const mainRowNavItems: NavLinkItems = {
    'getting-started': {
        id: 0,
        text: 'Getting Started',
        type: 'nav-dropdown',
        columns: [
            {
                id: 0,
                header: {
                    href: '/intro',
                    text: 'Intro',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        href: '/why-deriv',
                        text: 'Why Deriv',
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/what-we-offer',
                        text: 'What we offer',
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: '/cfd-trading',
                        text: 'CFDs Trading',
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: '/options-trading',
                        text: 'Options Trading',
                        type: 'direct',
                    },
                ],
            },
            {
                id: 1,
                header: {
                    href: '/account',
                    text: 'Account',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        href: '/open-account',
                        text: 'Open a trading account',
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/try-free-demo',
                        text: 'Try a free demo',
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: '/how-to-deposit',
                        text: 'How to deposit',
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: '/how-to-withdraw',
                        text: 'How to withdraw',
                        type: 'direct',
                    },
                ],
            },
            {
                id: 2,
                header: {
                    href: '/top-platforms',
                    text: 'Top platforms',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        href: '/dmt5',
                        text: 'MetaTrader 5',
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/dmt5-web',
                        text: 'MetaTrader Web Terminal',
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: '/ctrader',
                        text: 'cTrader',
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: '/dtrader',
                        text: 'Deriv Trader',
                        type: 'direct',
                    },
                    {
                        id: 4,
                        href: '/deriv-go',
                        text: 'Deriv Go',
                        type: 'direct',
                    },
                ],
            },
        ],
    },
    trading: {
        id: 1,
        type: 'nav-dropdown',
        text: 'Trading',
        columns: [
            {
                id: 0,
                header: {
                    href: '/trade-types',
                    text: 'Trade types',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        href: '/cfd',
                        text: 'CFDs',
                        type: 'direct',
                    },
                    {
                        id: 1,
                        type: 'sub-link',

                        header: {
                            href: '/options',
                            text: 'Options',
                            type: 'direct',
                        },
                        subLinks: [
                            {
                                id: 0,
                                text: 'Digital Options',
                                href: '/digital-options',
                                type: 'direct',
                            },
                            {
                                id: 1,
                                text: 'Accumulator Options',
                                href: '/accumulator-options',
                                type: 'direct',
                            },
                            {
                                id: 2,
                                text: 'Vanilla Options',
                                href: '/vanilla-options',
                                type: 'direct',
                            },
                        ],
                    },
                ],
            },
            {
                id: 1,
                header: {
                    href: '/markets',
                    text: 'Markets',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        href: '/forex',
                        text: 'Forex',
                        type: 'direct',
                        description: 'Major, minor and exotic currency pairs.',
                    },
                    {
                        id: 1,
                        href: '/derived-indices',
                        text: 'Derived Indices',
                        type: 'direct',
                        description: 'Indices simulating real-world markets with 24/7 trading.',
                    },
                    {
                        id: 2,
                        href: '/stock-indices',
                        text: 'Stock & indices',
                        type: 'direct',
                        description: 'Leading company stocks and top global indices',
                    },
                    {
                        id: 3,
                        href: '/commodities',
                        text: 'Commodities',
                        type: 'direct',
                        description: 'World markets including precious metals and energies.',
                    },
                    {
                        id: 4,
                        href: '/cryptocurrencies',
                        text: 'Cryptocurrencies',
                        type: 'direct',
                        description: "The world's most popular digital currencies.",
                    },
                    {
                        id: 5,
                        href: '/etf',
                        text: 'ETFs',
                        type: 'direct',
                        description: 'Diverse exchange-traded funds for broad market exposure.',
                    },
                ],
            },
            {
                id: 2,
                header: {
                    href: '/pricing',
                    text: 'Pricing',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        href: '/trading-conditions',
                        text: 'Trading conditions',
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/spreads',
                        text: 'Spreads',
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: '/trading-hours',
                        text: 'Trading hours',
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: '/swap-rates',
                        text: 'Swap rates',
                        type: 'direct',
                    },
                ],
            },
        ],
    },
    platforms: {
        id: 2,
        type: 'nav-dropdown',
        text: 'Platforms',
        columns: [
            {
                id: 0,
                header: {
                    href: '/cfd-trading',
                    text: 'CFDs trading',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        href: '/dmt5',
                        text: 'Deriv MT5',
                        type: 'direct',
                        icon: (
                            <PartnersProductDerivMt5BrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description:
                            'A comprehensive trading platform for all your CFDs trading needs',
                    },
                    {
                        id: 1,
                        href: '/dmt5-web',
                        text: 'Deriv MT5 Web Terminal',
                        type: 'direct',
                        icon: (
                            <PartnersProductDerivMt5BrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description:
                            'A comprehensive trading platform for all your CFDs trading needs',
                    },
                    {
                        id: 2,
                        href: '/ctrader',
                        text: 'Deriv cTrader',
                        type: 'direct',
                        icon: (
                            <PartnersProductDerivCtraderBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description: 'A fast CFDs trading platform with integrated copy trading',
                    },
                    {
                        id: 3,
                        href: '/deriv-ez',
                        text: 'Deriv EZ',
                        type: 'direct',
                        icon: (
                            <DerivProductDerivEzBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description:
                            'CFDs on the go. Easy access and navigation for web and mobile',
                    },
                    {
                        id: 4,
                        href: '/derivx',
                        text: 'Deriv X',
                        type: 'direct',
                        icon: <DerivProductDerivXBrandDarkLogoIcon width={24} height={24} />,
                        description: 'Our user-friendly, customizable CFDs trading platform',
                    },
                ],
            },
            {
                id: 1,
                header: {
                    href: '/markets',
                    text: 'Markets',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        href: '/dtrader',
                        text: 'Deriv Trader',
                        type: 'direct',
                        icon: (
                            <DerivProductDerivTraderBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description: 'Our user-friendly, customizable CFDs trading platform',
                    },
                    {
                        id: 1,
                        href: '/deriv-go',
                        text: 'Deriv Go',
                        type: 'direct',
                        icon: (
                            <DerivProductDerivGoBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description: 'Our user-friendly, customizable CFDs trading platform',
                    },
                ],
            },
            {
                id: 2,
                header: {
                    href: '/social-trading',
                    text: 'Social trading',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        href: '/deriv-nakala',
                        text: 'Deriv Nakala',
                        type: 'direct',
                        description: 'WE NEED DESCRIPTION FOR THIS ONE',
                        icon: (
                            <DerivProductDerivNakalaBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                    },
                ],
            },
            {
                id: 3,
                header: {
                    href: '/bot-trading',
                    text: 'Bot trading',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        href: '/dbot',
                        text: 'Deriv Bot',
                        type: 'direct',
                        description: 'Automated trading made easy. No coding required',
                        icon: (
                            <DerivProductDerivBotBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                    },
                ],
            },
        ],
    },
    more: {
        id: 3,
        type: 'nav-dropdown',
        text: 'More',
        columns: [
            {
                id: 0,
                header: {
                    href: '/company',
                    text: 'Company',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        href: '/about-us',
                        text: 'About us',
                        type: 'direct',
                    },
                    {
                        id: 1,
                        type: 'direct',
                        href: '/regulation',
                        text: 'Regulation',
                    },
                    {
                        id: 2,
                        type: 'direct',
                        href: '/contanct-us',
                        text: 'Contact us',
                    },
                    {
                        id: 3,
                        type: 'direct',
                        href: '/partner',
                        text: 'Partner',
                    },
                    {
                        id: 4,
                        type: 'direct',
                        href: '/liquidity-provisions',
                        text: 'Liquidity Provisions',
                    },
                    {
                        id: 5,
                        type: 'direct',
                        href: '/trading-api',
                        text: 'Trading API',
                    },
                    {
                        id: 6,
                        type: 'direct',
                        href: '/press-releases',
                        text: 'Press releases',
                    },
                    {
                        id: 7,
                        type: 'direct',
                        href: '/deriv-life',
                        text: 'Deriv life',
                    },
                    {
                        id: 8,
                        type: 'direct',
                        href: '/careers',
                        text: 'Careers',
                    },
                ],
            },
            {
                id: 1,
                header: {
                    href: '/learn',
                    text: 'Learn',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        type: 'direct',
                        href: '/deriv-academy',
                        text: 'Deriv academy',
                    },
                    {
                        id: 1,
                        type: 'direct',
                        href: '/how-to-videos',
                        text: 'How to videos',
                    },
                ],
            },
            {
                id: 2,
                header: {
                    href: '/help-and-resources',
                    text: 'Help & resources',
                    type: 'direct',
                },
                items: [
                    {
                        id: 0,
                        type: 'direct',
                        href: '/help-centre',
                        text: 'Help centre',
                    },
                    {
                        id: 1,
                        type: 'direct',
                        href: '/deriv-blog',
                        text: 'Deriv blog',
                    },
                    {
                        id: 2,
                        type: 'direct',
                        href: '/economic-calendar',
                        text: 'Economic calendar',
                    },
                    {
                        id: 3,
                        type: 'direct',
                        href: '/deriv-trader',
                        text: 'Deriv Trader',
                    },
                    {
                        id: 4,
                        type: 'direct',
                        href: '/glossary',
                        text: 'Glossary',
                    },
                ],
            },
        ],
    },
}
