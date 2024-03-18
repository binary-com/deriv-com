import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { localize } from 'components/localization'

export const rightImage = () => {
    return (
        <StaticImage
            src="../../../../images/migration/responsibe-trading/trading-limits.jpg"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            alt={localize('_t_Trading app showing your trading account limits_t_')}
            className="rounded-1200"
        />
    )
}

export const rightImageEU = () => {
    return (
        <StaticImage
            src="../../../../images/migration/responsibe-trading/trading-limits-eu.jpg"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            alt={localize('_t_Trading app showing your trading account limits_t_')}
            className="rounded-1200"
        />
    )
}
export const listData = [
    {
        id: 1,
        text: '_t_Limit the amount of money you may trade within a specified period._t_',
    },
    {
        id: 2,
        text: '_t_Limit the losses you may incur within a specified period._t_',
    },
    {
        id: 3,
        text: '_t_Limit the amount of time you may trade in a session._t_',
    },
    {
        id: 4,
        text: '_t_Exclude yourself from trading on our website for a definite or indefinite period._t_',
    },
]
