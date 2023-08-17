import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './meet-us-there.module.scss'
import { ExpoCardTypes } from './types'

export const expo_cards: ExpoCardTypes[] = [
    {
        title: '_t_iFX EXPO Cyprus_t_',
        date: '_t_19-21 September 2023_t_',
        image: (
            <StaticImage
                src="../../../../../images/common/deriv-prime/dubai_expo.png"
                alt="Dubai Expo"
                className={styles.image}
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        link: 'https://cyprus2023.ifxexpo.com/',
    },
    {
        title: '_t_Forex Expo Dubai_t_',
        date: '_t_26-27 September 2023_t_',
        image: (
            <StaticImage
                src="../../../../../images/common/deriv-prime/cyprus_expo.png"
                alt="Cyprus Expo"
                className={styles.image}
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        link: 'https://theforexexpo.com/dubai2023/',
    },
    {
        title: '_t_FM London Summit_t_',
        date: '_t_20-22 November 2023_t_',
        image: (
            <StaticImage
                src="../../../../../images/common/deriv-prime/london_summit.png"
                alt="London Summit"
                className={styles.image}
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        link: 'https://events.financemagnates.com/fmls23/lp/',
    },
]
