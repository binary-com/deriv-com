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
        header: <Localize translate_text="_t_Practise_t_" />,
        text: (
            <Localize translate_text="_t_Open a demo account and practise with an unlimited amount of virtual funds._t_" />
        ),
        icon: <img src={PractiseIcon} alt="" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="_t_Trade_t_" />,
        text: (
            <Localize translate_text="_t_Open a real account, make a deposit, and start trading forex and other markets._t_" />
        ),
        icon: <img src={TradeIcon} alt="" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="_t_Withdraw_t_" />,
        text: (
            <Localize translate_text="_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_" />
        ),
        icon: <img src={Deposit} alt="" width="32" height="32" />,
    },
]

export const derived_content: DerivedContentElement[] = [
    {
        src: RealWorld,
        alt: 'realworld market values',
        text: (
            <Localize translate_text="_t_Market-based values with limited influence from real-world events_t_" />
        ),
    },
    {
        src: TightSpreads,
        alt: 'tighter spreads',
        text: <Localize translate_text="_t_Competitively tighter spreads_t_" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive platform',
        text: <Localize translate_text="_t_Responsive, easy-to-use platforms_t_" />,
    },
    {
        src: TwentyFourHourTrading,
        alt: 'twenty four hour trading',
        text: (
            <Localize translate_text="_t_24-hour trading (Monday-Friday), based on forex market hours_t_" />
        ),
    },
    {
        src: FriendlySupport,
        alt: 'friendly support',
        text: <Localize translate_text="_t_Smart and friendly support, 7 days a week_t_" />,
    },
]

export const derived_content_eu: DerivedContentElement[] = [
    {
        src: RealWorld,
        alt: 'realworld market values',
        text: (
            <Localize translate_text="_t_Market-based values with limited influence from real-world events_t_" />
        ),
    },
    {
        src: TightSpreads,
        alt: 'tighter spreads',
        text: <Localize translate_text="_t_Competitively tighter spreads_t_" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive platform',
        text: <Localize translate_text="_t_Responsive, easy-to-use platforms_t_" />,
    },
    {
        src: TwentyFourHourTrading,
        alt: 'twenty four hour trading',
        text: (
            <Localize translate_text="_t_24-hour trading (Monday-Friday), based on forex market hours_t_" />
        ),
    },
    {
        src: FriendlySupport,
        alt: 'friendly support',
        text: <Localize translate_text="_t_Smart and friendly support, 7 days a week_t_" />,
    },
]
