import React from 'react'
import { FooterItems } from '@deriv-com/blocks'
import {
    StandaloneFacebookIcon,
    StandaloneInstagramIcon,
    StandaloneLinkedinIcon,
    StandaloneTelegramIcon,
    StandaloneXTwitterIcon,
    StandaloneYoutubeIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Standalone'
import { DerivGoBannerAndAwards } from './banner-and-awards'
import { Localize } from 'components/localization'

export const RowFooterNavData: FooterItems[] = [
    {
        id: 0,
        layers: [
            {
                id: 0,
                header: <Localize translate_text="_t_ABOUT US_t_" />,
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/who-we-are',
                        text: <Localize translate_text="_t_Who we are_t_" />,
                    },
                    {
                        id: 1,
                        href: '/why-choose-us',
                        text: <Localize translate_text="_t_Why choose us_t_" />,
                    },
                    {
                        id: 3,
                        href: '/our-principles',
                        text: <Localize translate_text="_t_Our principles_t_" />,
                    },
                    {
                        id: 4,
                        href: '/partners',
                        text: <Localize translate_text="_t_Partnership programmes_t_" />,
                    },
                    {
                        id: 5,
                        href: '/contact_us',
                        text: <Localize translate_text="_t_Contact us_t_" />,
                    },
                    { id: 6, href: '/careers', text: <Localize translate_text="_t_Careers_t_" /> },
                    {
                        id: 7,
                        href: 'https://derivlife.com',
                        text: <Localize translate_text="_t_Deriv life_t_" />,
                    },
                ],
            },
        ],
    },
    {
        id: 1,
        layers: [
            {
                id: 0,
                header: <Localize translate_text="_t_TRADE TYPES_t_" />,
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/trade-types/cfds',
                        text: <Localize translate_text="_t_CFDs_t_" />,
                    },
                    {
                        id: 1,
                        href: '/trade-types/options',
                        text: <Localize translate_text="_t_Options_t_" />,
                    },
                    {
                        id: 2,
                        href: '/trade-types/multiplier',
                        text: <Localize translate_text="_t_Multipliers_t_" />,
                    },
                ],
            },
            {
                id: 1,
                header: <Localize translate_text="_t_MARKETS_t_" />,
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/markets/forex',
                        text: <Localize translate_text="_t_Forex_t_" />,
                    },
                    {
                        id: 1,
                        href: '/markets/synthetic',
                        text: <Localize translate_text="_t_Derived indices_t_" />,
                    },
                    {
                        id: 2,
                        href: '/markets/stock',
                        text: <Localize translate_text="_t_Stocks & indices_t_" />,
                    },
                    {
                        id: 3,
                        href: '/markets/exchange-traded-funds',
                        text: <Localize translate_text="_t_ETFs_t_" />,
                    },
                    {
                        id: 4,
                        href: '/markets/cryptocurrencies',
                        text: <Localize translate_text="_t_Cryptocurrencies_t_" />,
                    },
                    {
                        id: 5,
                        href: '/markets/commodities',
                        text: <Localize translate_text="_t_Commodities_t_" />,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        layers: [
            {
                id: 0,
                header: <Localize translate_text="_t_PLATFORMS_t_" />,
                type: 'link',
                items: [
                    { id: 0, href: '/dmt5', text: <Localize translate_text="_t_Deriv MT5_t_" /> },
                    { id: 1, href: '/derivx', text: <Localize translate_text="_t_Deriv X_t_" /> },
                    {
                        id: 2,
                        href: '/deriv-ctrader',
                        text: <Localize translate_text="_t_Deriv cTrader_t_" />,
                    },
                    {
                        id: 3,
                        href: '/deriv-go',
                        text: <Localize translate_text="_t_Deriv GO_t_" />,
                    },
                    {
                        id: 4,
                        href: '/dtrader',
                        text: <Localize translate_text="_t_Deriv Trader_t_" />,
                    },
                    {
                        id: 5,
                        href: 'https://smarttrader.deriv.com/',
                        text: <Localize translate_text="_t_SmartTrader_t_" />,
                    },
                    { id: 6, href: '/dbot', text: <Localize translate_text="_t_Deriv Bot_t_" /> },
                    {
                        id: 7,
                        href: 'https://bot.deriv.com/',
                        text: <Localize translate_text="_t_Binary Bot_t_" />,
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        layers: [
            {
                id: 0,
                header: <Localize translate_text="_t_SUPPORT_t_" />,
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/help-centre',
                        text: <Localize translate_text="_t_Help centre_t_" />,
                    },
                    {
                        id: 1,
                        href: 'https://community.deriv.com/',
                        text: <Localize translate_text="_t_Community_t_" />,
                    },
                    {
                        id: 2,
                        href: '/payment-methods',
                        text: <Localize translate_text="_t_Payment methods_t_" />,
                    },
                    {
                        id: 3,
                        href: 'https://deriv.statuspage.io/',
                        text: <Localize translate_text="_t_Status page_t_" />,
                    },
                    {
                        id: 4,
                        href: 'https://blog.deriv.com/',
                        text: <Localize translate_text="_t_Deriv Blog_t_" />,
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        layers: [
            {
                id: 0,
                header: <Localize translate_text="_t_LEGAL_t_" />,
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/regulatory',
                        text: <Localize translate_text="_t_Regulatory information_t_" />,
                    },
                    {
                        id: 1,
                        href: '/terms-and-conditions',
                        text: <Localize translate_text="_t_Terms & conditions_t_" />,
                    },
                    {
                        id: 2,
                        href: '/responsible',
                        text: <Localize translate_text="_t_Secure & responsible trading_t_" />,
                    },
                ],
            },
            {
                id: 1,
                header: <Localize translate_text="_t_PARTNERS_t_" />,
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/partners/deriv-prime',
                        text: <Localize translate_text="_t_Deriv Prime_t_" />,
                    },
                    {
                        id: 1,
                        href: '/partners/affiliate-ib',
                        text: <Localize translate_text="_t_Affiliates and IBs_t_" />,
                    },
                    {
                        id: 2,
                        href: '/partners/payment-agent',
                        text: <Localize translate_text="_t_Payment agents_t_" />,
                    },
                    {
                        id: 3,
                        href: 'https://api.deriv.com/',
                        text: <Localize translate_text="_t_API_t_" />,
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        layers: [
            {
                id: 0,
                type: 'node',
                node: <DerivGoBannerAndAwards />,
            },
        ],
    },
]

export const EuFooterNavData: FooterItems[] = [
    {
        id: 0,
        layers: [
            {
                id: 0,
                header: <Localize translate_text="_t_ABOUT US_t_" />,
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/who-we-are',
                        text: <Localize translate_text="_t_Who we are_t_" />,
                    },
                    {
                        id: 1,
                        href: '/why-choose-us',
                        text: <Localize translate_text="_t_Why choose us_t_" />,
                    },
                    {
                        id: 3,
                        href: '/our-principles',
                        text: <Localize translate_text="_t_Our principles_t_" />,
                    },
                    {
                        id: 4,
                        href: '/partners',
                        text: <Localize translate_text="_t_Partnership programmes_t_" />,
                    },
                    {
                        id: 5,
                        href: '/contact_us',
                        text: <Localize translate_text="_t_Contact us_t_" />,
                    },
                    { id: 6, href: '/careers', text: <Localize translate_text="_t_Careers_t_" /> },
                    {
                        id: 7,
                        href: 'https://derivlife.com',
                        text: <Localize translate_text="_t_Deriv life_t_" />,
                    },
                ],
            },
        ],
    },
    {
        id: 1,
        layers: [
            {
                id: 0,
                header: <Localize translate_text="_t_TRADE TYPES_t_" />,
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/trade-types/cfds',
                        text: <Localize translate_text="_t_CFDs_t_" />,
                    },
                    {
                        id: 1,
                        href: '/trade-types/options',
                        text: <Localize translate_text="_t_Options_t_" />,
                    },
                    {
                        id: 2,
                        href: '/trade-types/multiplier',
                        text: <Localize translate_text="_t_Multipliers_t_" />,
                    },
                ],
            },
            {
                id: 1,
                header: <Localize translate_text="_t_MARKETS_t_" />,
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/markets/forex',
                        text: <Localize translate_text="_t_Forex_t_" />,
                    },
                    {
                        id: 1,
                        href: '/markets/synthetic',
                        text: <Localize translate_text="_t_Derived indices_t_" />,
                    },
                    {
                        id: 2,
                        href: '/markets/stock',
                        text: <Localize translate_text="_t_Stocks & indices_t_" />,
                    },
                    {
                        id: 3,
                        href: '/markets/exchange-traded-funds',
                        text: <Localize translate_text="_t_ETFs_t_" />,
                    },
                    {
                        id: 4,
                        href: '/markets/cryptocurrencies',
                        text: <Localize translate_text="_t_Cryptocurrencies_t_" />,
                    },
                    {
                        id: 5,
                        href: '/markets/commodities',
                        text: <Localize translate_text="_t_Commodities_t_" />,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        layers: [
            {
                id: 0,
                header: <Localize translate_text="_t_PLATFORMS_t_" />,
                type: 'link',
                items: [
                    { id: 0, href: '/dmt5', text: <Localize translate_text="_t_Deriv MT5_t_" /> },
                    { id: 1, href: '/derivx', text: <Localize translate_text="_t_Deriv X_t_" /> },
                    {
                        id: 2,
                        href: '/deriv-ctrader',
                        text: <Localize translate_text="_t_Deriv cTrader_t_" />,
                    },
                    {
                        id: 3,
                        href: '/deriv-go',
                        text: <Localize translate_text="_t_Deriv GO_t_" />,
                    },
                    {
                        id: 4,
                        href: '/dtrader',
                        text: <Localize translate_text="_t_Deriv Trader_t_" />,
                    },
                    {
                        id: 5,
                        href: 'https://smarttrader.deriv.com/',
                        text: <Localize translate_text="_t_SmartTrader_t_" />,
                    },
                    { id: 6, href: '/dbot', text: <Localize translate_text="_t_Deriv Bot_t_" /> },
                    {
                        id: 7,
                        href: 'https://bot.deriv.com/',
                        text: <Localize translate_text="_t_Binary Bot_t_" />,
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        layers: [
            {
                id: 0,
                header: <Localize translate_text="_t_SUPPORT_t_" />,
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/help-centre',
                        text: <Localize translate_text="_t_Help centre_t_" />,
                    },
                    {
                        id: 1,
                        href: 'https://community.deriv.com/',
                        text: <Localize translate_text="_t_Community_t_" />,
                    },
                    {
                        id: 2,
                        href: '/payment-methods',
                        text: <Localize translate_text="_t_Payment methods_t_" />,
                    },
                    {
                        id: 3,
                        href: 'https://deriv.statuspage.io/',
                        text: <Localize translate_text="_t_Status page_t_" />,
                    },
                    {
                        id: 4,
                        href: 'https://blog.deriv.com/',
                        text: <Localize translate_text="_t_Deriv Blog_t_" />,
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        layers: [
            {
                id: 0,
                header: <Localize translate_text="_t_LEGAL_t_" />,
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/regulatory',
                        text: <Localize translate_text="_t_Regulatory information_t_" />,
                    },
                    {
                        id: 1,
                        href: '/terms-and-conditions',
                        text: <Localize translate_text="_t_Terms & conditions_t_" />,
                    },
                    {
                        id: 2,
                        href: '/responsible',
                        text: <Localize translate_text="_t_Secure & responsible trading_t_" />,
                    },
                ],
            },
            {
                id: 1,
                header: <Localize translate_text="_t_PARTNERS_t_" />,
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/partners/deriv-prime',
                        text: <Localize translate_text="_t_Deriv Prime_t_" />,
                    },
                    {
                        id: 1,
                        href: '/partners/affiliate-ib',
                        text: <Localize translate_text="_t_Affiliates and IBs_t_" />,
                    },
                    {
                        id: 2,
                        href: '/partners/payment-agent',
                        text: <Localize translate_text="_t_Payment agents_t_" />,
                    },
                    {
                        id: 3,
                        href: 'https://api.deriv.com/',
                        text: <Localize translate_text="_t_API_t_" />,
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        layers: [
            {
                id: 0,
                type: 'node',
                node: <DerivGoBannerAndAwards />,
            },
        ],
    },
]

export const warnText = (
    <Localize translate_text="_t_CFDs and other products offered on this website are complex instruments with high risk of losing money rapidly owing to leverage. You should consider whether you understand how these products work and whether you can afford to risk losing your money._t_" />
)

export const socialButtons = [
    {
        icon: <StandaloneFacebookIcon iconSize="md" />,
        href: 'https://www.facebook.com/derivdotcom',
    },
    {
        icon: <StandaloneInstagramIcon iconSize="md" />,
        href: 'https://www.instagram.com/deriv_official',
    },
    {
        icon: <StandaloneXTwitterIcon iconSize="md" />,
        href: 'https://twitter.com/derivdotcom/',
    },
    {
        icon: <StandaloneYoutubeIcon iconSize="md" />,
        href: 'https://www.youtube.com/@deriv',
    },
    {
        icon: <StandaloneLinkedinIcon iconSize="md" />,
        href: 'https://www.linkedin.com/company/derivdotcom/',
    },
    {
        icon: <StandaloneTelegramIcon iconSize="md" />,
        href: 'https://t.me/derivdotcomofficial',
    },
]
