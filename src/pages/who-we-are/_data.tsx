import React, { ReactElement } from 'react'
import { Localize, localize } from 'components/localization'
import Shield from 'images/svg/who-we-are/shield.svg'
import Star from 'images/svg/who-we-are/star.svg'
import People from 'images/svg/who-we-are/people.svg'
import Hands from 'images/svg/who-we-are/hands.svg'
import { all_offices, all_countries } from 'pages/careers/_model/_locations/_locations'

type FirstSectionTextsType = {
    text: ReactElement
}

export const first_section_texts: FirstSectionTextsType[] = [
    {
        text: (
            <Localize translate_text="Deriv is one of the world’s largest online brokers. We offer CFDs and other derivatives on forex, indices, cryptocurrencies, commodities, and synthetics to millions of registered users across the globe." />
        ),
    },
    {
        text: (
            <Localize translate_text="From inception, our goal was to break free of the high commissions and clunky products offered by traditional brokers. Also, we aim to deliver a first-class experience to digitally inclined traders, regardless of the size of their accounts." />
        ),
    },
    {
        text: (
            <Localize translate_text="In a journey spanning more than 22 years, we have grown to over 2.5 million customers worldwide. But our mission has remained the same." />
        ),
    },
]

type ValueType = {
    title: ReactElement
    text: ReactElement
    icon: string
}

export const our_values: ValueType[] = [
    {
        title: <Localize translate_text="Integrity" />,
        text: (
            <Localize translate_text="We serve our customers with fairness and transparency. We settle all contracts by the book and speak plainly and truthfully." />
        ),
        icon: Shield,
    },
    {
        title: <Localize translate_text="Customer focus" />,
        text: (
            <Localize translate_text="We put the customer first and strive to build products that deliver the best customer experience." />
        ),
        icon: People,
    },
    {
        title: <Localize translate_text="Competence" />,
        text: (
            <Localize translate_text="We value colleagues with an aptitude to learn and grow and the ability to use good judgement." />
        ),
        icon: Star,
    },
    {
        title: <Localize translate_text="Teamwork" />,
        text: (
            <Localize translate_text="We value team players that collaborate freely across departments with humility and ambition." />
        ),
        icon: Hands,
    },
]

type PrincipleType = {
    title: ReactElement
    text: ReactElement
    color: string
}

export const our_principles: PrincipleType[] = [
    {
        title: <Localize translate_text="Be reliable" />,
        text: (
            <Localize translate_text="We settle all contracts fairly, process all deposits and withdrawals promptly, and provide reliable support and a high-quality trading experience to all our customers." />
        ),
        color: 'rgba(133, 189, 177, 0.25)',
    },
    {
        title: <Localize translate_text="Be fair" />,
        text: (
            <Localize translate_text="We treat all customers equitably, handle complaints with integrity, and offer competitive prices with no hidden costs and no artificial barriers on customer withdrawals." />
        ),
        color: 'rgba(255, 195, 89, 0.25)',
    },
    {
        title: <Localize translate_text="Be transparent" />,
        text: (
            <Localize translate_text="We speak plainly to avoid ambiguity, disclose the terms of all contracts, and are clear about the risks of trading and how we make money." />
        ),
        color: 'rgba(150, 133, 189, 0.25)',
    },
    {
        title: <Localize translate_text="Be responsible" />,
        text: (
            <Localize translate_text="We don’t practise hard-selling, offer financial or trading advice, nor make promises of guaranteed returns. We don’t encourage vulnerable people to trade and implement controls to prevent any unlawful activity." />
        ),
        color: 'rgba(119, 160, 198, 0.25)',
    },
]

export type MapPinType = {
    left: string
    top: string
    title: ReactElement
    link: string
}

export const desktop_pins: MapPinType[] = [
    {
        left: '30%',
        top: '74%',
        title: <Localize translate_text="Asunción, Paraguay" />,
        link: '/careers/locations/asuncion',
    },
    {
        left: '31%',
        top: '76%',
        title: <Localize translate_text="Ciudad del Este, Paraguay" />,
        link: '/careers/locations/ciudad',
    },
    {
        left: '23.5%',
        top: '50%',
        title: <Localize translate_text="George Town, Cayman Islands" />,
        link: '/careers/locations/georgetown',
    },
    {
        left: '50%',
        top: '39.5%',
        title: <Localize translate_text="Birkirkara, Malta" />,
        link: '/careers/locations/malta',
    },
    {
        left: '55%',
        top: '40%',
        title: <Localize translate_text="Limassol, Cyprus" />,
        link: '/careers/locations/cyprus',
    },
    {
        left: '56%',
        top: '43%',
        title: <Localize translate_text="Amman, Jordan" />,
        link: '/careers/locations/jordan',
    },
    {
        left: '54%',
        top: '61.5%',
        title: <Localize translate_text="Kigali, Rwanda" />,
        link: '/careers/locations/rwanda',
    },
    {
        left: '54%',
        top: '27.5%',
        title: <Localize translate_text="Minsk, Belarus" />,
        link: '/careers/locations/minsk',
    },
    {
        left: '61.5%',
        top: '45.9%',
        title: <Localize translate_text="Dubai, UAE" />,
        link: '/careers/locations/dubai',
    },
    {
        left: '73.3%',
        top: '57.5%',
        title: <Localize translate_text="Ipoh, Malaysia" />,
        link: '/careers/locations/ipoh',
    },
    {
        left: '74.2%',
        top: '58.5%',
        title: <Localize translate_text="Cyberjaya, Malaysia" />,
        link: '/careers/locations/cyberjaya',
    },
    {
        left: '74.2%',
        top: '60.6%',
        title: <Localize translate_text="Melaka, Malaysia" />,
        link: '/careers/locations/melaka',
    },
    {
        left: '77.2%',
        top: '58.7%',
        title: <Localize translate_text="Labuan, Malaysia" />,
        link: '/careers/locations/labuan',
    },
    {
        left: '47.4%',
        top: '30.9%',
        title: <Localize translate_text="Paris, France" />,
        link: '/careers/locations/paris',
    },
    {
        left: '49.4%',
        top: '27.9%',
        title: <Localize translate_text="Berlin, Germany" />,
        link: '/careers/locations/berlin',
    },
    {
        left: '44.5%',
        top: '30.9%',
        title: <Localize translate_text="Guernsey, Channel Islands" />,
        link: '/careers/locations/guernsey',
    },
    {
        left: '92.2%',
        top: '69.7%',
        title: <Localize translate_text="Port Vila, Vanuatu" />,
        link: '/careers/locations/vanuatu',
    },
    {
        left: '74.6%',
        top: '61%',
        title: <Localize translate_text="Singapore, Singapore" />,
        link: '/careers/locations/singapore',
    },
]

