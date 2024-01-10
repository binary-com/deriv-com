import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './meet-us-there.module.scss'
import { ExpoCardTypes } from './types'
import { localize } from 'components/localization'

export const expo_cards: ExpoCardTypes[] = [
    {
        title: '_t_iFX Expo Dubai_t_',
        date: '_t_16-18 January 2024_t_',
        image: (
            <StaticImage
                src="../../../../../images/common/deriv-prime/ifx_expo_dubai.png"
                alt={localize('_t_Cyprus Expo_t_')}
                className={styles.image}
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        link: 'https://dubai2024.ifxexpo.com/discover/',
    },
    {
        title: '_t_iFX Expo Latam_t_',
        date: '_t_9-11 April 2024_t_',
        image: (
            <StaticImage
                src="../../../../../images/common/deriv-prime/ifx_expo_latam.png"
                alt={localize('_t_Dubai Expo_t_')}
                className={styles.image}
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        link: 'https://latam2024.ifxexpo.com/',
    },
    {
        title: '_t_Forex Expo Dubai_t_',
        date: '_t_7-8 October 2024_t_',
        image: (
            <StaticImage
                src="../../../../../images/common/deriv-prime/forex_expo_dubai.png"
                alt={localize('_t_London Summit_t_')}
                className={styles.image}
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        link: 'https://theforexexpo.com/dubai2024/',
    },
]
