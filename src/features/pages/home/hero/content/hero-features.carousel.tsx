import React from 'react'
import Typewriter from 'typewriter-effect'
import dclsx from 'features/utils/dclsx'
import { localize } from 'components/localization'

const HeroFeaturesCarousel = () => {
    return (
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
                    'heading-large',
                    'typography-weight-bold',
                    'typography-color-primary',
                ),
                cursorClassName: dclsx('heading-large', 'typography-color-primary'),
            }}
        />
    )
}

export default HeroFeaturesCarousel
