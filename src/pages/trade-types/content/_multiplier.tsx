import React from 'react'
import { Localize } from 'components/localization'
import Risk from 'images/svg/trade-types/risk.svg'
import Exposure from 'images/svg/trade-types/exposure.svg'
import Responsive from 'images/svg/trade-types/responsive.svg'
import FriendlySupport from 'images/svg/trade-types/friendly-support.svg'
import TradeAnytime from 'images/svg/trade-types/trade-anytime.svg'
import Crash from 'images/svg/trade-types/crash.svg'

type multipliers_content = {
    src: string
    text: React.ReactNode
    item_title: React.ReactNode
    item_title_eu?: React.ReactNode
    text_eu?: React.ReactNode
    alt: string
}

export const multipliers_content: multipliers_content[] = [
    {
        src: Risk,
        alt: 'Better risk management',
        item_title_eu: <Localize translate_text="Better risk management" />,
        item_title: <Localize translate_text="Better risk management" />,
        text: (
            <Localize translate_text="Customise your contracts to suit your style and risk appetite using innovative features like stop loss, take profit, and deal cancellation." />
        ),
        text_eu: (
            <Localize translate_text="Customise your contracts to suit your style and risk appetite using innovative features like stop loss, take profit, and deal cancellation." />
        ),
    },
    {
        src: Exposure,
        alt: 'Increased market exposure',
        item_title: <Localize translate_text="Increased market exposure" />,
        item_title_eu: <Localize translate_text="Increased market exposure" />,

        text: (
            <Localize translate_text="Get more market exposure while limiting risk to your stake amount." />
        ),
        text_eu: (
            <Localize translate_text="Get more market exposure while limiting risk to your stake amount." />
        ),
    },
    {
        src: Responsive,
        alt: 'Secure, responsive platform',
        item_title: <Localize translate_text="Secure, responsive platform" />,
        item_title_eu: <Localize translate_text="Secure, responsive platform" />,

        text: (
            <Localize translate_text="Enjoy trading on secure, intuitive platforms built for new and expert traders." />
        ),
        text_eu: (
            <Localize translate_text="Enjoy trading on secure, intuitive platform built for new and expert traders." />
        ),
    },
    {
        src: FriendlySupport,
        alt: 'Expert and friendly support',
        item_title: <Localize translate_text="Expert and friendly support" />,
        item_title_eu: <Localize translate_text="Expert and friendly support" />,
        text: <Localize translate_text="Get expert, friendly support when you need it." />,
        text_eu: <Localize translate_text="Get expert, friendly support when you need it." />,
    },
    {
        src: TradeAnytime,
        alt: 'Trade 24/7, 365 days a year',
        item_title: <Localize translate_text="Trade 24/7, 365 days a year" />,
        item_title_eu: <Localize translate_text="Trade 24/7, 365 days a year" />,
        text: (
            <Localize translate_text="Offered on forex and synthetics, you can trade multipliers 24/7, all-year-round." />
        ),
        text_eu: (
            <Localize translate_text="Trade multipliers on synthetics 24/7, 365 days a year. Trade multipliers on forex and cryptocurrencies round the clock on weekdays." />
        ),
    },
    {
        src: Crash,
        alt: 'Crash/Boom indices',
        item_title: <Localize translate_text="Crash/Boom indices" />,
        item_title_eu: <Localize translate_text="Crash/Boom indices" />,
        text: <Localize translate_text="Open an account and start trading in minutes." />,
        text_eu: (
            <Localize translate_text="Predict and gain from exciting spikes and dips with our Crash/Boom indices." />
        ),
    },
]
