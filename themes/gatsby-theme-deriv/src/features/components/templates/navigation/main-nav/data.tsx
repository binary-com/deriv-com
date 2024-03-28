import React from 'react'
import { NavLinkItems } from '@deriv-com/providers'
import {
    IllustrativeCfdsIcon,
    IllustrativeDerivedIcon,
    IllustrativeMultipliersIcon,
    IllustrativeOptionsIcon,
    IllustrativeForexIcon,
    IllustrativeCommoditiesIcon,
    IllustrativeCryptocurrenciesIcon,
    IllustrativeEtfIcon,
    IllustrativeStocksIcon,
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
import { Localize } from 'components/localization'

export const mainRowNavItems: NavLinkItems = {
    trade: {
        id: 0,
        type: 'nav-dropdown',
        text: <Localize translate_text="_t_Trade_t_" />,
        columns: [
            {
                id: 0,
                header: {
                    text: <Localize translate_text="_t_Trade types_t_" />,
                    type: 'text',
                },
                items: [
                    {
                        id: 0,
                        href: '/trade-types/cfds',
                        text: <Localize translate_text="_t_CFDs_t_" />,
                        type: 'direct',
                        icon: <IllustrativeCfdsIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Trade with leverage, unbeatable spreads, and fast execution on the widest range  of markets._t_" />
                        ),
                    },
                    {
                        id: 1,
                        href: '/trade-types/options',
                        text: <Localize translate_text="_t_Options_t_" />,
                        type: 'direct',
                        icon: <IllustrativeOptionsIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Trade diverse vanilla and exotic options across platforms and markets without risking more than your initial stake._t_" />
                        ),
                    },
                    {
                        id: 2,
                        href: '/trade-types/multiplier',
                        text: <Localize translate_text="_t_Multipliers_t_" />,
                        type: 'direct',
                        icon: <IllustrativeMultipliersIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Trade on global financial markets and multiply your potential profit without losing more than your stake._t_" />
                        ),
                    },
                ],
            },
            {
                id: 1,
                header: {
                    text: <Localize translate_text="_t_Trading platforms_t_" />,
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
                        description: (
                            <Localize translate_text="_t_The most popular and comprehensive CFDs platform._t_" />
                        ),
                    },
                    {
                        id: 1,
                        href: '/derivx',
                        text: <Localize translate_text="_t_Deriv X_t_" />,
                        type: 'direct',
                        icon: <DerivProductDerivXBrandDarkLogoIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_User-friendly and customisable CFDs platform._t_" />
                        ),
                    },
                    {
                        id: 2,
                        href: '/deriv-ctrader',
                        text: <Localize translate_text="_t_Deriv cTrader_t_" />,
                        type: 'direct',
                        icon: (
                            <PartnersProductDerivCtraderBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description: (
                            <Localize translate_text="_t_Fast CFDs platform with inbuilt copy trading._t_" />
                        ),
                    },
                    {
                        id: 3,
                        href: 'https://smarttrader.deriv.com/', //need to update target/type in link component
                        text: <Localize translate_text="_t_SmartTrader_t_" />,
                        type: 'direct',
                        icon: (
                            <PartnersProductSmarttraderBrandDarkLogoIcon width={24} height={24} />
                        ),
                        description: (
                            <Localize translate_text="_t_Options trading platform with easy navigation._t_" />
                        ),
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
                        text: <Localize translate_text="_t_Deriv Trader_t_" />,
                        type: 'direct',
                        icon: (
                            <DerivProductDerivTraderBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description: (
                            <Localize translate_text="_t_Flagship options, accumulators, and multipliers trading platform._t_" />
                        ),
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
                        description: (
                            <Localize translate_text="_t_Mobile app for multipliers trading on the go._t_" />
                        ),
                    },
                    {
                        id: 2,
                        href: '/dbot',
                        text: <Localize translate_text="_t_Deriv Bot_t_" />,
                        type: 'direct',
                        icon: (
                            <DerivProductDerivBotBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description: (
                            <Localize translate_text="_t_Automated trading. No coding required._t_" />
                        ),
                    },
                    {
                        id: 3,
                        href: 'https://bot.deriv.com/', //need to update target/type in link component
                        text: <Localize translate_text="_t_Binary Bot_t_" />,
                        type: 'direct',
                        icon: (
                            <PartnersProductBinaryBotBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description: (
                            <Localize translate_text="_t_Options trading platform with easy navigation._t_" />
                        ),
                        target: '_blank',
                    },
                ],
            },
        ],
    },
    markets: {
        id: 1,
        type: 'nav-dropdown',
        text: <Localize translate_text="_t_Markets_t_" />,
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/markets/forex',
                        text: <Localize translate_text="_t_Forex_t_" />,
                        type: 'direct',
                        icon: <IllustrativeForexIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Major, minor, and exotic  currency pairs._t_" />
                        ),
                    },
                    {
                        id: 1,
                        href: '/markets/synthetic',
                        text: <Localize translate_text="_t_Derived indices_t_" />,
                        type: 'direct',
                        icon: <IllustrativeDerivedIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Indices simulating real-world markets with 24/7 trading._t_" />
                        ),
                    },
                    {
                        id: 2,
                        href: '/markets/stock',
                        text: <Localize translate_text="_t_Stocks & indices_t_" />,
                        type: 'direct',
                        icon: <IllustrativeStocksIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Leading company stocks and top global indices._t_" />
                        ),
                    },
                ],
            },
            {
                id: 1,
                items: [
                    {
                        id: 0,
                        href: '/markets/commodities',
                        text: <Localize translate_text="_t_Commodities_t_" />,
                        type: 'direct',
                        icon: <IllustrativeCommoditiesIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_World markets including precious metals and energies._t_" />
                        ),
                    },
                    {
                        id: 1,
                        href: '/markets/cryptocurrencies',
                        text: <Localize translate_text="_t_Cryptocurrencies_t_" />,
                        type: 'direct',
                        icon: <IllustrativeCryptocurrenciesIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_The world’s most popular digital currencies._t_" />
                        ),
                    },
                    {
                        id: 2,
                        href: '/markets/exchange-traded-funds',
                        text: <Localize translate_text="_t_Exchange-traded funds (ETFs)_t_" />,
                        type: 'direct',
                        icon: <IllustrativeEtfIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Diverse exchange-traded funds for broad market exposure._t_" />
                        ),
                    },
                ],
            },
        ],
    },
    'about-us': {
        id: 2,
        type: 'nav-dropdown',
        text: <Localize translate_text="_t_About us_t_" />,
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/who-we-are',
                        text: <Localize translate_text="_t_Who we are_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/regulatory',
                        text: <Localize translate_text="_t_Regulatory information_t_" />,
                        type: 'direct',
                        isDesktopNavOnly: true,
                    },
                    {
                        id: 2,
                        href: '/why-choose-us',
                        text: <Localize translate_text="_t_Why choose us_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: '/partners',
                        text: <Localize translate_text="_t_Partnership programmes_t_" />,
                        type: 'direct',
                    },
                ],
            },
            {
                id: 1,
                items: [
                    {
                        id: 0,
                        href: '/contact-us',
                        text: <Localize translate_text="_t_Contact us_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/careers',
                        text: <Localize translate_text="_t_Careers_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: 'https://derivlife.com', //need to update target/type in link component
                        text: <Localize translate_text="_t_Deriv Life_t_" />,
                        type: 'direct',
                        external: true,
                        target: '_blank',
                    },
                ],
            },
        ],
    },
    resources: {
        id: 3,
        type: 'nav-dropdown',
        text: <Localize translate_text="_t_Resources_t_" />,
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/help-centre',
                        text: <Localize translate_text="_t_Help centre_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: 'https://community.deriv.com/', //need to update target/type in link component
                        text: <Localize translate_text="_t_Community_t_" />,
                        type: 'direct',
                        external: true,
                        target: '_blank',
                    },
                    {
                        id: 2,
                        href: '/trader-tools',
                        text: <Localize translate_text="_t_Traders' tools_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: '/payment-methods',
                        text: <Localize translate_text="_t_Payment methods_t_" />,
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
                        text: <Localize translate_text="_t_Deriv MT5 signals_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: 'https://deriv.statuspage.io/', //need to update target/type in link component
                        text: <Localize translate_text="_t_Status page_t_" />,
                        type: 'direct',
                        isMobileNavOnly: true,
                    },
                    {
                        id: 2,
                        href: 'https://blog.deriv.com/', //need to update target/type in link component
                        text: <Localize translate_text="_t_Deriv Blog_t_" />,
                        type: 'direct',
                        external: true,
                        target: '_blank',
                    },
                ],
            },
        ],
    },
    legal: {
        id: 4,
        type: 'nav-dropdown',
        text: <Localize translate_text="_t_Legal_t_" />,
        isMobileNavOnly: true,
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/regulatory',
                        text: <Localize translate_text="_t_Regulatory information_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/terms-and-conditions',
                        text: <Localize translate_text="_t_Terms & conditions_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: '/responsible',
                        text: <Localize translate_text="_t_Secure & responsible trading_t_" />,
                        type: 'direct',
                    },
                ],
            },
        ],
    },
    partners: {
        id: 5,
        type: 'nav-dropdown',
        text: <Localize translate_text="_t_Partners_t_" />,
        isMobileNavOnly: true,
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/partners/deriv-prime',
                        text: <Localize translate_text="_t_Deriv Prime_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/partners/affiliate-ib',
                        text: <Localize translate_text="_t_Affiliates and IBs_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: '/partners/payment-agent',
                        text: <Localize translate_text="_t_Payment agents_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: 'https://api.deriv.com/', //need to update target/type in link component
                        text: <Localize translate_text="_t_API_t_" />,
                        type: 'direct',
                    },
                ],
            },
        ],
    },
}

