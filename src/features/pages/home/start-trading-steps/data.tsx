import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { CardContent } from '@deriv-com/components'
import { localize } from 'components/localization'

export const Cards: CardContent[] = [
    {
        header: localize('_t_1. Sign up & explore_t_'),
        description: localize(
            '_t_Sign up in minutes and explore Trader’s Hub - all your trading needs, in one place._t_',
        ),
        content: (
            <StaticImage
                src="../../../../images/migration/home/steps1.png"
                alt={localize('_t_Sign up & explore_t_')}
                loading="eager"
                formats={['webp', 'auto']}
            />
        ),
        color: 'gray',
        align: 'center',
        size: 'md',
        className: 'flex flex-col-reverse',
        contentClassName: 'flex justify-center',
        nonContentClassName: 'p-general-2xl',
    },
    {
        header: localize('_t_2. Try with zero-risk_t_'),
        description: localize(
            '_t_Try any trade, on any platform with a zero-risk, demo trading account._t_',
        ),

        content: (
            <StaticImage
                src="../../../../images/migration/home/steps2.png"
                alt={localize('_t_Try with zero-risk_t_')}
                loading="eager"
                formats={['webp', 'auto']}
            />
        ),
        color: 'gray',
        align: 'center',
        size: 'md',
        className: 'flex flex-col-reverse',
        contentClassName: 'flex justify-center',
        nonContentClassName: 'p-general-2xl',
    },
    {
        header: localize('_t_3. Trade with confidence_t_'),
        description: localize(
            '_t_Sign up in minutes and explore Trader’s Hub - all your trading needs, in one place._t_',
        ),

        content: (
            <StaticImage
                src="../../../../images/migration/home/steps3.png"
                alt={localize('_t_Trade with confidence_t_')}
                loading="eager"
                formats={['webp', 'auto']}
            />
        ),
        color: 'gray',
        align: 'center',
        size: 'md',
        className: 'flex flex-col-reverse',
        contentClassName: 'flex justify-center',
        nonContentClassName: 'p-general-2xl',
    },
]
