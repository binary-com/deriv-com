import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { CardContent } from '@deriv-com/components'
import { Localize, localize } from 'components/localization'

export const RowCards: CardContent[] = [
    {
        id: 1,
        header: <Localize translate_text="_t_1. Sign up and explore_t_" />,
        description: (
            <Localize translate_text="_t_Sign up in minutes and explore Trader’s Hub — all your trading needs, in one place._t_" />
        ),
        content: (
            <StaticImage
                src="../../../../images/migration/home/steps1.png"
                alt={localize('_t_Sign up and explore_t_')}
                loading="lazy"
                formats={['webp', 'auto']}
                quality={100}
            />
        ),
        color: 'gray',
        align: 'center',
        size: 'md',
        contentClassName: 'px-general-lg pt-general-lg',
        nonContentClassName: '[&>*:nth-child(1)]:!flex-1 !max-h-none',
    },
    {
        id: 2,
        header: <Localize translate_text="_t_2. Try with zero-risk_t_" />,
        description: (
            <Localize translate_text="_t_Try any trade, on any platform with a zero-risk, demo trading account._t_" />
        ),
        content: (
            <StaticImage
                src="../../../../images/migration/home/steps2.png"
                alt={localize('_t_Try with zero-risk_t_')}
                loading="lazy"
                formats={['webp', 'auto']}
                quality={100}
            />
        ),
        color: 'gray',
        align: 'center',
        size: 'md',
        contentClassName: 'px-general-lg pt-general-lg',
        nonContentClassName: '[&>*:nth-child(1)]:!flex-1 !max-h-none',
    },
    {
        id: 3,
        header: <Localize translate_text="_t_3. Trade with confidence_t_" />,
        description: (
            <Localize translate_text="_t_Fund your account and start trading with round-the-clock support._t_" />
        ),
        content: (
            <StaticImage
                src="../../../../images/migration/home/steps3.png"
                alt={localize('_t_Trade with confidence_t_')}
                loading="lazy"
                formats={['webp', 'auto']}
                quality={100}
            />
        ),
        color: 'gray',
        align: 'center',
        size: 'md',
        contentClassName: 'px-general-lg pt-general-lg',
        nonContentClassName: '[&>*:nth-child(1)]:!flex-1 !max-h-none',
    },
]

export const EUCards: CardContent[] = [
    {
        id: 1,
        header: <Localize translate_text="_t_1. Sign up and explore_t_" />,
        description: (
            <Localize translate_text="_t_Sign up in minutes and explore Trader’s Hub — all your trading needs, in one place._t_" />
        ),
        content: (
            <StaticImage
                src="../../../../images/migration/home/steps1_eu.png"
                alt={localize('_t_Sign up and explore_t_')}
                loading="lazy"
                formats={['webp', 'auto']}
                quality={100}
            />
        ),
        color: 'gray',
        align: 'center',
        size: 'md',
        contentClassName: 'px-general-lg pt-general-lg',
        nonContentClassName: '[&>*:nth-child(1)]:!flex-1 !max-h-none',
    },
    {
        id: 2,
        header: <Localize translate_text="_t_2. Try with zero-risk_t_" />,
        description: (
            <Localize translate_text="_t_Try any trade, on any platform with a zero-risk, demo trading account._t_" />
        ),
        content: (
            <StaticImage
                src="../../../../images/migration/home/steps2_eu.png"
                alt={localize('_t_Try with zero-risk_t_')}
                loading="lazy"
                formats={['webp', 'auto']}
                quality={100}
            />
        ),
        color: 'gray',
        align: 'center',
        size: 'md',
        contentClassName: 'px-general-lg pt-general-lg',
        nonContentClassName: '[&>*:nth-child(1)]:!flex-1 !max-h-none',
    },
    {
        id: 3,
        header: <Localize translate_text="_t_3. Trade with confidence_t_" />,
        description: (
            <Localize translate_text="_t_Fund your account and start trading with round-the-clock support._t_" />
        ),
        content: (
            <StaticImage
                src="../../../../images/migration/home/steps3_eu.png"
                alt={localize('_t_Trade with confidence_t_')}
                loading="lazy"
                formats={['webp', 'auto']}
                quality={100}
            />
        ),
        color: 'gray',
        align: 'center',
        size: 'md',
        contentClassName: 'px-general-lg pt-general-lg',
        nonContentClassName: '[&>*:nth-child(1)]:!flex-1 !max-h-none',
    },
]
