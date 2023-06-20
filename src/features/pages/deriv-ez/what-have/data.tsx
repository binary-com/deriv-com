import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AcuityFeaturesTypes } from '../types'

export const content_data: AcuityFeaturesTypes[] = [
    {
        id: 0,
        title: '_t_World markets right on your desktop_t_',
        subtitle: '_t_Trade on various financial and derived assets via the web terminal._t_',
        image: (
            <StaticImage
                src="../../../../images/common/trading-platforms/deriv-ez/world-markets.png"
                alt="Trading indicators and tools"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                placeholder="none"
            />
        ),
    },
    {
        id: 1,
        title: '_t_On-the-go trading_t_',
        subtitle:
            '_t_Deriv EZ also lives within the Deriv GO mobile app, so you can trade CFDs anywhere._t_',
        image: (
            <StaticImage
                src="../../../../images/common/trading-platforms/deriv-ez/on-go-trading.png"
                alt="Deriv GO trading app"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                placeholder="none"
            />
        ),
    },
    {
        id: 2,
        title: '_t_Helpful trading tools_t_',
        subtitle:
            '_t_Take advantage of 50+ indicators and other tools to help you make informed decisions._t_',
        image: (
            <StaticImage
                src="../../../../images/common/trading-platforms/deriv-ez/helpful-tools.png"
                alt="Deriv EZ account creation"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                placeholder="none"
            />
        ),
    },
]
