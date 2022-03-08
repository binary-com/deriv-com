import React, { ReactElement } from 'react'
import { Localize, localize } from 'components/localization'
import Shield from 'images/svg/who-we-are/shield.svg'
import Star from 'images/svg/who-we-are/star.svg'
import People from 'images/svg/who-we-are/people.svg'
import Hands from 'images/svg/who-we-are/hands.svg'

export const first_section_texts = [
    {
        id: 1,
        text: (
            <Localize translate_text="Deriv is one of the world’s largest online brokers. We offer CFDs and other derivatives on forex, indices, cryptocurrencies, commodities, and synthetics to millions of registered users across the globe." />
        ),
    },
    {
        id: 2,
        text: (
            <Localize translate_text="From inception, our goal was to break free of the high commissions and clunky products offered by traditional brokers. Also, we aim to deliver a first-class experience to digitally inclined traders, regardless of the size of their accounts." />
        ),
    },
    {
        id: 3,
        text: (
            <Localize translate_text="In a journey spanning more than 22 years, we have grown to over 2.5 million customers worldwide. But our mission has remained the same." />
        ),
    },
]

type ValueType = {
    id: number
    title: ReactElement
    text: ReactElement
    icon: string
}

export const our_values: ValueType[] = [
    {
        id: 1,
        title: <Localize translate_text="Integrity" />,
        text: (
            <Localize translate_text="We serve our customers with fairness and transparency. We settle all contracts by the book and speak plainly and truthfully." />
        ),
        icon: Shield,
    },
    {
        id: 2,
        title: <Localize translate_text="Customer focus" />,
        text: (
            <Localize translate_text="We put the customer first and strive to build products that deliver the best customer experience." />
        ),
        icon: People,
    },
    {
        id: 3,
        title: <Localize translate_text="Competence" />,
        text: (
            <Localize translate_text="We value colleagues with an aptitude to learn and grow and the ability to use good judgement." />
        ),
        icon: Star,
    },
    {
        id: 4,
        title: <Localize translate_text="Teamwork" />,
        text: (
            <Localize translate_text="We value team players that collaborate freely across departments with humility and ambition." />
        ),
        icon: Hands,
    },
]

type PrincipleType = {
    id: number
    title: ReactElement
    text: ReactElement
    color: string
}

export const our_principles: PrincipleType[] = [
    {
        id: 1,
        title: <Localize translate_text="Be reliable" />,
        text: (
            <Localize translate_text="We settle all contracts fairly, process all deposits and withdrawals promptly, and provide reliable support and a high-quality trading experience to all our customers." />
        ),
        color: 'rgba(133, 189, 177, 0.25)',
    },
    {
        id: 2,
        title: <Localize translate_text="Be fair" />,
        text: (
            <Localize translate_text="We treat all customers equitably, handle complaints with integrity, and offer competitive prices with no hidden costs and no artificial barriers on customer withdrawals." />
        ),
        color: 'rgba(255, 195, 89, 0.25)',
    },
    {
        id: 3,
        title: <Localize translate_text="Be transparent" />,
        text: (
            <Localize translate_text="We speak plainly to avoid ambiguity, disclose the terms of all contracts, and are clear about the risks of trading and how we make money." />
        ),
        color: 'rgba(150, 133, 189, 0.25)',
    },
    {
        id: 4,
        title: <Localize translate_text="Be responsible" />,
        text: (
            <Localize translate_text="We don’t practise hard-selling, offer financial or trading advice, nor make promises of guaranteed returns. We don’t encourage vulnerable people to trade and implement controls to prevent any unlawful activity." />
        ),
        color: 'rgba(119, 160, 198, 0.25)',
    },
]

export type MapPinType = {
    id?: number
    left: string
    top: string
    title: ReactElement
    link: string
}

