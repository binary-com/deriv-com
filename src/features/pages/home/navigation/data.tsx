import React from 'react'
import { NavLinkItems } from '@deriv-com/providers'
import {
    IllustrativeCfdsIcon,
    IllustrativeDerivedIcon,
    IllustrativeMultipliersIcon,
    IllustrativeOptionsIcon,
    IllustrativeForexIcon,
    IllustrativeStocksAndIndicesIcon,
    IllustrativeCommoditiesIcon,
    IllustrativeCryptocurrenciesIcon,
    IllustrativeEtfIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Illustrative'
import {
    DerivProductDerivBotBrandDarkLogoHorizontalIcon,
    DerivProductDerivGoBrandDarkLogoHorizontalIcon,
    DerivProductDerivTraderBrandDarkLogoHorizontalIcon,
    DerivProductDerivXBrandDarkLogoIcon,
    PartnersProductDerivCtraderBrandDarkLogoHorizontalIcon,
    PartnersProductDerivMt5BrandDarkLogoHorizontalIcon,
    PartnersProductSmarttraderBrandDarkLogoIcon,
    PartnersProductBinaryBotBrandDarkLogoHorizontalIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Logo'

export const mainRowNavItems: NavLinkItems = {
    trade: {
        id: 0,
        type: 'nav-dropdown',
        text: 'Trade',
        columns: [
            {
                id: 0,
                header: {
                    text: 'Trade types',
                    type: 'text',
                },
                items: [
                    {
                        id: 0,
                        href: '/trade-types/cfds',
                        text: 'CFDs',
                        type: 'direct',
                        icon: <IllustrativeCfdsIcon width={24} height={24} />,
                        description:
                            'Trade with leverage, unbeatable spreads, and fast execution on the widest range  of markets.',
                    },
                    {
                        id: 1,
                        href: '/trade-types/options',
                        text: 'Options',
                        type: 'direct',
                        icon: <IllustrativeOptionsIcon width={24} height={24} />,
                        description:
                            'Trade diverse vanilla and exotic options across platforms and markets without risking more than your initial stake.',
                    },
                    {
                        id: 2,
                        href: '/trade-types/multiplier',
                        text: 'Multipliers',
                        type: 'direct',
                        icon: <IllustrativeMultipliersIcon width={24} height={24} />,
                        description:
                            'Trade on global financial markets and multiply your potential profit without losing more than your stake.',
                    },
                ],
            },
            {
                id: 1,
                header: {
                    text: 'Trading platforms',
                    type: 'text',
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
                        description: 'The most popular and comprehensive CFDs platform.',
                    },
                    {
                        id: 1,
                        href: '/derivx',
                        text: 'Deriv X',
                        type: 'direct',
                        icon: <DerivProductDerivXBrandDarkLogoIcon width={24} height={24} />,
                        description: 'User-friendly and customisable CFDs platform.',
                    },
                    {
                        id: 2,
                        href: '/deriv-ctrader',
                        text: 'Deriv cTrader',
                        type: 'direct',
                        icon: (
                            <PartnersProductDerivCtraderBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description: 'Fast CFDs platform with inbuilt copy trading.',
                    },
                    {
                        id: 3,
                        href: 'https://smarttrader.deriv.com/', //need to update target/type in link component
                        text: 'SmartTrader',
                        type: 'direct',
                        icon: (
                            <PartnersProductSmarttraderBrandDarkLogoIcon width={24} height={24} />
                        ),
                        description: 'Options trading platform with easy navigation.',
                        target: '_blank',
                    },
                ],
            },
            {
                id: 2,
                header: {
                    text: null,
                    type: 'text',
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
                        description:
                            'Flagship options, accumulators, & multipliers trading platform.',
                    },
                    {
                        id: 1,
                        href: '/deriv-go',
                        text: 'Deriv GO',
                        type: 'direct',
                        icon: (
                            <DerivProductDerivGoBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description: 'Mobile app for multipliers trading on the go.',
                    },
                    {
                        id: 2,
                        href: '/dbot',
                        text: 'Deriv Bot',
                        type: 'direct',
                        icon: (
                            <DerivProductDerivBotBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description: 'Automated trading. No coding required.',
                    },
                    {
                        id: 3,
                        href: 'https://bot.deriv.com/', //need to update target/type in link component
                        text: 'Binary Bot',
                        type: 'direct',
                        icon: (
                            <PartnersProductBinaryBotBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description: 'Options trading platform with easy navigation.',
                        target: '_blank',
                    },
                ],
            },
        ],
    },
    markets: {
        id: 1,
        type: 'nav-dropdown',
        text: 'Markets',
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/markets/forex',
                        text: 'Forex',
                        type: 'direct',
                        icon: <IllustrativeForexIcon width={24} height={24} />,
                        description: 'Major, minor, and exotic  currency pairs.',
                    },
                    {
                        id: 1,
                        href: '/markets/synthetic',
                        text: 'Derived indices',
                        type: 'direct',
                        icon: <IllustrativeDerivedIcon width={24} height={24} />,
                        description: 'Indices simulating real-world markets with 24/7 trading',
                    },
                    {
                        id: 2,
                        href: '/markets/stock',
                        text: 'Stocks & indices',
                        type: 'direct',
                        icon: <IllustrativeStocksAndIndicesIcon width={24} height={24} />,
                        description: 'Leading company stocks and top global indices.',
                    },
                ],
            },
            {
                id: 1,
                items: [
                    {
                        id: 0,
                        href: '/markets/commodities',
                        text: 'Commodities',
                        type: 'direct',
                        icon: <IllustrativeCommoditiesIcon width={24} height={24} />,
                        description: 'World markets including precious metals and energies.',
                    },
                    {
                        id: 1,
                        href: '/markets/cryptocurrencies',
                        text: 'Cryptocurrencies',
                        type: 'direct',
                        icon: <IllustrativeCryptocurrenciesIcon width={24} height={24} />,
                        description: 'The world’s most popular digital currencies.',
                    },
                    {
                        id: 2,
                        href: '/markets/exchange-traded-funds',
                        text: 'Exchange-traded funds (ETFs)',
                        type: 'direct',
                        icon: <IllustrativeEtfIcon width={24} height={24} />,
                        description: 'Diverse exchange-traded funds for broad market exposure.',
                    },
                ],
            },
        ],
    },
    'about-us': {
        id: 2,
        type: 'nav-dropdown',
        text: 'About us',
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/who-we-are',
                        text: 'Who we are',
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/regulatory',
                        text: 'Regulatory information',
                        type: 'direct',
                        isDesktopNavOnly: true,
                    },
                    {
                        id: 2,
                        href: '/why-choose-us',
                        text: 'Why choose us',
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: '/partners',
                        text: 'Partnership programmes',
                        type: 'direct',
                    },
                ],
            },
            {
                id: 1,
                items: [
                    {
                        id: 0,
                        href: '/contact_us',
                        text: 'Contact us',
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/careers',
                        text: 'Careers',
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: 'https://derivlife.com', //need to update target/type in link component
                        text: 'Deriv Life',
                        type: 'direct',
                        external: true,
                    },
                ],
            },
        ],
    },
    resources: {
        id: 3,
        type: 'nav-dropdown',
        text: 'Resources',
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/help-centre',
                        text: 'Help centre',
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: 'https://community.deriv.com/', //need to update target/type in link component
                        text: 'Community',
                        type: 'direct',
                        external: true,
                    },
                    {
                        id: 2,
                        href: '/trader-tools',
                        text: "Traders' tools",
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: '/payment-methods',
                        text: 'Payment methods',
                        type: 'direct',
                    },
                ],
            },
            {
                id: 1,
                items: [
                    {
                        id: 0,
                        href: '/dmt5-trading-signals',
                        text: 'Deriv MT5 signals',
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: 'https://deriv.statuspage.io/', //need to update target/type in link component
                        text: 'Status page',
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: 'https://blog.deriv.com/', //need to update target/type in link component
                        text: 'Deriv Blog',
                        type: 'direct',
                        external: true,
                    },
                ],
            },
        ],
    },
    legal: {
        id: 4,
        type: 'nav-dropdown',
        text: 'Legal',
        isMobileNavOnly: true,
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/regulatory',
                        text: 'Regulatory information',
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/terms-and-conditions',
                        text: 'Terms & conditions',
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: '/responsible',
                        text: 'Secure & responsible trading',
                        type: 'direct',
                    },
                ],
            },
        ],
    },
    partners: {
        id: 5,
        type: 'nav-dropdown',
        text: 'Partners',
        isMobileNavOnly: true,
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/partners/deriv-prime',
                        text: 'Deriv Prime',
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/partners/affiliate-ib',
                        text: 'Affiliates and IBs',
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: '/partners/payment-agent',
                        text: 'Payment agents',
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: 'https://api.deriv.com/', //need to update target/type in link component
                        text: 'API',
                        type: 'direct',
                    },
                ],
            },
        ],
    },
}
