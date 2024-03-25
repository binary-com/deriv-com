import React from 'react'
import { FooterItems } from '@deriv-com/blocks'
import {
    StandaloneFacebookIcon,
    StandaloneInstagramIcon,
    StandaloneLinkedinIcon,
    StandaloneXTwitterIcon,
    StandaloneYoutubeIcon,
    StandaloneTelegramIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Standalone'
import { DerivGoBanner } from './deriv-go-banner'
import { IIPAward } from './iip-award'
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
                        text: <Localize translate_text="_t_Principles_t_" />,
                    },
                    {
                        id: 4,
                        href: '/partners',
                        text: <Localize translate_text="_t_Partnership programmes_t_" />,
                    },
                    {
                        id: 5,
                        href: '/contact-us',
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
            {
                id: 1,
                type: 'node',
                node: <IIPAward />,
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
                    { id: 0, href: '/dmt5', text: 'Deriv MT5' },
                    { id: 1, href: '/derivx', text: 'Deriv X' },
                    {
                        id: 2,
                        href: '/deriv-ctrader',
                        text: <Localize translate_text="_t_Deriv cTrader_t_" />,
                    },
                    {
                        id: 3,
                        href: '/deriv-go',
                        text: 'Deriv GO',
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
                        target: '_blank',
                    },
                    { id: 6, href: '/dbot', text: <Localize translate_text="_t_Deriv Bot_t_" /> },
                    {
                        id: 7,
                        href: 'https://bot.deriv.com/',
                        text: <Localize translate_text="_t_Binary Bot_t_" />,
                        target: '_blank',
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
                        href: '/terms-and-conditions/#clients',
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
                node: <DerivGoBanner />,
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
                        text: <Localize translate_text="_t_Principles_t_" />,
                    },
                    {
                        id: 4,
                        href: '/partners',
                        text: <Localize translate_text="_t_Partnership programmes_t_" />,
                    },
                    {
                        id: 5,
                        href: '/contact-us',
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
            {
                id: 1,
                type: 'node',
                node: <IIPAward />,
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
                        href: '/trade-types/multiplier',
                        text: <Localize translate_text="_t_Multipliers_t_" />,
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
        id: 3,
        layers: [
            {
                id: 0,
                header: <Localize translate_text="_t_PLATFORMS_t_" />,
                type: 'link',
                items: [
                    { id: 0, href: '/dmt5', text: 'Deriv MT5' },
                    {
                        id: 1,
                        href: '/dtrader',
                        text: <Localize translate_text="_t_Deriv Trader_t_" />,
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
        id: 5,
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
                        href: '/terms-and-conditions/#clients',
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
                        text: <Localize translate_text="_t_Affiliates_t_" />,
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
]

export const warnText = (
    <Localize translate_text="_t_The products offered on our website are complex derivative products that carry a significant risk of potential loss. CFDs are complex instruments with a high risk of losing money rapidly due to leverage. You should consider whether you understand how these products work and whether you can afford to take the high risk of losing your money._t_" />
)

export const socialButtonsROW = [
    {
        icon: <StandaloneFacebookIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.facebook.com/derivdotcom',
        'data-cy': 'facebook',
        'aria-label': 'facebook',
    },
    {
        icon: <StandaloneInstagramIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.instagram.com/deriv_official',
        'data-cy': 'instagram',
        'aria-label': 'instagram',
    },
    {
        icon: <StandaloneXTwitterIcon iconSize="md" fill="#000000b8" />,
        href: 'https://twitter.com/derivdotcom/',
        'data-cy': 'twitter',
        'aria-label': 'twitter',
    },
    {
        icon: <StandaloneYoutubeIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.youtube.com/@deriv',
        'data-cy': 'youtube',
        'aria-label': 'youtube',
    },
    {
        icon: <StandaloneLinkedinIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.linkedin.com/company/derivdotcom/',
        'data-cy': 'linkedin',
        'aria-label': 'linkedin',
    },
    {
        icon: <StandaloneTelegramIcon iconSize="md" fill="#000000b8" />,
        href: 'https://t.me/Derivchannelofficial',
        'data-cy': 'telegram',
        'aria-label': 'telegram',
    },
]

export const socialButtonsEU = [
    {
        icon: <StandaloneFacebookIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.facebook.com/DerivEU',
        'data-cy': 'facebook',
        'aria-label': 'facebook',
    },
    {
        icon: <StandaloneInstagramIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.instagram.com/deriv_eu/',
        'data-cy': 'instagram',
        'aria-label': 'instagram',
    },
    {
        icon: <StandaloneXTwitterIcon iconSize="md" fill="#000000b8" />,
        href: 'https://twitter.com/deriv_eu/',
        'data-cy': 'twitter',
        'aria-label': 'twitter',
    },
    {
        icon: <StandaloneYoutubeIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.youtube.com/@deriv',
        'data-cy': 'youtube',
        'aria-label': 'youtube',
    },
    {
        icon: <StandaloneLinkedinIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.linkedin.com/company/derivdotcom/',
        'data-cy': 'linkedin',
        'aria-label': 'linkedin',
    },
]

export const socialButtonsCPA = [
    {
        icon: <StandaloneFacebookIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.facebook.com/derivdotcom',
        'data-cy': 'facebook',
        'aria-label': 'facebook',
    },
    {
        icon: <StandaloneInstagramIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.instagram.com/deriv_official',
        'data-cy': 'instagram',
        'aria-label': 'instagram',
    },
    {
        icon: <StandaloneXTwitterIcon iconSize="md" fill="#000000b8" />,
        href: 'https://twitter.com/derivdotcom/',
        'data-cy': 'twitter',
        'aria-label': 'twitter',
    },
    {
        icon: <StandaloneYoutubeIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.youtube.com/@deriv',
        'data-cy': 'youtube',
        'aria-label': 'youtube',
    },
    {
        icon: <StandaloneLinkedinIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.linkedin.com/company/derivdotcom/',
        'data-cy': 'linkedin',
        'aria-label': 'linkedin',
    },
]

export const socialButtonsCareers = [
    {
        icon: <StandaloneFacebookIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.facebook.com/derivcareers',
        'data-cy': 'facebook',
        'aria-label': 'facebook',
    },
    {
        icon: <StandaloneInstagramIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.instagram.com/derivcareers/',
        'data-cy': 'instagram',
        'aria-label': 'instagram',
    },
    {
        icon: <StandaloneLinkedinIcon iconSize="md" fill="#000000b8" />,
        href: 'https://www.linkedin.com/company/derivdotcom/life/',
        'data-cy': 'linkedin',
        'aria-label': 'linkedin',
    },
]

export const specialLanguageUrls = {
    ar: {
        instagram: 'https://www.instagram.com/deriv_ar/',
        twitter: 'https://twitter.com/DerivArabic',
        facebook: 'https://www.facebook.com/derivarabic',
    },
    fr: {
        instagram: 'https://www.instagram.com/deriv_french/',
        twitter: 'https://twitter.com/DerivFrench',
        facebook: 'https://www.facebook.com/FrenchDeriv/',
    },
    ru: {
        instagram: 'https://www.instagram.com/deriv_russian/',
        twitter: 'https://twitter.com/DerivRussian',
        facebook: 'https://www.facebook.com/RussianDeriv',
    },
    es: {
        instagram: 'https://www.instagram.com/deriv_espanol/',
        twitter: 'https://twitter.com/derivespanol',
        facebook: 'https://www.facebook.com/derivespanol',
    },
    pt: {
        instagram: 'https://www.instagram.com/deriv_portugues/',
        twitter: 'https://twitter.com/DerivPortugues',
        facebook: 'https://www.facebook.com/derivportugues',
    },
}
