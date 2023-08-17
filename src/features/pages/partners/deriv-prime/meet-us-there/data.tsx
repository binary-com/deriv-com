import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './meet-us-there.module.scss'
import { ExpoCardTypes } from './types'
import { localize } from 'components/localization'

export const expo_cards: ExpoCardTypes[] = [
    {
        title: '_t_iFX EXPO Cyprus_t_',
        date: '_t_19-21 September 2023_t_',
        image: (
            <StaticImage
                src="../../../../../images/common/deriv-prime/dubai_expo.png"
                alt={localize('_t_Dubai Expo_t_')}
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
                alt={localize('_t_Cyprus Expo_t_')}
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
                alt={localize('_t_London Summit_t_')}
                className={styles.image}
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        link: 'https://events.financemagnates.com/fmls23/lp/',
    },
]
