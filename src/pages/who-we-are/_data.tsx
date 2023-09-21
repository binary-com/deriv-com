import React from 'react'
import { EmployerAwardsType } from './_types'
import Shield from 'images/svg/who-we-are/shield.svg'
import Star from 'images/svg/who-we-are/star.svg'
import People from 'images/svg/who-we-are/people.svg'
import Hands from 'images/svg/who-we-are/hands.svg'
import { TString } from 'types/generics'
import Link from 'features/components/atoms/link'

type FirstSectionTextsType = {
    text: TString
}

type ValueType = {
    title: TString
    text: TString
    icon: string
}

type PrincipleType = {
    title: TString
    text: TString
    color: string
}

export type MapPinType = {
    left: string
    top: string
    title: TString
    link: string
}

type DerivNumbersType = {
    count: TString
    title: TString
}

export const first_section_texts: FirstSectionTextsType[] = [
    {
        text: '_t_Deriv is one of the world’s largest online brokers. We offer CFDs and other derivatives on forex, stocks & indices, cryptocurrencies, commodities, and derived indices to millions of registered users across the globe._t_',
    },
    {
        text: '_t_From inception, our goal was to break free of the high commissions and clunky products offered by traditional brokers. Also, we aim to deliver a first-class experience to digitally inclined traders, regardless of the size of their accounts._t_',
    },
    {
        text: '_t_In a journey spanning more than 23 years, we have grown to over 2.5 million customers worldwide. But our mission has remained the same:_t_',
    },
]

export const our_values: ValueType[] = [
    {
        title: '_t_Integrity_t_',
        text: '_t_We serve our customers with fairness and transparency. We settle all contracts by the book and speak plainly and truthfully._t_',
        icon: Shield,
    },
    {
        title: '_t_Customer focus_t_',
        text: '_t_We put the customer first and strive to build products that deliver the best customer experience._t_',
        icon: People,
    },
    {
        title: '_t_Competence_t_',
        text: '_t_We value colleagues with the ability to use good judgement and an aptitude to learn and grow._t_',
        icon: Star,
    },
    {
        title: '_t_Teamwork_t_',
        text: '_t_We value team players that collaborate freely across departments with humility and ambition._t_',
        icon: Hands,
    },
]

export const our_principles: PrincipleType[] = [
    {
        title: '_t_Be reliable_t_',
        text: '_t_We settle all contracts fairly, process all deposits and withdrawals promptly, and provide reliable support and a high-quality trading experience to all our customers._t_',
        color: 'rgba(133, 189, 177, 0.25)',
    },
    {
        title: '_t_Be fair_t_',
        text: '_t_We treat all customers equitably, handle complaints with integrity, and offer competitive prices with no hidden costs and no artificial barriers on customer withdrawals._t_',
        color: 'rgba(255, 195, 89, 0.25)',
    },
    {
        title: '_t_Be transparent_t_',
        text: '_t_We speak plainly to avoid ambiguity, disclose the terms of all contracts, and are clear about the risks of trading and how we make money._t_',
        color: 'rgba(150, 133, 189, 0.25)',
    },
    {
        title: '_t_Be responsible_t_',
        text: '_t_We don’t practise hard-selling, offer financial or trading advice, nor make promises of guaranteed returns. We don’t encourage vulnerable people to trade and implement controls to prevent any unlawful activity._t_',
        color: 'rgba(119, 160, 198, 0.25)',
    },
]

