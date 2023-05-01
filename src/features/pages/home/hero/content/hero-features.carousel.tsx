import React from 'react'
import Typewriter from 'typewriter-effect'
import { hero_typewriter } from './hero-content.module.scss'
import dclsx from 'features/utils/dclsx'
import { localize } from 'components/localization'

const HeroFeaturesCarousel = () => {
    return (
        <div className={hero_typewriter}>
            <Typewriter
                options={{
                    strings: [
                        localize('_t_Forex_t_'),
                        localize('_t_Cryptocurrencies_t_'),
                        localize('_t_Shares_t_'),
                        localize('_t_Commodities_t_'),
                        localize('_t_Derived Indices_t_'),
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: dclsx(
                        'heading',
                        'heading-large',
                        'typography-weight-bold',
                        'typography-color-primary',
                    ),
                    cursorClassName: dclsx('heading', 'heading-large', 'typography-color-primary'),
                }}
            />
        </div>
    )
}

export default HeroFeaturesCarousel
