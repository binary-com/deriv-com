import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './meet-us-there.module.scss'
import { ExpoCardTypes } from './types'
import { localize } from 'components/localization'

export const expo_cards: ExpoCardTypes[] = [
    {
        id: 1,
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
        link: 'https://cyprus2024.ifxexpo.com/',
    },
    {
        id: 2,
        title: 'iFX Expo Asia',
        date: '_t_16-18 September 2024_t_',
        image: (
            <StaticImage
                src="../../../../../images/common/deriv-prime/ifx_asia.png"
                alt={localize('_t_iFX Expo Asia Exhibitor_t_')}
                className={styles.image}
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        link: 'https://ifxexpo.com/',
    },
    {
        id: 3,
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
