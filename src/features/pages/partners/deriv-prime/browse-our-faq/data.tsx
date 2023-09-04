import React from 'react'
import FAQCommercialPlan from './faq-commercial-plan'
import { DerivPrimeFAQDataItem } from './types'

export const general_faq_data: DerivPrimeFAQDataItem[] = [
    {
        id: 1,
        question: '_t_Who is Deriv Prime?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Deriv Prime is the institutional arm of Deriv Group, and staying true to its guiding principles, effectively democratises liquidity provision to financial institutions._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_No matter if you are large, small, or have just started, Deriv Prime will provide top-of-book liquidity solutions with very fast execution at unmatched fair pricing and conditions._t_',
            },
        ],
    },
    {
        id: 2,
        question: '_t_Who can partner with Deriv Prime?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Deriv Prime partners with regulated financial institutions, including:_t_',
            },
            {
                id: 2,
                type: 'list',
                list_items: [
                    '_t_- Brokerage firms_t_',
                    '_t_- Asset managers_t_',
                    '_t_- Investment funds_t_',
                    '_t_- Professional trading groups / professional traders_t_',
                    '_t_- Corporate clients_t_',
                    '_t_- Other financial institutions_t_',
                ],
            },
        ],
    },
    {
        id: 3,
        question: '_t_What is the liquidity solution offering?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_As a liquidity solutions provider, Deriv Prime offers institutional trading services and access to global financial markets through a single point of integration. This encompasses trading assets in the forex, commodities, equities, indices, ETFs, and cryptocurrencies markets._t_',
            },
        ],
    },
    {
        id: 4,
        question: '_t_What is the onboarding procedure?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_To onboard with Deriv Prime’s liquidity solution and trading services, you will need to follow a streamlined process:_t_',
            },
            {
                id: 2,
                type: 'list',
                list_items: [
                    '_t_1. Account application: Contact us to connect with a dedicated support team to guide you through the entire onboarding journey._t_',
                    '_t_2. Verification: Satisfy all compliance and regulatory requirements including Know Your Business (KYB) requirements._t_',
                    '_t_3. Margin account settlement: Fund your margin account to meet the minimum balance based on our scalable commercial plan._t_',
                    '_t_4. Connectivity: Integrate with our platform using your preferred connectivity method._t_',
                ],
            },
        ],
    },
]

export const terms_cooperation_data: DerivPrimeFAQDataItem[] = [
    {
        id: 1,
        question: '_t_How does Deriv Prime’s liquidity solution pricing work?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_<strong>Connectivity and Integration</strong>_t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_You are responsible for any connectivity or bridging fees charged by third-party providers to transact through our platform._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_<strong><br/>Minimum volume processing fee</strong>_t_',
            },
            {
                id: 4,
                type: 'text',
                text: '_t_A monthly service fee of USD 1,500 will be charged at the end of each month. The fee is accrued and only charged if the minimum volume requirements are not exceeded._t_',
            },
            {
                id: 5,
                type: 'text',
                text: '_t_<strong><br/>Institutional swaps</strong>_t_',
            },
            {
                id: 6,
                type: 'text',
                text: '_t_You will be charged daily with institutional swaps._t_',
            },
            {
                id: 7,
                type: 'text',
                text: '_t_<strong><br/>Commissions</strong> on institutional trading via Deriv Prime will be charged on trades per million, per side (see table below). For equities, indices, and ETFs, commissions are charged per contract per side. For cryptocurrencies, commissions are charged in basis points, per side._t_',
            },
            {
                id: 8,
                type: 'custom_component',
                component: <FAQCommercialPlan />,
            },
        ],
    },
    {
        id: 2,
        question: '_t_Are investments segregated from Deriv’s Group business funds?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, Deriv Prime’s partner funds are held in segregated client accounts that are separate from Deriv’s Group business activities._t_',
            },
        ],
    },
    {
        id: 3,
        question: '_t_Does Deriv Prime provide any support?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you will receive dedicated relationship managers to provide customised support and guidance along with technical support for connectivity, testing, and deployment for your trading operations._t_',
            },
        ],
    },
    {
        id: 4,
        question: '_t_What connectivity methods are available with Deriv Prime?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_You can connect to your trusted bridge partner via a FIX API protocol connection._t_',
            },
        ],
    },
    {
        id: 5,
        question: '_t_Which currencies are accepted for funding?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_You can fund your margin account with EUR, USD and GBP. If you wish to use other currencies, please reach out to us and we will review your request._t_',
            },
        ],
    },
]
