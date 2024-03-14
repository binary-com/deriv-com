import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './meet-us-there.module.scss'
import { ExpoCardTypes } from './types'
import { localize } from 'components/localization'

export const expo_cards: ExpoCardTypes[] = [
    {
        title: 'iFX Expo Latam',
        date: '_t_9-11 April 2024_t_',
        image: (
            <StaticImage
                src="../../../../../images/common/deriv-prime/ifx_expo_latam.png"
                alt={localize('_t_iFX Expo Latam Exhibitor_t_')}
                className={styles.image}
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        link: 'https://latam2024.ifxexpo.com/',
    },
    {
        title: 'iFX Expo Cyprus',
        date: '_t_18-20 June 2024_t_',
        image: (
            <StaticImage
                src="../../../../../images/common/deriv-prime/ifx_expo_cyprus.png"
                alt={localize('_t_iFX Expo International Cyprus Exhibitor_t_')}
                className={styles.image}
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        link: 'https://ifxexpo.com/',
    },
    {
        title: 'Forex Expo Dubai',
        date: '_t_7-8 October 2024_t_',
        image: (
            <StaticImage
                src="../../../../../images/common/deriv-prime/forex_expo_dubai.png"
                alt={localize('_t_Forex Expo Dubai Exhibitor_t_')}
                className={styles.image}
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        link: 'https://theforexexpo.com/dubai2024/',
    },
]
