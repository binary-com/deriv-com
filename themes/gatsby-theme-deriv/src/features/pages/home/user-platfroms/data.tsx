import React from 'react'
import { CardContent } from '@deriv-com/components'
import dmt5 from "../../../../images/svg/new-homepage/dmt5.svg"
import dct from "../../../../images/svg/new-homepage/dct.svg"
import dx from "../../../../images/svg/new-homepage/dx.svg"
import dgo from "../../../../images/svg/new-homepage/dgo.svg"
import dt from "../../../../images/svg/new-homepage/dt.svg"
import dbot from "../../../../images/svg/new-homepage/dbot.svg"
import { FilterKeyType, PlatformTab } from './type'
import { Localize } from 'components/localization'

export const platformTabs: PlatformTab[] = [
    { content: <Localize translate_text="_t_All_t_" />, tabId: 'All' },
    { content: <Localize translate_text="_t_CFDs_t_" />, tabId: 'CFDs' },
    { content: <Localize translate_text="_t_Options_t_" />, tabId: 'Options' },
    { content: <Localize translate_text="_t_Bots_t_" />, tabId: 'Bots' },
    { content: <Localize translate_text="_t_Social_t_" />, tabId: 'Social' },
]

type PlatformCardContent = CardContent & {
    filterKey: FilterKeyType[]
}

export const RowCards: PlatformCardContent[] = [
    {
        id: 1,
        filterKey: ['CFDs'],
        header: 'Deriv MT5',
        description: (
            <Localize translate_text="_t_The most popular and comprehensive CFDs platform._t_" />
        ),
        icon: (
            <img
                src={dmt5}
                alt="deriv mt5"
                width={48}
                height={48}
                loading="lazy"
            />
        ),
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/dmt5',
            descriptiveText: 'About Deriv MT5',
        },
    },
    {
        id: 2,
        filterKey: ['CFDs', 'Social'],
        header: <Localize translate_text="_t_Deriv cTrader_t_" />,
        description: (
            <Localize translate_text="_t_Fast CFDs platform with inbuilt copy trading._t_" />
        ),
        icon: (
            <img
                src={dct}
                alt="deriv ctrader"
                width={48}
                height={48}
                loading="lazy"
            />
        ),
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/deriv-ctrader',
            descriptiveText: 'About Deriv cTrader',
        },
    },
    {
        id: 3,
        filterKey: ['CFDs'],
        header: <Localize translate_text="_t_Deriv X_t_" />,
        description: (
            <Localize translate_text="_t_User-friendly and customisable CFDs platform._t_" />
        ),
        icon: (
            <img src={dx} alt="deriv x" width={48} height={48} loading="lazy" />
        ),
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/derivx',
            descriptiveText: 'About Deriv X',
        },
    },
    {
        id: 4,
        filterKey: ['Options'],
        header: 'Deriv GO',
        description: (
            <Localize translate_text="_t_Mobile app for multipliers trading on the go._t_" />
        ),
        icon: (
            <img src={dgo} alt="deriv go" width={48} height={48} loading="lazy" />
        ),
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/deriv-go',
            descriptiveText: 'About Deriv GO',
        },
    },
    {
        id: 5,
        filterKey: ['Options'],
        header: <Localize translate_text="_t_Deriv Trader_t_" />,
        description: (
            <Localize translate_text="_t_Flagship options, accumulators, and multipliers trading platform._t_" />
        ),
        icon: (
            <img
                src={dt}
                alt="deriv trader"
                width={48}
                height={48}
                loading="lazy"
            />
        ),
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/dtrader',
            descriptiveText: 'About Deriv Trader',
        },
    },
    {
        id: 6,
        filterKey: ['Options', 'Bots'],
        header: <Localize translate_text="_t_Deriv Bot_t_" />,
        description: <Localize translate_text="_t_Automated trading. No coding required._t_" />,
        icon: (
            <img
                src={dbot}
                alt="deriv bot"
                width={48}
                height={48}
                loading="lazy"
            />
        ),
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/dbot',
            descriptiveText: 'About Deriv Bot',
        },
    },
]

export const EUCards: CardContent[] = [
    {
        id: 1,
        header: 'Deriv MT5',
        description: (
            <Localize
                translate_text="_t_The most popular and comprehensive <0>CFDs</0> platform._t_"
                components={[<strong key={0} />]}
            />
        ),
        icon: (
            <img
                src={dmt5}
                alt="deriv mt5"
                width={48}
                height={48}
                loading="lazy"
            />
        ),
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/dmt5',
            descriptiveText: 'About Deriv MT5',
        },
    },
    {
        id: 2,
        header: <Localize translate_text="_t_Deriv Trader_t_" />,
        description: (
            <Localize
                translate_text="_t_Flagship trading platform for <0>multipliers</0>._t_"
                components={[<strong key={0} />]}
            />
        ),
        icon: (
            <img
                src={dt}
                alt="deriv trader"
                width={48}
                height={48}
                loading="lazy"
            />
        ),
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: <Localize translate_text="_t_Learn more_t_" />,
            href: '/dtrader',
            descriptiveText: 'About Deriv Trader',
        },
    },
]
