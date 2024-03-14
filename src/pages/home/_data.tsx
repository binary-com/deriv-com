import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { TContent, THeaderItem } from './_types'
import { localize } from 'components/localization'

export const header_items: THeaderItem[] = [
    { id: 0, text: '_t_Simple._t_' },
    { id: 1, text: '_t_Flexible._t_' },
    { id: 2, text: '_t_Reliable._t_' },
]

export const contents: TContent[] = [
    { id: 0, text: '_t_Tight spreads_t_' },
    { id: 1, text: '_t_Sharp prices_t_' },
    { id: 2, text: '_t_24x7 trading_t_' },
    { id: 3, text: '_t_100+ tradeable assets_t_' },
    { id: 4, text: '_t_20+ years of experience_t_' },
]

export const contents_ppc: TContent[] = [
    { id: 3, text: '_t_Tight spreads_t_' },
    { id: 2, text: '_t_Sharp prices_t_' },
    { id: 1, text: '_t_100+ tradeable assets_t_' },
    { id: 0, text: '_t_20+ years of experience_t_' },
]

export const row_images = [
    {
        key: 'hero1',
        image: (
            <StaticImage
                src="../../images/common/home/hero_platform1.png"
                alt={localize('_t_mobile app deriv go_t_')}
                formats={['avif', 'webp', 'auto']}
                quality={36}
                loading="eager"
                placeholder="none"
            />
        ),
    },
    {
        key: 'hero2',
        image: (
            <StaticImage
                src="../../images/common/home/hero_platform2.png"
                alt={localize('_t_laptop dtrader_t_')}
                formats={['avif', 'webp', 'auto']}
                quality={44}
                placeholder="none"
            />
        ),
    },
    {
        key: 'hero3',
        image: (
            <StaticImage
                src="../../images/common/home/hero_platform3.png"
                alt={localize('_t_laptop mt5_t_')}
                formats={['avif', 'webp', 'auto']}
                quality={38}
                placeholder="none"
            />
        ),
    },
    {
        key: 'hero4',
        image: (
            <StaticImage
                src="../../images/common/home/hero_platform4.png"
                alt={localize('_t_laptop deriv x_t_')}
                formats={['avif', 'webp', 'auto']}
                quality={44}
                placeholder="none"
            />
        ),
    },
]

export const eu_images = [
    {
        key: 'hero1_eu',
        image: (
            <StaticImage
                src="../../images/common/home/hero_platform1_eu.png"
                alt={localize('_t_laptop dtrader eu_t_')}
                formats={['avif', 'webp', 'auto']}
                quality={44}
                loading="eager"
                placeholder="none"
            />
        ),
    },
    {
        key: 'hero2_eu',
        image: (
            <StaticImage
                src="../../images/common/home/hero_platform2_eu.png"
                alt={localize('_t_laptop dmt5 eu_t_')}
                formats={['avif', 'webp', 'auto']}
                quality={38}
                placeholder="none"
            />
        ),
    },
]