export const desktop_pins: MapPinType[] = [
    {
        left: '30%',
        top: '74%',
        title: '_t_Asunción, Paraguay_t_',
        link: '/careers/locations/asuncion',
    },
    {
        left: '31%',
        top: '76%',
        title: '_t_Ciudad del Este, Paraguay_t_',
        link: '/careers/locations/ciudad',
    },
    {
        left: '23.5%',
        top: '50%',
        title: '_t_George Town, Cayman Islands_t_',
        link: '/careers/locations/georgetown',
    },
    {
        left: '50%',
        top: '39.5%',
        title: '_t_Birkirkara, Malta_t_',
        link: '/careers/locations/malta',
    },
    {
        left: '55%',
        top: '40%',
        title: '_t_Limassol, Cyprus_t_',
        link: '/careers/locations/cyprus',
    },
    {
        left: '56%',
        top: '43%',
        title: '_t_Amman, Jordan_t_',
        link: '/careers/locations/jordan',
    },
    {
        left: '54%',
        top: '61.5%',
        title: '_t_Kigali, Rwanda_t_',
        link: '/careers/locations/rwanda',
    },
    {
        left: '61.5%',
        top: '45.9%',
        title: '_t_Dubai, UAE_t_',
        link: '/careers/locations/dubai',
    },
    {
        left: '73.3%',
        top: '57.5%',
        title: '_t_Ipoh, Malaysia_t_',
        link: '/careers/locations/ipoh',
    },
    {
        left: '74.2%',
        top: '58.5%',
        title: '_t_Cyberjaya, Malaysia_t_',
        link: '/careers/locations/cyberjaya',
    },
    {
        left: '74.2%',
        top: '60.6%',
        title: '_t_Melaka, Malaysia_t_',
        link: '/careers/locations/melaka',
    },
    {
        left: '77.2%',
        top: '58.7%',
        title: '_t_Labuan, Malaysia_t_',
        link: '/careers/locations/labuan',
    },
    {
        left: '47.4%',
        top: '30.9%',
        title: '_t_Paris, France_t_',
        link: '/careers/locations/paris',
    },
    {
        left: '28.3%',
        top: '50.8%',
        title: '_t_Road Town, British Virgin Islands_t_',
        link: '/careers/locations/roadtown',
    },
    {
        left: '49.4%',
        top: '27.9%',
        title: '_t_Berlin, Germany_t_',
        link: '/careers/locations/berlin',
    },
    {
        left: '44.5%',
        top: '30.9%',
        title: '_t_Guernsey, Channel Islands_t_',
        link: '/careers/locations/guernsey',
    },
    {
        left: '92.2%',
        top: '69.7%',
        title: '_t_Port Vila, Vanuatu_t_',
        link: '/careers/locations/vanuatu',
    },
    {
        left: '74.6%',
        top: '61%',
        title: '_t_Singapore, Singapore_t_',
        link: '/careers/locations/singapore',
    },
    {
        left: '45.9%',
        top: '28%',
        title: '_t_Reading, United kingdom_t_',
        link: '/careers/locations/reading',
    },
    {
        left: '78%',
        top: '48%',
        title: '_t_Hong kong_t_',
        link: '/careers/locations/hongkong',
    },
]

