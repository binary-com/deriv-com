import React from 'react'
import { SmartDisclaimerParagraph } from './types'
import Link from 'features/components/atoms/link'

export const disclaimerContent: SmartDisclaimerParagraph[] = [
    {
        id: 0,
        data: {
            text: '_t_Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority, Triq L-Imdina, Zone 1, Central Business District, Birkirkara CBD 1010, Malta, under the Investment Services Act (<0>licence</0>). The registered office of Deriv Investments (Europe) Limited is at W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR9033, Malta._t_',
            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'internal',
                        to: '/regulatory/Deriv_Investments_(Europe)_Limited.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
            ],
        },
        visibility: {
            is_non_eu_or_cpa_plan: true,
        },
    },
    {
        id: 1,
        data: {
            text: '_t_Deriv (FX) Ltd is licensed by Labuan Financial Services Authority (<0>licence</0>). The registered office of Deriv (FX) Ltd is at F16, Level 1, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia._t_',
            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'internal',
                        to: '/regulatory/Deriv_(FX)_Ltd.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'internal',
                        to: '/regulatory/Deriv_(BVI)_Ltd.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
            ],
        },
        visibility: {
            is_non_eu_or_cpa_plan: true,
        },
    },
    {
        id: 2,
        data: {
            text: '_t_Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission (<0>licence</0>). The registered office of Deriv (BVI) is at Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands._t_',
            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'internal',
                        to: '/regulatory/Deriv_(BVI)_Ltd.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
            ],
        },
        visibility: {
            is_non_eu_or_cpa_plan: true,
        },
    },
    {
        id: 3,
        data: {
            text: '_t_Deriv (V) Ltd is licensed and regulated by the Vanuatu Financial Services Commission (<0>licence</0>). The registered office of Deriv (V) Ltd is at 1276 Kumul Highway, Port Vila, Vanuatu._t_',
            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'internal',
                        to: '/regulatory/Deriv_(V)_Ltd.pdf',
                    }}
                    rel="noopener noreferrer"
                />,
            ],
        },
        visibility: {
            is_non_eu_or_cpa_plan: true,
        },
    },
    {
        id: 4,
        data: {
            text: '_t_Deriv (SVG) LLC has a registered office at Hinds Buildings, Kingstown, St. Vincent and the Grenadines._t_',
        },
        visibility: {
            is_non_eu_or_cpa_plan: true,
        },
    },
    {
        id: 5,
        data: {
            text: '_t_Deriv Holdings (Guernsey) Limited — 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ — is the holding company for the above subsidiaries._t_',
        },
        visibility: {
            is_non_eu_or_cpa_plan: true,
        },
    },
    {
        id: 6,
        data: {
            text: '_t_Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority under the Investment Services Act <0>(licence)</0>. The registered office of Deriv Investments (Europe) Limited is at W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR9033, Malta. _t_',
            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'internal',
                        to: '/regulatory/Deriv_Investments_(Europe)_Limited.pdf',
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
        id: 6,
        data: {
            text: '_t_Deriv Holdings (Guernsey) Limited — 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ — is the holding company for the above subsidiary._t_',
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
            text: '_t_Please remember that CFDs and other products offered on this website are complex derivatives and may not be suitable for all clients. Trading in these products carries a substantial risk of losing money rapidly._t_',
        },
        visibility: {
            is_non_eu: true,
            is_cpa_plan: false,
        },
    },
    {
        id: 1,
        data: {
            text: '_t_Make sure to read our <0>Terms and conditions</0>,<1> Risk disclosure</1>, and <2>Secure and responsible trading</2> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice._t_',
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
                        type: 'internal',
                        to: '/tnc/risk-disclosure.pdf',
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
            is_cpa_plan: false,
        },
    },
    {
        id: 2,
        data: {
            text: '_t_Please remember that CFDs and other products offered on this website are complex derivatives and may not be suitable for all clients. Trading in these products carries a substantial risk of losing money rapidly._t_',
        },
        visibility: {
            is_cpa_plan: true,
        },
    },
    {
        id: 3,
        data: {
            text: '_t_Make sure to read our <0>Terms and conditions</0>,<1> Risk disclosure</1>, and <2>Secure and responsible trading</2> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice._t_',
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
                        type: 'internal',
                        to: '/tnc/risk-disclosure.pdf',
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
            is_cpa_plan: true,
        },
    },
    {
        id: 4,
        data: {
            text: '_t_Please remember that CFDs and other products offered on this website are complex derivatives and may not be suitable for all clients. Trading in these products carries a substantial risk of losing money rapidly._t_',
        },
        visibility: {
            is_eu: true,
        },
    },
    {
        id: 5,
        data: {
            text: '_t_Make sure to read our <0>Terms and conditions</0>,<1> Risk disclosure</1>, and <2>Secure and responsible trading</2> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice._t_',
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
                        type: 'internal',
                        to: '/tnc/risk-disclosure-eu.pdf',
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
