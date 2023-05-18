import React from 'react'
import { SmartDisclaimerParagraph } from './types'
import Link from 'features/components/atoms/link'

export const disclaimerContent: SmartDisclaimerParagraph[] = [
    {
        id: 0,
        data: {
            text: '_t_Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority under the Investment Services Act (<0>licence</0>). Deriv Holdings (Guernsey) Limited is the holding company for the above subsidiary with the registration number 71479 and the registered address of 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ._t_',
            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: '/regulatory/Deriv_Investments_(Europe)_Limited.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
            ],
        },
        visibility: {
            is_eu: true,
        },
    },
    {
        id: 1,
        data: {
            text: '_t_Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority under the Investment Services Act (<0>licence</0>). Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority (<1>licence</1>). Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission (<2>licence</2>). Deriv (V) Ltd is licensed and regulated by the Vanuatu Financial Services Commission (<3>licence</3>). Deriv (SVG) LLC has a registered office at Hinds Buildings, Kingstown, St. Vincent and the Grenadines. Deriv Holdings (Guernsey) Limited is the holding company for the above subsidiaries with the registration number 71479 and the registered address of 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ._t_',
            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: '/regulatory/Deriv_Investments_(Europe)_Limited.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
                <Link
                    weight="bold"
                    key={1}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: '/regulatory/Deriv_(FX)_Ltd.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
                <Link
                    weight="bold"
                    key={2}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: '/regulatory/Deriv_(BVI)_Ltd.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
                <Link
                    weight="bold"
                    key={3}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: '/regulatory/Deriv_(V)_Ltd.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
            ],
        },
        visibility: {
            is_cpa_plan: true,
        },
    },
    {
        id: 2,
        data: {
            text: '_t_Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority (<0>licence</0>). Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission (<1>licence</1>). Deriv (V) Ltd is licensed and regulated by the Vanuatu Financial Services Commission (<2>licence</2>). Deriv (SVG) LLC has a registered office at Hinds Buildings, Kingstown, St. Vincent and the Grenadines. Deriv Holdings (Guernsey) Limited is the holding company for the above subsidiaries with the registration number 71479 and the registered address of 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ._t_',
            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: '/regulatory/Deriv_(FX)_Ltd.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
                <Link
                    weight="bold"
                    key={1}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: '/regulatory/Deriv_(BVI)_Ltd.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
                <Link
                    weight="bold"
                    key={2}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: '/regulatory/Deriv_(V)_Ltd.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
            ],
        },
        visibility: {
            is_eu: false,
            is_cpa_plan: false,
        },
    },
    {
        id: 3,
        data: {
            text: '_t_Please read our <0>Terms and conditions</0>,<1> Risk disclosure</1>, and <2>Secure and responsible trading</2> to fully understand the risks involved before using our services. The information on this website does not constitute investment advice._t_',
            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'internal',
                        to: '/terms-and-conditions/#clients',
                    }}
                />,
                <Link
                    weight="bold"
                    key={1}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: '/tnc/risk-disclosure.pdf',
                    }}
                />,
                <Link
                    weight="bold"
                    key={2}
                    target="_blank"
                    url={{
                        type: 'internal',
                        to: '/responsible/',
                    }}
                />,
            ],
        },
        visibility: {
            is_non_eu: true,
        },
    },
    {
        id: 4,
        data: {
            text: '_t_Please read our <0>Terms and conditions</0>,<1> Risk disclosure</1>, and <2>Secure and responsible trading</2> to fully understand the risks involved before using our services. The information on this website does not constitute investment advice._t_',
            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'internal',
                        to: '/terms-and-conditions/#clients',
                    }}
                />,
                <Link
                    weight="bold"
                    key={1}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: '/tnc/eu/risk-disclosure.pdf',
                    }}
                />,
                <Link
                    weight="bold"
                    key={2}
                    target="_blank"
                    url={{
                        type: 'internal',
                        to: '/responsible/',
                    }}
                />,
            ],
        },
        visibility: {
            is_eu: true,
        },
    },
]

export const riskWarningContent: SmartDisclaimerParagraph[] = [
    {
        id: 0,
        data: {
            text: '_t_CFDs and other products offered on this website are complex instruments with high risk of losing money rapidly owing to leverage. You should consider whether you understand how these products work and whether you can afford to risk losing your money._t_',
        },
        visibility: {
            is_non_eu: true,
        },
    },
]
