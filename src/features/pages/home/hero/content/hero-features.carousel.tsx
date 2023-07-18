import React from 'react'
import { hero_typewriter, wrapper, text } from './hero-content.module.scss'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'

const strings: TString[] = [
    '_t_Forex_t_',
    '_t_Cryptocurrencies_t_',
    '_t_Stocks & indices_t_',
    '_t_Commodities_t_',
    '_t_Derived Indices_t_',
];

const HeroFeaturesCarousel = () => {
    return (
        <div className={hero_typewriter}>
            <Typography.Heading className={text} as="h3" size="large" weight="bold" color="primary">
                <div className={wrapper}>
                    {strings.map((string) => (
                        <p key={string}>
                            <Localize translate_text={string} />
                        </p>
                    ))}
                </div>
            </Typography.Heading>
        </div>
    )
}

export default HeroFeaturesCarousel
