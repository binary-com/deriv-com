import React from 'react'
import { Localize } from 'components/localization'
import RealWorld from 'images/svg/markets/real-world.svg'
import TightSpreads from 'images/svg/markets/tight-spread-new.svg'
import TwentyFourHourTrading from 'images/svg/markets/twenty-four-hour-trading.svg'
import Deposit from 'images/svg/markets/deposit-and-withdrawal-new.svg'
import FriendlySupport from 'images/svg/markets/friendly-support-new.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website-new.svg'
import PractiseIcon from 'images/svg/markets/aim-new.svg'
import TradeIcon from 'images/svg/markets/trade-new.svg'

export type DerivedContentElement = {
    src: string
    alt: string
    text: React.ReactNode
}

export const simple_step_content_derived = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading forex and other markets." />
        ),
        icon: <img src={TradeIcon} alt="" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
        icon: <img src={Deposit} alt="" width="32" height="32" />,
    },
]

export const derived_content: DerivedContentElement[] = [
    {
        src: RealWorld,
        alt: 'realworld market values',
        text: (
            <Localize translate_text="Market-based values with limited influence from real-world events" />
        ),
    },
    {
        src: TightSpreads,
        alt: 'tighter spreads',
        text: <Localize translate_text="Competitively tighter spreads" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive platform',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: TwentyFourHourTrading,
        alt: 'twenty four hour trading',
        text: (
            <Localize translate_text="24-hour trading (Monday-Friday), based on forex market hours" />
        ),
    },
    {
        src: FriendlySupport,
        alt: 'friendly support',
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]

export const derived_content_eu: DerivedContentElement[] = [
    {
        src: RealWorld,
        alt: 'realworld market values',
        text: (
            <Localize translate_text="Market-based values with limited influence from real-world events" />
        ),
    },
    {
        src: TightSpreads,
        alt: 'tighter spreads',
        text: <Localize translate_text="Competitively tighter spreads" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive platform',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: TwentyFourHourTrading,
        alt: 'twenty four hour trading',
        text: (
            <Localize translate_text="24-hour trading (Monday-Friday), based on forex market hours" />
        ),
    },
    {
        src: FriendlySupport,
        alt: 'friendly support',
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]
