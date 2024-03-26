import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AwardImagesProps } from './awardProps'
import { localize } from 'components/localization'

export const awardImagesRow: AwardImagesProps[] = [
    {
        id: 0,
        image: (
            <StaticImage
                src="../../../../../images/common/awards/best-forex-spreads.png"
                alt={localize('_t_Best forex spread award_t_')}
                formats={['avif', 'webp', 'auto']}
                quality={100}
                placeholder="none"
                width={282}
            />
        ),
    },
    {
        id: 1,
        image: (
            <StaticImage
                src="../../../../../images/common/awards/broker-of-the-year.png"
                alt={localize('_t_Broker of the year award_t_')}
                formats={['avif', 'webp', 'auto']}
                quality={100}
                placeholder="none"
                width={282}
            />
        ),
    },

    {
        id: 2,
        image: (
            <StaticImage
                src="../../../../../images/common/awards/most-trusted.png"
                alt={localize('_t_Most trusted award_t_')}
                formats={['avif', 'webp', 'auto']}
                quality={100}
                placeholder="none"
                width={282}
            />
        ),
    },
]
