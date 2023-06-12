import React from 'react'
import { Localize } from 'components/localization'
import AdvancedCharting from 'images/svg/markets/forex/charting.svg'
import Deposit from 'images/svg/markets/forex/deposit.svg'
import FriendlySupport from 'images/svg/markets/forex/smart.svg'
import Leverage from 'images/svg/markets/forex/spread.svg'
import ResponsiveWebsite from 'images/svg/markets/forex/platforms.svg'

export type ForexContentElement = {
    src: string
    alt: string
    text: React.ReactNode
}

export const simple_step_content_forex = [
    {
        header: <Localize translate_text="_t_Practise_t_" />,
        text: (
            <Localize translate_text="_t_Open a demo account and practise with an unlimited amount of virtual funds._t_" />
        ),
    },
    {
        header: <Localize translate_text="_t_Trade_t_" />,
        text: (
            <Localize translate_text="_t_Open a real account, make a deposit, and start trading forex and other markets._t_" />
        ),
    },
    {
        header: <Localize translate_text="_t_Withdraw_t_" />,
        text: (
            <Localize translate_text="_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_" />
        ),
    },
]

export const simple_step_derived_fx = [
    {
        header: <Localize translate_text="_t_Practise_t_" />,
        text: (
            <Localize translate_text="_t_Open a demo account and practise with an unlimited amount of virtual funds._t_" />
        ),
    },
    {
        header: <Localize translate_text="_t_Trade_t_" />,
        text: (
            <Localize translate_text="_t_Open a real account, make a deposit, and start trading derived FX and other markets._t_" />
        ),
    },
    {
        header: <Localize translate_text="_t_Withdraw_t_" />,
        text: (
            <Localize translate_text="_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_" />
        ),
    },
]

export const forex_content: ForexContentElement[] = [
    {
        src: Leverage,
        alt: 'High and low',
        text: <Localize translate_text="_t__t_High leverage, tight forex spreads_t__t_" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'Responsive platforms',
        text: <Localize translate_text="_t_Responsive, easy-to-use online trading platforms_t_" />,
    },
    {
        src: AdvancedCharting,
        alt: 'Charts',
        text: <Localize translate_text="_t_Advanced charting widgets_t_" />,
    },
    {
        src: Deposit,
        alt: 'Deposits and withdrawals method',
        text: <Localize translate_text="_t_Convenient deposit and withdrawal methods_t_" />,
    },
    {
        src: FriendlySupport,
        alt: 'Friendly support team',
        text: <Localize translate_text="_t_Smart and friendly support, 7 days a week_t_" />,
    },
]

export const forex_content_eu: ForexContentElement[] = [
    {
        src: Leverage,
        alt: 'High and low',
        text: <Localize translate_text="_t_Tight spreads_t_" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'Responsive platforms',
        text: <Localize translate_text="_t_Responsive, easy-to-use platforms_t_" />,
    },
    {
        src: AdvancedCharting,
        alt: 'Charts',
        text: <Localize translate_text="_t_Advanced charting widgets_t_" />,
    },
    {
        src: Deposit,
        alt: 'Deposits and withdrawals method',
        text: <Localize translate_text="_t_Convenient deposit and withdrawal methods_t_" />,
    },
    {
        src: FriendlySupport,
        alt: 'Friendly support team',
        text: <Localize translate_text="_t_Smart and friendly support, 7 days a week_t_" />,
    },
]
