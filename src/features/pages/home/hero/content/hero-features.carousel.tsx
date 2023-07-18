import React from 'react'
import { hero_typewriter, text, wrapper } from './hero-content.module.scss'
import { localize } from 'components/localization'

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
            <div className={text}>
                <div className={wrapper}>
                    {strings.map((string, i) => (
                        <p key={i}>{localize(`_t_${string}_t_`)}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroFeaturesCarousel

