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
                    { id: 3, href: '/principles', text: 'Our principles' },
                    { id: 4, href: '/partnership', text: 'Partnership programmes' },
                    { id: 5, href: '/contact-us', text: 'Contact us' },
                    { id: 6, href: '/careers', text: 'Careers' },
                    { id: 7, href: '/deriv-life', text: 'Deriv life' },
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
                    { id: 0, href: '/cfds', text: 'CFDs' },
                    { id: 1, href: '/options', text: 'Options' },
                    { id: 2, href: '/multipliers', text: 'Multipliers' },
                ],
            },
            {
                id: 1,
                header: 'MARKETS',
                type: 'link',
                items: [
                    { id: 0, href: '/forex', text: 'Forex' },
                    { id: 1, href: '/derived-indices', text: 'Derived indices' },
                    { id: 2, href: '/stocks-and-indices', text: 'Stocks & indices' },
                    { id: 3, href: '/etfs', text: 'ETFs' },
                    { id: 4, href: '/cryptocurrencies', text: 'Cryptocurrencies' },
                    { id: 5, href: '/commodities', text: 'Commodities' },
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
                    { id: 0, href: '/deriv-mt5', text: 'Deriv MT5' },
                    { id: 1, href: '/deriv-x', text: 'Deriv X' },
                    { id: 2, href: '/deriv-ctrader', text: 'Deriv cTrader' },
                    { id: 3, href: '/deriv-go', text: 'Deriv GO' },
                    { id: 4, href: '/deriv-trader', text: 'Deriv Trader' },
                    { id: 5, href: '/smarttrader', text: 'SmartTrader' },
                    { id: 6, href: '/deriv-bot', text: 'Deriv Bot' },
                    { id: 7, href: '/binary-bot', text: 'Binary Bot' },
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
                    { id: 0, href: '/', text: 'Help centre' },
                    { id: 1, href: '/', text: 'Community' },
                    { id: 2, href: '/', text: 'Payment methods' },
                    { id: 3, href: '/', text: 'Status page' },
                    { id: 4, href: '/', text: 'Deriv Blog' },
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
                    { id: 2, href: '/secure', text: 'Secure & responsible trading' },
                ],
            },
            {
                id: 1,
                header: 'PARTNERS',
                type: 'link',
                items: [
                    { id: 0, href: '/', text: 'Deriv Prime' },
                    { id: 1, href: '/', text: 'Affiliates and IBs' },
                    { id: 2, href: '/', text: 'Payment agents' },
                    { id: 3, href: '/', text: 'API' },
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
        href: '/fb',
    },
    {
        icon: <StandaloneInstagramIcon iconSize="md" />,
        href: '/insta',
    },
    {
        icon: <StandaloneXTwitterIcon iconSize="md" />,
        href: '/twitter',
    },
    {
        icon: <StandaloneYoutubeIcon iconSize="md" />,
        href: '/youtube',
    },
    {
        icon: <StandaloneLinkedinIcon iconSize="md" />,
        href: '/linkedin',
    },
    {
        icon: <StandaloneTelegramIcon iconSize="md" />,
        href: '/telegram',
    },
]
