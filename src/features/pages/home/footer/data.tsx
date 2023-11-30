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

export const footerNavData: FooterItems[] = [
    {
        id: 0,
        layers: [
            {
                id: 0,
                header: 'ABOUT US',
                type: 'link',
                items: [
                    {
                        id: 0,
                        href: '/who-we-are',
                        text: 'Who we are',
                    },
                    {
                        id: 1,
                        href: '/why-choose-us',
                        text: 'Why choose us',
                    },
                    { id: 3, href: '/our-principles', text: 'Our principles' },
                    { id: 4, href: '/partners', text: 'Partnership programmes' },
                    { id: 5, href: '/contact_us', text: 'Contact us' },
                    { id: 6, href: '/careers', text: 'Careers' },
                    { id: 7, href: 'https://derivlife.com', text: 'Deriv life' },
                ],
            },
        ],
    },
    {
        id: 1,
        layers: [
            {
                id: 0,
                header: 'TRADE TYPES',
                type: 'link',
                items: [
                    { id: 0, href: '/trade-types/cfds', text: 'CFDs' },
                    { id: 1, href: '/trade-types/options', text: 'Options' },
                    { id: 2, href: '/trade-types/multiplier', text: 'Multipliers' },
                ],
            },
            {
                id: 1,
                header: 'MARKETS',
                type: 'link',
                items: [
                    { id: 0, href: '/markets/forex', text: 'Forex' },
                    { id: 1, href: '/markets/synthetic', text: 'Derived indices' },
                    { id: 2, href: '/markets/stock', text: 'Stocks & indices' },
                    { id: 3, href: '/markets/exchange-traded-funds', text: 'ETFs' },
                    { id: 4, href: '/markets/cryptocurrencies', text: 'Cryptocurrencies' },
                    { id: 5, href: '/markets/commodities', text: 'Commodities' },
                ],
            },
        ],
    },
    {
        id: 2,
        layers: [
            {
                id: 0,
                header: 'PLATFORMS',
                type: 'link',
                items: [
                    { id: 0, href: '/dmt5', text: 'Deriv MT5' },
                    { id: 1, href: '/derivx', text: 'Deriv X' },
                    { id: 2, href: '/deriv-ctrader', text: 'Deriv cTrader' },
                    { id: 3, href: '/deriv-go', text: 'Deriv GO' },
                    { id: 4, href: '/dtrader', text: 'Deriv Trader' },
                    { id: 5, href: 'https://smarttrader.deriv.com/', text: 'SmartTrader' },
                    { id: 6, href: '/dbot', text: 'Deriv Bot' },
                    { id: 7, href: 'https://bot.deriv.com/', text: 'Binary Bot' },
                ],
            },
        ],
    },
    {
        id: 3,
        layers: [
            {
                id: 0,
                header: 'SUPPORT',
                type: 'link',
                items: [
                    { id: 0, href: '/help-centre', text: 'Help centre' },
                    { id: 1, href: 'https://community.deriv.com/', text: 'Community' },
                    { id: 2, href: '/payment-methods', text: 'Payment methods' },
                    { id: 3, href: 'https://deriv.statuspage.io/', text: 'Status page' },
                    { id: 4, href: 'https://blog.deriv.com/', text: 'Deriv Blog' },
                ],
            },
        ],
    },
    {
        id: 4,
        layers: [
            {
                id: 0,
                header: 'LEGAL',
                type: 'link',
                items: [
                    { id: 0, href: '/regulatory', text: 'Regulatory information' },
                    { id: 1, href: '/terms-and-conditions', text: 'Terms & conditions' },
                    { id: 2, href: '/responsible', text: 'Secure & responsible trading' },
                ],
            },
            {
                id: 1,
                header: 'PARTNERS',
                type: 'link',
                items: [
                    { id: 0, href: '/partners/deriv-prime', text: 'Deriv Prime' },
                    { id: 1, href: '/partners/affiliate-ib', text: 'Affiliates and IBs' },
                    { id: 2, href: '/partners/payment-agent', text: 'Payment agents' },
                    { id: 3, href: 'https://api.deriv.com/', text: 'API' },
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

export const warnText =
    'CFDs and other products offered on this website are complex instruments with high risk of losing money rapidly owing to leverage. You should consider whether you understand how these products work and whether you can afford to risk losing your money.'

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