export const mainEuNavItems: NavLinkItems = {
    trade: {
        id: 0,
        type: 'nav-dropdown',
        text: <Localize translate_text="_t_Trade_t_" />,
        columns: [
            {
                id: 0,
                header: {
                    text: <Localize translate_text="_t_Trade types_t_" />,
                    type: 'text',
                },
                items: [
                    {
                        id: 0,
                        href: '/trade-types/cfds',
                        text: <Localize translate_text="_t_CFDs_t_" />,
                        type: 'direct',
                        icon: <IllustrativeCfdsIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Trade with leverage, unbeatable spreads, and fast execution on the widest range  of markets._t_" />
                        ),
                    },
                    {
                        id: 2,
                        href: '/trade-types/multiplier',
                        text: <Localize translate_text="_t_Multipliers_t_" />,
                        type: 'direct',
                        icon: <IllustrativeMultipliersIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Trade on global financial markets and multiply your potential profit without losing more than your stake._t_" />
                        ),
                    },
                ],
            },
            {
                id: 1,
                header: {
                    text: <Localize translate_text="_t_Trading platforms_t_" />,
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
                        description: (
                            <Localize translate_text="_t_The most popular and comprehensive CFDs platform._t_" />
                        ),
                    },
                    {
                        id: 1,
                        href: '/dtrader',
                        text: <Localize translate_text="_t_Deriv Trader_t_" />,
                        type: 'direct',
                        icon: (
                            <DerivProductDerivTraderBrandDarkLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                        ),
                        description: (
                            <Localize translate_text="_t_Flagship options, accumulators, and multipliers trading platform._t_" />
                        ),
                    },
                ],
            },
        ],
    },
    markets: {
        id: 1,
        type: 'nav-dropdown',
        text: <Localize translate_text="_t_Markets_t_" />,
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/markets/forex',
                        text: <Localize translate_text="_t_Forex_t_" />,
                        type: 'direct',
                        icon: <IllustrativeForexIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Major, minor, and exotic  currency pairs._t_" />
                        ),
                    },
                    {
                        id: 1,
                        href: '/markets/synthetic',
                        text: <Localize translate_text="_t_Derived indices_t_" />,
                        type: 'direct',
                        icon: <IllustrativeDerivedIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Indices simulating real-world markets with 24/7 trading._t_" />
                        ),
                    },
                    {
                        id: 2,
                        href: '/markets/stock',
                        text: <Localize translate_text="_t_Stocks & indices_t_" />,
                        type: 'direct',
                        icon: <IllustrativeStocksIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Leading company stocks and top global indices._t_" />
                        ),
                    },
                ],
            },
            {
                id: 1,
                items: [
                    {
                        id: 0,
                        href: '/markets/commodities',
                        text: <Localize translate_text="_t_Commodities_t_" />,
                        type: 'direct',
                        icon: <IllustrativeCommoditiesIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_World markets including precious metals and energies._t_" />
                        ),
                    },
                    {
                        id: 1,
                        href: '/markets/cryptocurrencies',
                        text: <Localize translate_text="_t_Cryptocurrencies_t_" />,
                        type: 'direct',
                        icon: <IllustrativeCryptocurrenciesIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_The world’s most popular digital currencies._t_" />
                        ),
                    },
                    {
                        id: 2,
                        href: '/markets/exchange-traded-funds',
                        text: <Localize translate_text="_t_Exchange-traded funds (ETFs)_t_" />,
                        type: 'direct',
                        icon: <IllustrativeEtfIcon width={24} height={24} />,
                        description: (
                            <Localize translate_text="_t_Diverse exchange-traded funds for broad market exposure._t_" />
                        ),
                    },
                ],
            },
        ],
    },
    'about-us': {
        id: 2,
        type: 'nav-dropdown',
        text: <Localize translate_text="_t_About us_t_" />,
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/who-we-are',
                        text: <Localize translate_text="_t_Who we are_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/regulatory',
                        text: <Localize translate_text="_t_Regulatory information_t_" />,
                        type: 'direct',
                        isDesktopNavOnly: true,
                    },
                    {
                        id: 2,
                        href: '/why-choose-us',
                        text: <Localize translate_text="_t_Why choose us_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: '/partners',
                        text: <Localize translate_text="_t_Partnership programmes_t_" />,
                        type: 'direct',
                    },
                ],
            },
            {
                id: 1,
                items: [
                    {
                        id: 0,
                        href: '/contact-us',
                        text: <Localize translate_text="_t_Contact us_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/careers',
                        text: <Localize translate_text="_t_Careers_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: 'https://derivlife.com', //need to update target/type in link component
                        text: <Localize translate_text="_t_Deriv Life_t_" />,
                        type: 'direct',
                        external: true,
                        target: '_blank',
                    },
                ],
            },
        ],
    },
    resources: {
        id: 3,
        type: 'nav-dropdown',
        text: <Localize translate_text="_t_Resources_t_" />,
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/help-centre',
                        text: <Localize translate_text="_t_Help centre_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: 'https://community.deriv.com/', //need to update target/type in link component
                        text: <Localize translate_text="_t_Community_t_" />,
                        type: 'direct',
                        external: true,
                        target: '_blank',
                    },
                    {
                        id: 2,
                        href: '/trader-tools',
                        text: <Localize translate_text="_t_Traders' tools_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: '/payment-methods',
                        text: <Localize translate_text="_t_Payment methods_t_" />,
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
                        text: <Localize translate_text="_t_Deriv MT5 signals_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: 'https://deriv.statuspage.io/', //need to update target/type in link component
                        text: <Localize translate_text="_t_Status page_t_" />,
                        type: 'direct',
                        isMobileNavOnly: true,
                    },
                    {
                        id: 2,
                        href: 'https://blog.deriv.com/', //need to update target/type in link component
                        text: <Localize translate_text="_t_Deriv Blog_t_" />,
                        type: 'direct',
                        external: true,
                        target: '_blank',
                    },
                ],
            },
        ],
    },
    legal: {
        id: 4,
        type: 'nav-dropdown',
        text: <Localize translate_text="_t_Legal_t_" />,
        isMobileNavOnly: true,
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/regulatory',
                        text: <Localize translate_text="_t_Regulatory information_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/terms-and-conditions',
                        text: <Localize translate_text="_t_Terms & conditions_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 2,
                        href: '/responsible',
                        text: <Localize translate_text="_t_Secure & responsible trading_t_" />,
                        type: 'direct',
                    },
                ],
            },
        ],
    },
    partners: {
        id: 5,
        type: 'nav-dropdown',
        text: <Localize translate_text="_t_Partners_t_" />,
        isMobileNavOnly: true,
        columns: [
            {
                id: 0,
                items: [
                    {
                        id: 0,
                        href: '/partners/deriv-prime',
                        text: <Localize translate_text="_t_Deriv Prime_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 1,
                        href: '/partners/affiliate-ib',
                        text: <Localize translate_text="_t_Affiliates_t_" />,
                        type: 'direct',
                    },
                    {
                        id: 3,
                        href: 'https://api.deriv.com/', //need to update target/type in link component
                        text: <Localize translate_text="_t_API_t_" />,
                        type: 'direct',
                    },
                ],
            },
        ],
    },
}