export const desktop_pins: MapPinType[] = [
    {
        id: 1,
        left: '30%',
        top: '75%',
        title: <Localize translate_text="Paraguay" />,
        link: '/careers/locations/asuncion',
    },
    {
        id: 2,
        left: '50%',
        top: '39.5%',
        title: <Localize translate_text="Malta" />,
        link: '/careers/locations/malta',
    },
    {
        id: 3,
        left: '55%',
        top: '40%',
        title: <Localize translate_text="Cyprus" />,
        link: '/careers/locations/cyprus',
    },
    {
        id: 4,
        left: '54%',
        top: '61.5%',
        title: <Localize translate_text="Rwanda" />,
        link: '/careers/locations/rwanda',
    },
    {
        id: 5,
        left: '54%',
        top: '27.5%',
        title: <Localize translate_text="Belarus" />,
        link: '/careers/locations/minsk',
    },
    {
        id: 6,
        left: '61.5%',
        top: '45.9%',
        title: <Localize translate_text="Dubai" />,
        link: '/careers/locations/dubai',
    },
    {
        id: 7,
        left: '73.3%',
        top: '57.5%',
        title: <Localize translate_text="Ipoh" />,
        link: '/careers/locations/ipoh',
    },
    {
        id: 8,
        left: '74.2%',
        top: '58.5%',
        title: <Localize translate_text="Cyberjaya" />,
        link: '/careers/locations/cyberjaya',
    },
    {
        id: 9,
        left: '74.2%',
        top: '60.6%',
        title: <Localize translate_text="Melaka" />,
        link: '/careers/locations/melaka',
    },
    {
        id: 10,
        left: '77.2%',
        top: '58.7%',
        title: <Localize translate_text="Labuan" />,
        link: '/careers/locations/labuan',
    },
    {
        id: 11,
        left: '45.8%',
        top: '28%',
        title: <Localize translate_text="London" />,
        link: '/careers/locations/london',
    },
    {
        id: 12,
        left: '47.4%',
        top: '30.9%',
        title: <Localize translate_text="Paris" />,
        link: '/careers/locations/paris',
    },
    {
        id: 13,
        left: '44.5%',
        top: '30.9%',
        title: <Localize translate_text="Guernsey" />,
        link: '/careers/locations/guernsey',
    },
]

export const mobile_pins: MapPinType[] = [
    {
        id: 1,
        left: '28.5%',
        top: '71%',
        title: <Localize translate_text="Paraguay" />,
        link: '/careers/locations/asuncion',
    },
    {
        id: 2,
        left: '48.5%',
        top: '35.5%',
        title: <Localize translate_text="Malta" />,
        link: '/careers/locations/malta',
    },
    {
        id: 3,
        left: '53.5%',
        top: '36%',
        title: <Localize translate_text="Cyprus" />,
        link: '/careers/locations/cyprus',
    },
    {
        id: 4,
        left: '52.5%',
        top: '57.5%',
        title: <Localize translate_text="Rwanda" />,
        link: '/careers/locations/rwanda',
    },
    {
        id: 5,
        left: '52.5%',
        top: '23.5%',
        title: <Localize translate_text="Belarus" />,
        link: '/careers/locations/minsk',
    },
    {
        id: 6,
        left: '60%',
        top: '41.9%',
        title: <Localize translate_text="Dubai" />,
        link: '/careers/locations/dubai',
    },
    {
        id: 7,
        left: '72.3%',
        top: '51.2%',
        title: <Localize translate_text="Ipoh" />,
        link: '/careers/locations/ipoh',
    },
    {
        id: 8,
        left: '71%',
        top: '55%',
        title: <Localize translate_text="Cyberjaya" />,
        link: '/careers/locations/cyberjaya',
    },
    {
        id: 9,
        left: '73%',
        top: '56.7%',
        title: <Localize translate_text="Melaka" />,
        link: '/careers/locations/melaka',
    },
    {
        id: 10,
        left: '76%',
        top: '54.7%',
        title: <Localize translate_text="Labuan" />,
        link: '/careers/locations/labuan',
    },
    {
        id: 11,
        left: '44.3%',
        top: '24%',
        title: <Localize translate_text="London" />,
        link: '/careers/locations/london',
    },
    {
        id: 12,
        left: '45.9%',
        top: '26.9%',
        title: <Localize translate_text="Paris" />,
        link: '/careers/locations/paris',
    },
    {
        id: 13,
        left: '43%',
        top: '26.9%',
        title: <Localize translate_text="Guernsey" />,
        link: '/careers/locations/guernsey',
    },
]

export const our_offices_count = [
    { id: 1, count: localize('750+'), title: localize('employees') },
    { id: 2, count: localize('50+'), title: localize('nationalities') },
    { id: 3, count: localize('13'), title: localize('locations') },
    { id: 4, count: localize('10'), title: localize('countries') },
]

export const deriv_numbers = [
    [
        { id: 1, count: localize('2.5M+'), title: localize('traders worldwide') },
        { id: 2, count: localize('USD 26M+'), title: localize('withdrawals last month') },
        { id: 3, count: localize('114M+'), title: localize('trades last month') },
        { id: 4, count: localize('USD 10B+'), title: localize('total trade turnover') },
    ],
]
