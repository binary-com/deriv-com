import { localize } from 'components/localization'
import Shield from 'images/svg/who-we-are/shield.svg'
import Star from 'images/svg/who-we-are/star.svg'
import People from 'images/svg/who-we-are/people.svg'
import Hands from 'images/svg/who-we-are/hands.svg'

export const first_section_texts: string[] = [
    localize(
        'Deriv is one of the world’s largest online brokers. We offer CFDs and other derivatives on forex, indices, cryptocurrencies, commodities, and synthetics to millions of registered users across the globe.',
    ),
    localize(
        'From inception, our goal was to break free of the high commissions and clunky products offered by traditional brokers. Also, we aim to deliver a first-class experience to digitally inclined traders, regardless of the size of their accounts.',
    ),
    localize(
        'In a journey spanning more than 22 years, we have grown to over 2.5 million customers worldwide. But our mission has remained the same.',
    ),
]

type ValueType = {
    title: string
    text: string
    icon: string
}

export const our_values: ValueType[] = [
    {
        title: localize('Integrity'),
        text: localize(
            'We serve our customers with fairness and transparency. We settle all contracts by the book and speak plainly and truthfully.',
        ),
        icon: Shield,
    },
    {
        title: localize('Customer focus'),
        text: localize(
            'We put the customer first and strive to build products that deliver the best customer experience.',
        ),
        icon: People,
    },
    {
        title: localize('Competence'),
        text: localize(
            'We value colleagues with an aptitude to learn and grow and the ability to use good judgement.',
        ),
        icon: Star,
    },
    {
        title: localize('Teamwork'),
        text: localize(
            'We value team players that collaborate freely across departments with humility and ambition.',
        ),
        icon: Hands,
    },
]

type PrincipleType = {
    title: string
    text: string
    color: string
}

export const our_principles: PrincipleType[] = [
    {
        title: localize('Be reliable'),
        text: localize(
            'We settle all contracts fairly, process all deposits and withdrawals promptly, and provide reliable support and a high-quality trading experience to all our customers.',
        ),
        color: 'rgba(133, 189, 177, 0.25)',
    },
    {
        title: localize('Be fair'),
        text: localize(
            'We treat all customers equitably, handle complaints with integrity, and offer competitive prices with no hidden costs and no artificial barriers on  customer withdrawals.',
        ),
        color: 'rgba(255, 195, 89, 0.25)',
    },
    {
        title: localize('Be transparent'),
        text: localize(
            'We speak plainly to avoid ambiguity, disclose the terms of all contracts, and are clear about the risks of trading and how we make money.',
        ),
        color: 'rgba(150, 133, 189, 0.25)',
    },
    {
        title: localize('Be responsible'),
        text: localize(
            'We don’t practise hard-selling, offer financial or trading advice, nor make promises of guaranteed returns. We don’t encourage vulnerable people to trade and implement controls to prevent any unlawful activity.',
        ),
        color: 'rgba(119, 160, 198, 0.25)',
    },
]

export type MapPinType = {
    left: string
    top: string
    title: string
    link: string
}

export const desktop_pins: MapPinType[] = [
    { left: '30%', top: '75%', title: localize('Paraguay'), link: '/careers/locations/asuncion' },
    { left: '50%', top: '39.5%', title: localize('Malta'), link: '/careers/locations/malta' },
    { left: '55%', top: '40%', title: localize('Cyprus'), link: '/careers/locations/cyprus' },
    { left: '54%', top: '61.5%', title: localize('Rwanda'), link: '/careers/locations/rwanda' },
    { left: '54%', top: '27.5%', title: localize('Belarus'), link: '/careers/locations/minsk' },
    { left: '61.5%', top: '45.9%', title: localize('Dubai'), link: '/careers/locations/dubai' },
    { left: '73.3%', top: '57.5%', title: localize('Ipoh'), link: '/careers/locations/ipoh' },
    {
        left: '74.2%',
        top: '58.5%',
        title: localize('Cyberjaya'),
        link: '/careers/locations/cyberjaya',
    },
    { left: '74.2%', top: '60.6%', title: localize('Melaka'), link: '/careers/locations/melaka' },
    { left: '77.2%', top: '58.7%', title: localize('Labuan'), link: '/careers/locations/labuan' },
    { left: '45.8%', top: '28%', title: localize('London'), link: '/careers/locations/london' },
    { left: '47.4%', top: '30.9%', title: localize('Paris'), link: '/careers/locations/paris' },
    {
        left: '44.5%',
        top: '30.9%',
        title: localize('Guernsey'),
        link: '/careers/locations/guernsey',
    },
]

export const mobile_pins: MapPinType[] = [
    { left: '28.5%', top: '71%', title: localize('Paraguay'), link: '/careers/locations/asuncion' },
    { left: '48.5%', top: '35.5%', title: localize('Malta'), link: '/careers/locations/malta' },
    { left: '53.5%', top: '36%', title: localize('Cyprus'), link: '/careers/locations/cyprus' },
    { left: '52.5%', top: '57.5%', title: localize('Rwanda'), link: '/careers/locations/rwanda' },
    { left: '52.5%', top: '23.5%', title: localize('Belarus'), link: '/careers/locations/minsk' },
    { left: '60%', top: '41.9%', title: localize('Dubai'), link: '/careers/locations/dubai' },
    { left: '72.3%', top: '51.2%', title: localize('Ipoh'), link: '/careers/locations/ipoh' },
    { left: '71%', top: '55%', title: localize('Cyberjaya'), link: '/careers/locations/cyberjaya' },
    { left: '73%', top: '56.7%', title: localize('Melaka'), link: '/careers/locations/melaka' },
    { left: '76%', top: '54.7%', title: localize('Labuan'), link: '/careers/locations/labuan' },
    { left: '44.3%', top: '24%', title: localize('London'), link: '/careers/locations/london' },
    { left: '45.9%', top: '26.9%', title: localize('Paris'), link: '/careers/locations/paris' },
    { left: '43%', top: '26.9%', title: localize('Guernsey'), link: '/careers/locations/guernsey' },
]
