import React from 'react'
import { hero_typewriter, wrapper, text } from './hero-content.module.scss'
import { localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'

const strings = [
    'Forex',
    'Cryptocurrencies',
    'Stocks & indices',
    'Commodities',
    'Derived Indices',
];

const HeroFeaturesCarousel = () => {
    return (
        <div className={hero_typewriter}>
            <Typography.Heading className={text} as="h3" size="large" weight="bold" color="primary">
                <div className={wrapper}>
                    {strings.map((string, i) => (
                        <p key={i}>{localize(`_t_${string}_t_`)}</p>
                    ))}
                </div>
            </Typography.Heading>
        </div>
    )
}

export default HeroFeaturesCarousel

