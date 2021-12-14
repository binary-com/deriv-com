import { localize } from 'components/localization'
import Shield from 'images/svg/about-us/shield.svg'
import Star from 'images/svg/about-us/star.svg'
import People from 'images/svg/about-us/people.svg'
import Hands from 'images/svg/about-us/hands.svg'

export const our_values = [
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
            'We value smart colleagues with an aptitude to learn, use good judgement, grow and succeed.',
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

export const our_principles = [
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