export const mobile_pins: MapPinType[] = [
    {
        left: '28.5%',
        top: '71%',
        title: '_t_Asunción, Paraguay_t_',
        link: '/careers/locations/asuncion',
    },
    {
        left: '30%',
        top: '75%',
        title: '_t_Ciudad del Este, Paraguay_t_',
        link: '/careers/locations/ciudad',
    },
    {
        left: '22%',
        top: '47.7%',
        title: '_t_George Town, Cayman Islands_t_',
        link: '/careers/locations/georgetown',
    },
    {
        left: '26%',
        top: '48%',
        title: '_t_Road Town, British Virgin Islands_t_',
        link: '/careers/locations/roadtown',
    },
    {
        left: '48.5%',
        top: '35.5%',
        title: '_t_Birkirkara, Malta_t_',
        link: '/careers/locations/malta',
    },
    {
        left: '53.5%',
        top: '36%',
        title: '_t_Limassol, Cyprus_t_',
        link: '/careers/locations/cyprus',
    },
    {
        left: '56.5%',
        top: '37%',
        title: '_t_Amman, Jordan_t_',
        link: '/careers/locations/jordan',
    },
    {
        left: '52.5%',
        top: '57.5%',
        title: '_t_Kigali, Rwanda_t_',
        link: '/careers/locations/rwanda',
    },
    {
        left: '60%',
        top: '41.9%',
        title: '_t_Dubai, UAE_t_',
        link: '/careers/locations/dubai',
    },
    {
        left: '72.3%',
        top: '51.2%',
        title: '_t_Ipoh, Malaysia_t_',
        link: '/careers/locations/ipoh',
    },
    {
        left: '71%',
        top: '55%',
        title: '_t_Cyberjaya, Malaysia_t_',
        link: '/careers/locations/cyberjaya',
    },
    {
        left: '73%',
        top: '56.7%',
        title: '_t_Melaka, Malaysia_t_',
        link: '/careers/locations/melaka',
    },
    {
        left: '74.5%',
        top: '57.9%',
        title: '_t_Singapore, Singapore_t_',
        link: '/careers/locations/singapore',
    },
    {
        left: '47.9%',
        top: '24.9%',
        title: '_t_Berlin, Germany_t_',
        link: '/careers/locations/berlin',
    },
    {
        left: '76%',
        top: '54.7%',
        title: '_t_Labuan, Malaysia_t_',
        link: '/careers/locations/labuan',
    },
    {
        left: '45.9%',
        top: '26.9%',
        title: '_t_Paris, France_t_',
        link: '/careers/locations/paris',
    },
    {
        left: '43%',
        top: '26.9%',
        title: '_t_Guernsey, Channel Islands_t_',
        link: '/careers/locations/guernsey',
    },
    {
        left: '92.5%',
        top: '65.1%',
        title: '_t_Port Vila, Vanuatu_t_',
        link: '/careers/locations/vanuatu',
    },
    {
        left: '45.9%',
        top: '20%',
        title: '_t_Reading, United kingdom_t_',
        link: '/careers/locations/reading',
    },
    {
        left: '76%',
        top: '45%',
        title: '_t_Hong kong_t_',
        link: '/careers/locations/hongkong',
    },
]

export const our_offices_count: DerivNumbersType[] = [
    { count: '_t_1200+_t_', title: '_t_employees_t_' },
    { count: '_t_70+_t_', title: '_t_nationalities_t_' },
    { count: '_t_20_t_', title: '_t_locations_t_' },
    { count: '_t_16_t_', title: '_t_countries_t_' },
]

export const deriv_numbers: DerivNumbersType[][] = [
    [
        { count: '_t_2.5M+_t_', title: '_t_traders worldwide_t_' },
        { count: '_t_USD 46M+_t_', title: '_t_withdrawals last month_t_' },
        { count: '_t_187M+_t_', title: '_t_trades last month_t_' },
        { count: '_t_USD 15T+_t_', title: '_t_total trade turnover_t_' },
    ],
]

export const employer_award_content: EmployerAwardsType[] = [
    {
        id: 0,
        title: '_t_Investors in People_t_',
        text_with_link: {
            text: '_t_We were awarded Gold accreditation by <0>Investors in People</0> (IIP) for our commitment to building trust within Deriv, motivating employee growth, and adapting to change. We are honoured to be recognised for our leadership approach, people practices, career advancement opportunities, and culture of trust._t_',
            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: 'https://www.investorsinpeople.com/',
                    }}
                    rel="noopener noreferrer"
                />,
            ],
        },
    },
    {
        id: 1,
        title: '_t_Great Place to Work®_t_',
        text_with_link: {
            text: "_t_Deriv's offices in Dubai, Paraguay, Cyprus, France, Malta, Rwanda, and UK have received the <0>Great Place to Work®</0> (GPTW) 2023 certification for fair treatment of employees regardless of gender or race, ethical business practices, and supportive work culture._t_",

            components: [
                <Link
                    weight="bold"
                    key={0}
                    target="_blank"
                    url={{
                        type: 'non-company',
                        href: 'https://www.greatplacetowork.com/',
                    }}
                    rel="noopener noreferrer"
                />,
            ],
        },
        sub_text:
            '_t_ In the year 2022, 20 Deriv offices worldwide, including Cyberjaya, Dubai, Asunción, Birkirkara, Limassol, Kigali, Ipoh, Malaka, and Labuan, were recognised by GPTW._t_',
    },
]
