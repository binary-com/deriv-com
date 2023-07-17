import React from 'react'
import { hero_typewriter, text, wrapper } from './hero-content.module.scss'
import { localize } from 'components/localization'

const strings = [
    localize('_t_Forex_t_'),
    localize('_t_Cryptocurrencies_t_'),
    localize('_t_Stocks & indices_t_'),
    localize('_t_Commodities_t_'),
    localize('_t_Derived Indices_t_'),
];

const HeroFeaturesCarousel = () => {
    return (
        <div className={hero_typewriter}>
            <div className={text}>
                <div className={wrapper}>
                    {strings.map((string, i) => (
                        <p key={i}>{string}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroFeaturesCarousel