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
            <Localize translate_text="_t_Deriv is one of the world’s largest online brokers. We offer CFDs and other derivatives on forex, indices, cryptocurrencies, commodities, and synthetics to millions of registered users across the globe._t_" />
        ),
    },
    {
        text: (
            <Localize translate_text="_t_From inception, our goal was to break free of the high commissions and clunky products offered by traditional brokers. Also, we aim to deliver a first-class experience to digitally inclined traders, regardless of the size of their accounts._t_" />
        ),
    },
    {
        text: (
            <Localize translate_text="_t_In a journey spanning more than 22 years, we have grown to over 2.5 million customers worldwide. But our mission has remained the same._t_" />
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
        title: <Localize translate_text="_t_Integrity_t_" />,
        text: (
            <Localize translate_text="_t_We serve our customers with fairness and transparency. We settle all contracts by the book and speak plainly and truthfully._t_" />
        ),
        icon: Shield,
    },
    {
        title: <Localize translate_text="_t_Customer focus_t_" />,
        text: (
            <Localize translate_text="_t_We put the customer first and strive to build products that deliver the best customer experience._t_" />
        ),
        icon: People,
    },
    {
        title: <Localize translate_text="_t_Competence_t_" />,
        text: (
            <Localize translate_text="_t_We value colleagues with an aptitude to learn and grow and the ability to use good judgement._t_" />
        ),
        icon: Star,
    },
    {
        title: <Localize translate_text="_t_Teamwork_t_" />,
        text: (
            <Localize translate_text="_t_We value team players that collaborate freely across departments with humility and ambition._t_" />
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
        title: <Localize translate_text="_t_Be reliable_t_" />,
        text: (
            <Localize translate_text="_t_We settle all contracts fairly, process all deposits and withdrawals promptly, and provide reliable support and a high-quality trading experience to all our customers._t_" />
        ),
        color: 'rgba(133, 189, 177, 0.25)',
    },
    {
        title: <Localize translate_text="_t_Be fair_t_" />,
        text: (
            <Localize translate_text="_t_We treat all customers equitably, handle complaints with integrity, and offer competitive prices with no hidden costs and no artificial barriers on customer withdrawals._t_" />
        ),
        color: 'rgba(255, 195, 89, 0.25)',
    },
    {
        title: <Localize translate_text="_t_Be transparent_t_" />,
        text: (
            <Localize translate_text="_t_We speak plainly to avoid ambiguity, disclose the terms of all contracts, and are clear about the risks of trading and how we make money._t_" />
        ),
        color: 'rgba(150, 133, 189, 0.25)',
    },
    {
        title: <Localize translate_text="_t_Be responsible_t_" />,
        text: (
            <Localize translate_text="_t_We don’t practise hard-selling, offer financial or trading advice, nor make promises of guaranteed returns. We don’t encourage vulnerable people to trade and implement controls to prevent any unlawful activity._t_" />
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
        top: '75%',
        title: <Localize translate_text="_t_Asunción, Paraguay_t_" />,
        link: '/careers/locations/asuncion',
    },
    {
        left: '50%',
        top: '39.5%',
        title: <Localize translate_text="_t_Birkirkara, Malta_t_" />,
        link: '/careers/locations/malta',
    },
    {
        left: '55%',
        top: '40%',
        title: <Localize translate_text="_t_Limassol, Cyprus_t_" />,
        link: '/careers/locations/cyprus',
    },
    {
        left: '56%',
        top: '43%',
        title: <Localize translate_text="_t_Amman, Jordan_t_" />,
        link: '/careers/locations/jordan',
    },
    {
        left: '54%',
        top: '61.5%',
        title: <Localize translate_text="_t_Kigali, Rwanda_t_" />,
        link: '/careers/locations/rwanda',
    },
    {
        left: '54%',
        top: '27.5%',
        title: <Localize translate_text="_t_Minsk, Belarus_t_" />,
        link: '/careers/locations/minsk',
    },
    {
        left: '61.5%',
        top: '45.9%',
        title: <Localize translate_text="_t_Dubai, UAE_t_" />,
        link: '/careers/locations/dubai',
    },
    {
        left: '73.3%',
        top: '57.5%',
        title: <Localize translate_text="_t_Ipoh, Malaysia_t_" />,
        link: '/careers/locations/ipoh',
    },
    {
        left: '74.2%',
        top: '58.5%',
        title: <Localize translate_text="_t_Cyberjaya, Malaysia_t_" />,
        link: '/careers/locations/cyberjaya',
    },
    {
        left: '74.2%',
        top: '60.6%',
        title: <Localize translate_text="_t_Melaka, Malaysia_t_" />,
        link: '/careers/locations/melaka',
    },
    {
        left: '77.2%',
        top: '58.7%',
        title: <Localize translate_text="_t_Labuan, Malaysia_t_" />,
        link: '/careers/locations/labuan',
    },
    {
        left: '47.4%',
        top: '30.9%',
        title: <Localize translate_text="_t_Paris, France_t_" />,
        link: '/careers/locations/paris',
    },
    {
        left: '49.4%',
        top: '27.9%',
        title: <Localize translate_text="_t_Berlin, Germany_t_" />,
        link: '/careers/locations/berlin',
    },
    {
        left: '44.5%',
        top: '30.9%',
        title: <Localize translate_text="_t_Guernsey, Channel Islands_t_" />,
        link: '/careers/locations/guernsey',
    },
    {
        left: '92.2%',
        top: '69.7%',
        title: <Localize translate_text="_t_Port Vila, Vanuatu_t_" />,
        link: '/careers/locations/vanuatu',
    },
    {
        left: '74.6%',
        top: '61%',
        title: <Localize translate_text="_t_Singapore, Singapore_t_" />,
        link: '/careers/locations/singapore',
    },
]

export const mobile_pins: MapPinType[] = [
    {
        left: '28.5%',
        top: '71%',
        title: <Localize translate_text="_t_Asunción, Paraguay_t_" />,
        link: '/careers/locations/asuncion',
    },
    {
        left: '48.5%',
        top: '35.5%',
        title: <Localize translate_text="_t_Birkirkara, Malta_t_" />,
        link: '/careers/locations/malta',
    },
    {
        left: '53.5%',
        top: '36%',
        title: <Localize translate_text="_t_Limassol, Cyprus_t_" />,
        link: '/careers/locations/cyprus',
    },
    {
        left: '56.5%',
        top: '37%',
        title: <Localize translate_text="_t_Amman, Jordan_t_" />,
        link: '/careers/locations/jordan',
    },
    {
        left: '52.5%',
        top: '57.5%',
        title: <Localize translate_text="_t_Kigali, Rwanda_t_" />,
        link: '/careers/locations/rwanda',
    },
    {
        left: '52.5%',
        top: '23.5%',
        title: <Localize translate_text="_t_Minsk, Belarus_t_" />,
        link: '/careers/locations/minsk',
    },
    {
        left: '60%',
        top: '41.9%',
        title: <Localize translate_text="_t_Dubai, UAE_t_" />,
        link: '/careers/locations/dubai',
    },
    {
        left: '72.3%',
        top: '51.2%',
        title: <Localize translate_text="_t_Ipoh, Malaysia_t_" />,
        link: '/careers/locations/ipoh',
    },
    {
        left: '71%',
        top: '55%',
        title: <Localize translate_text="_t_Cyberjaya, Malaysia_t_" />,
        link: '/careers/locations/cyberjaya',
    },
    {
        left: '73%',
        top: '56.7%',
        title: <Localize translate_text="_t_Melaka, Malaysia_t_" />,
        link: '/careers/locations/melaka',
    },
    {
        left: '74.5%',
        top: '57.9%',
        title: <Localize translate_text="_t_Singapore, Singapore_t_" />,
        link: '/careers/locations/singapore',
    },
    {
        left: '47.9%',
        top: '24.9%',
        title: <Localize translate_text="_t_Berlin, Germany_t_" />,
        link: '/careers/locations/berlin',
    },
    {
        left: '76%',
        top: '54.7%',
        title: <Localize translate_text="_t_Labuan, Malaysia_t_" />,
        link: '/careers/locations/labuan',
    },
    {
        left: '45.9%',
        top: '26.9%',
        title: <Localize translate_text="_t_Paris, France_t_" />,
        link: '/careers/locations/paris',
    },
    {
        left: '43%',
        top: '26.9%',
        title: <Localize translate_text="_t_Guernsey, Channel Islands_t_" />,
        link: '/careers/locations/guernsey',
    },
    {
        left: '92.5%',
        top: '65.1%',
        title: <Localize translate_text="_t_Port Vila, Vanuatu_t_" />,
        link: '/careers/locations/vanuatu',
    },
]

type DerivNumbersType = {
    count: ReactElement
    title: ReactElement
}

export const our_offices_count: DerivNumbersType[] = [
    { count: <Localize translate_text="_t_850+_t_" />, title: <Localize translate_text="_t_employees_t_" /> },
    {
        count: <Localize translate_text="_t_50+_t_" />,
        title: <Localize translate_text="_t_nationalities_t_" />,
    },
    { count: localize(all_offices.length), title: <Localize translate_text="_t_locations_t_" /> },
    { count: localize(all_countries.length), title: <Localize translate_text="_t_countries_t_" /> },
]

export const deriv_numbers: DerivNumbersType[][] = [
    [
        {
            count: <Localize translate_text="_t_2.5M+_t_" />,
            title: <Localize translate_text="_t_traders worldwide_t_" />,
        },
        {
            count: <Localize translate_text="_t_USD 26M+_t_" />,
            title: <Localize translate_text="_t_withdrawals last month_t_" />,
        },
        {
            count: <Localize translate_text="_t_114M+_t_" />,
            title: <Localize translate_text="_t_trades last month_t_" />,
        },
        {
            count: <Localize translate_text="_t_USD 10B+_t_" />,
            title: <Localize translate_text="_t_total trade turnover_t_" />,
        },
    ],
]