export const mobile_pins: MapPinType[] = [
    {
        left: '28.5%',
        top: '71%',
        title: <Localize translate_text="Asunción, Paraguay" />,
        link: '/careers/locations/asuncion',
    },
    {
        left: '30%',
        top: '75%',
        title: <Localize translate_text="Ciudad del Este, Paraguay" />,
        link: '/careers/locations/ciudad',
    },
    {
        left: '22%',
        top: '48%',
        title: <Localize translate_text="George Town, Cayman Islands" />,
        link: '/careers/locations/georgetown',
    },
    {
        left: '48.5%',
        top: '35.5%',
        title: <Localize translate_text="Birkirkara, Malta" />,
        link: '/careers/locations/malta',
    },
    {
        left: '53.5%',
        top: '36%',
        title: <Localize translate_text="Limassol, Cyprus" />,
        link: '/careers/locations/cyprus',
    },
    {
        left: '56.5%',
        top: '37%',
        title: <Localize translate_text="Amman, Jordan" />,
        link: '/careers/locations/jordan',
    },
    {
        left: '52.5%',
        top: '57.5%',
        title: <Localize translate_text="Kigali, Rwanda" />,
        link: '/careers/locations/rwanda',
    },
    {
        left: '52.5%',
        top: '23.5%',
        title: <Localize translate_text="Minsk, Belarus" />,
        link: '/careers/locations/minsk',
    },
    {
        left: '60%',
        top: '41.9%',
        title: <Localize translate_text="Dubai, UAE" />,
        link: '/careers/locations/dubai',
    },
    {
        left: '72.3%',
        top: '51.2%',
        title: <Localize translate_text="Ipoh, Malaysia" />,
        link: '/careers/locations/ipoh',
    },
    {
        left: '71%',
        top: '55%',
        title: <Localize translate_text="Cyberjaya, Malaysia" />,
        link: '/careers/locations/cyberjaya',
    },
    {
        left: '73%',
        top: '56.7%',
        title: <Localize translate_text="Melaka, Malaysia" />,
        link: '/careers/locations/melaka',
    },
    {
        left: '74.5%',
        top: '57.9%',
        title: <Localize translate_text="Singapore, Singapore" />,
        link: '/careers/locations/singapore',
    },
    {
        left: '47.9%',
        top: '24.9%',
        title: <Localize translate_text="Berlin, Germany" />,
        link: '/careers/locations/berlin',
    },
    {
        left: '76%',
        top: '54.7%',
        title: <Localize translate_text="Labuan, Malaysia" />,
        link: '/careers/locations/labuan',
    },
    {
        left: '45.9%',
        top: '26.9%',
        title: <Localize translate_text="Paris, France" />,
        link: '/careers/locations/paris',
    },
    {
        left: '43%',
        top: '26.9%',
        title: <Localize translate_text="Guernsey, Channel Islands" />,
        link: '/careers/locations/guernsey',
    },
    {
        left: '92.5%',
        top: '65.1%',
        title: <Localize translate_text="Port Vila, Vanuatu" />,
        link: '/careers/locations/vanuatu',
    },
]

type DerivNumbersType = {
    count: ReactElement
    title: ReactElement
}

export const our_offices_count: DerivNumbersType[] = [
    { count: <Localize translate_text="950+" />, title: <Localize translate_text="employees" /> },
    {
        count: <Localize translate_text="50+" />,
        title: <Localize translate_text="nationalities" />,
    },
    {
        count: <Localize translate_text={String(all_offices.length)} />,
        title: <Localize translate_text="locations" />,
    },
    {
        count: <Localize translate_text={String(all_countries.length)} />,
        title: <Localize translate_text="countries" />,
    },
]

export const deriv_numbers: DerivNumbersType[][] = [
    [
        {
            count: <Localize translate_text="2.5M+" />,
            title: <Localize translate_text="traders worldwide" />,
        },
        {
            count: <Localize translate_text="USD 26M+" />,
            title: <Localize translate_text="withdrawals last month" />,
        },
        {
            count: <Localize translate_text="114M+" />,
            title: <Localize translate_text="trades last month" />,
        },
        {
            count: <Localize translate_text="USD 10B+" />,
            title: <Localize translate_text="total trade turnover" />,
        },
    ],
]
