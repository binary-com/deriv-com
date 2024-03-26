import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    StandaloneCircleOneRegularIcon,
    StandaloneCircleTwoRegularIcon,
    StandaloneCircleThreeRegularIcon,
    StandaloneCircleFourRegularIcon,
    StandaloneCircleFiveRegularIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons'
import { Localize } from 'components/localization'

export const ReliableSteps: CardContent[] = [
    {
        id: 1,
        header: (
            <Localize translate_text="_t_Settle all contracts fairly, accurately, and promptly_t_" />
        ),
        description: (
            <Localize translate_text="_t_We will price and settle all contracts accurately and fairly, based on reliable data feeds and without undue delay, so that customers can trust our prices throughout the website._t_" />
        ),
        icon: <StandaloneCircleOneRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 2,
        header: (
            <Localize translate_text="_t_Process all deposits and withdrawals quickly and accurately_t_" />
        ),
        description: (
            <Localize translate_text="_t_We will design our cashier systems to work as seamlessly as possible, processing deposits and withdrawals efficiently and promptly. As far as possible, we will minimise delays imposed by any AML or anti-fraud requirements._t_" />
        ),
        icon: <StandaloneCircleTwoRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 3,
        header: (
            <Localize translate_text="_t_Provide reliable online trading with high uptime, good security, and low latency_t_" />
        ),
        description: (
            <Localize translate_text="_t_We aim to provide our customers with reliable systems that have high uptime and low latency, even on low-speed mobile data networks. We provide good security and cross-device compatibility for all major desktop and mobile devices._t_" />
        ),
        icon: <StandaloneCircleThreeRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 4,
        header: (
            <Localize translate_text="_t_Provide helpful customer support to all customers_t_" />
        ),
        description: (
            <Localize translate_text="_t_We will strive to offer 24/7 live chat services to make agents available for any customer who requests a chat. Agents will be trained to answer relevant questions about the service._t_" />
        ),
        icon: <StandaloneCircleFourRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
]

export const FairSteps: CardContent[] = [
    {
        id: 1,
        header: <Localize translate_text="_t_Treat all customers equitably_t_" />,
        description: (
            <Localize translate_text="_t_We will treat all customers equally, regardless of where they’re from or the size of their accounts._t_" />
        ),
        icon: <StandaloneCircleOneRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 2,
        header: <Localize translate_text="_t_Handle all complaints with integrity_t_" />,
        description: (
            <Localize translate_text="_t_In the event of any complaint, we aim to resolve the issue with speed and integrity._t_" />
        ),
        icon: <StandaloneCircleTwoRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 3,
        header: <Localize translate_text="_t_Offer competitive prices on all our products_t_" />,
        description: (
            <Localize translate_text="_t_We aim to provide our customers with reliable systems that have high uptime and low latency, even on low-speed mobile data networks. We provide good security and cross-device compatibility for all major desktop and mobile devices._t_" />
        ),
        icon: <StandaloneCircleThreeRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 4,
        header: <Localize translate_text="_t_No hidden costs_t_" />,
        description: (
            <Localize translate_text="_t_We will be clear about all fees and charges._t_" />
        ),
        icon: <StandaloneCircleFourRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 5,
        header: <Localize translate_text="_t_No artificial barriers to customer withdrawals_t_" />,
        description: (
            <Localize translate_text="_t_If a customer is fairly entitled to winnings or balances, and there are no fraud concerns or AML requirements, they should be able to withdraw those funds at will._t_" />
        ),
        icon: <StandaloneCircleFiveRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
]

export const TransparentSteps: CardContent[] = [
    {
        id: 1,
        header: (
            <Localize translate_text="_t_Speak simply and plainly, and not hide behind ambiguity_t_" />
        ),
        description: (
            <Localize translate_text="_t_We will use straightforward language in all our products, services, and communications._t_" />
        ),
        icon: <StandaloneCircleOneRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 2,
        header: <Localize translate_text="_t_Disclose the terms of all contracts_t_" />,
        description: (
            <Localize translate_text="_t_We will be transparent about the terms of all contracts so that customers can make informed choices._t_" />
        ),
        icon: <StandaloneCircleTwoRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 3,
        header: (
            <Localize translate_text="_t_Prominently and intelligibly disclose the risks involved in trading_t_" />
        ),
        description: (
            <Localize translate_text="_t_We will be transparent about all the risks involved in trading because we want our customers to make informed choices according to their risk appetite._t_" />
        ),
        icon: <StandaloneCircleThreeRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 4,
        header: <Localize translate_text="_t_Disclose how we make money_t_" />,
        description: (
            <Localize translate_text="_t_We will be transparent about how we make money, including when we are a trade counterparty or acting as a broker._t_" />
        ),
        icon: <StandaloneCircleFourRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 5,
        header: <Localize translate_text="_t_Provide a representative demo experience_t_" />,
        description: (
            <Localize translate_text="_t_Our demo trading experience will represent real-money trading, especially with contract pricing and trading restrictions._t_" />
        ),
        icon: <StandaloneCircleFiveRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
]

export const ResponsibleSteps: CardContent[] = [
    {
        id: 1,
        header: <Localize translate_text="_t_No hard-selling_t_" />,
        description: (
            <Localize translate_text="_t_We will be honest in our advertising. We will not use implausible images of financial success in our marketing materials._t_" />
        ),
        icon: <StandaloneCircleOneRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 2,
        header: <Localize translate_text="_t_No financial or trading advice_t_" />,
        description: (
            <Localize translate_text="_t_We will not give any opinion on market direction or the suitability of any particular trade._t_" />
        ),
        icon: <StandaloneCircleTwoRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 3,
        header: <Localize translate_text="_t_No promises of guaranteed returns_t_" />,
        description: (
            <Localize translate_text="_t_We will not imply that trading solves one’s financial worries or can generate a reliable income. We will be clear that there are no guaranteed or risk-free returns from trading._t_" />
        ),
        icon: <StandaloneCircleThreeRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 4,
        header: (
            <Localize translate_text="_t_Implement policies to prevent vulnerable persons from trading_t_" />
        ),
        description: (
            <Localize translate_text="_t_We will refuse underage persons’ access and implement processes to identify customers who are trading beyond their financial capacity._t_" />
        ),
        icon: <StandaloneCircleFourRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
    {
        id: 5,
        header: <Localize translate_text="_t_Implement controls to prevent unlawful activity_t_" />,
        description: (
            <Localize translate_text="_t_We will implement know-your-customer (KYC) controls and prevent money laundering and other unlawful activities on our platforms._t_" />
        ),
        icon: <StandaloneCircleFiveRegularIcon iconSize="md" />,
        size: 'sm',
        align: 'start',
        color: 'gray',
    },
]