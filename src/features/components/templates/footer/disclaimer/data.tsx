import React from 'react'
import { SmartDisclaimerParagraph } from './types'
import Link from 'features/components/atoms/link'

export const disclaimerContent: SmartDisclaimerParagraph[] = [
    {
        id: 0,
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
        id: 1,
        data: {
            text: '_t_Make sure href read our <0>Terms and conditions</0>,<1> Risk disclosure</1>, and <2>Secure and responsible trading</2> href fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice._t_',
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
                        href: '/tnc/risk-disclosure-eu.pdf',
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
            text: '_t_CFDs and other products offered on this website are complex instruments with high risk of losing money rapidly owing to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money._t_',
        },
        visibility: {
            is_non_eu: true,
        },
    },
]
