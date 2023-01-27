import { localize } from 'components/localization'
import Reliable from 'images/svg/principles/reliable.svg'
import Fair from 'images/svg/principles/fare.svg'
import Transparent from 'images/svg/principles/transparent.svg'
import Responsible from 'images/svg/principles/responsible.svg'

type PrinciplesType = {
    title: string
    description: Array<{
        title: string
        text: string
    }>
    img: string
    separator: string
    color: string
}

export const principles: Array<PrinciplesType> = [
    {
        title: 'Be reliable',
        description: [
            {
                title: localize('Settle all contracts fairly, accurately, and promptly'),
                text: localize(
                    'We will price and settle all contracts accurately and fairly, based on reliable data feeds and without undue delay, so that customers can trust our prices throughout the website.',
                ),
            },
            {
                title: localize('Process all deposits and withdrawals quickly and accurately'),
                text: localize(
                    'We will design our cashier systems to work as seamlessly as possible, processing deposits and withdrawals efficiently and promptly. As far as possible, we will minimise delays imposed by any AML or anti-fraud requirements.',
                ),
            },
            {
                title: localize(
                    'Provide reliable online trading with high uptime, good security, and low latency',
                ),
                text: localize(
                    'We aim to provide our customers with reliable systems that have high uptime and low latency, even on low-speed mobile data networks. We provide good security and cross-device compatibility for all major desktop and mobile devices.',
                ),
            },
            {
                title: localize('Provide helpful customer support to all customers'),
                text: localize(
                    'We will strive to offer 24/7 live chat services to make agents available for any customer who requests a chat. Agents will be trained to answer relevant questions about the service.',
                ),
            },
        ],
        img: Reliable,
        separator: '#85BDB140',
        color: '#85BDB1',
    },
    {
        title: 'Be fair',
        description: [
            {
                title: localize('Treat all customers equitably'),
                text: localize(
                    'We will treat all customers equally, regardless of where they’re from or the size of their accounts.',
                ),
            },
            {
                title: localize('Handle all complaints with integrity'),
                text: localize(
                    'In the event of any complaint, we aim to resolve the issue with speed and integrity.',
                ),
            },
            {
                title: localize('Offer competitive prices on all our products'),
                text: localize(
                    'We aim to be competitive on pricing for all our products and services.',
                ),
            },
            {
                title: localize('No hidden costs'),
                text: localize('We will be clear about all fees and charges.'),
            },
            {
                title: localize('No artificial barriers to customer withdrawals'),
                text: localize(
                    'If a customer is fairly entitled to winnings or balances, and there are no fraud concerns or AML requirements, they should be able to withdraw those funds at will.',
                ),
            },
        ],
        img: Fair,
        separator: '#FFC35940',
        color: '#FFC359',
    },
    {
        title: 'Be transparent',
        description: [
            {
                title: localize('Speak simply and plainly, and not hide behind ambiguity'),
                text: localize(
                    'We will use straightforward language in all our products, services, and communications.',
                ),
            },
            {
                title: localize('Disclose the terms of all contracts'),
                text: localize(
                    'We will be transparent about the terms of all contracts so that customers can make informed choices.',
                ),
            },
            {
                title: localize(
                    'Prominently and intelligibly disclose the risks involved in trading',
                ),
                text: localize(
                    'We will be transparent about all the risks involved in trading because we want our customers to make informed choices according to their risk appetite.',
                ),
            },
            {
                title: localize('Disclose how we make money'),
                text: localize(
                    'We will be transparent about how we make money, including when we are a trade counterparty or acting as a broker.',
                ),
            },
            {
                title: localize('Provide a representative demo experience'),
                text: localize(
                    'Our demo trading experience will represent real-money trading, especially with contract pricing and trading restrictions.',
                ),
            },
        ],
        img: Transparent,
        separator: '#9685BD40',
        color: '#9685BD',
    },
    {
        title: 'Be responsible',
        description: [
            {
                title: localize('No hard-selling'),
                text: localize(
                    'We will be honest in our advertising. We will not use implausible images of financial success in our marketing materials.',
                ),
            },
            {
                title: localize('No financial or trading advice'),
                text: localize(
                    'We will not give any opinion on market direction or the suitability of any particular trade.',
                ),
            },
            {
                title: localize('No promises of guaranteed returns'),
                text: localize(
                    'We will not imply that trading solves one’s financial worries or can generate a reliable income. We will be clear that there are no guaranteed or risk-free returns from trading.',
                ),
            },
            {
                title: localize('Implement policies to prevent vulnerable persons from trading'),
                text: localize(
                    'We will refuse underage persons’ access and implement processes to identify customers who are trading beyond their financial capacity.',
                ),
            },
            {
                title: localize('Implement controls to prevent unlawful activity'),
                text: localize(
                    'We will implement know-your-customer (KYC) controls and prevent money laundering and other unlawful activities on our platforms.',
                ),
            },
        ],
        img: Responsible,
        separator: '#77A0C640',
        color: '#77A0C6',
    },
]
