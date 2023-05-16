import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AcuityFeaturesType } from '../../../components/molecules/image-text-boxes/types'

export const contentData: AcuityFeaturesType = {
    mobile_flex_direction: 'col',
    data: [
        {
            id: 0,
            title: '_t_On-the-go trading_t_',
            subtitle:
                '_t_Access your Deriv EZ trades effortlessly on the Deriv GO mobile app. No extra apps to download, no extra passwords to remember._t_',
            image: (
                <StaticImage
                    src="../../../../images/common/deriv-ez/on-go-trading.png"
                    alt="Deriv GO trading app"
                    loading="eager"
                    formats={['avif', 'webp', 'auto']}
                    quality={100}
                    objectFit="contain"
                    placeholder="none"
                />
            ),
        },
        {
            id: 1,
            title: '_t_50+ indicators and tools_t_',
            subtitle:
                '_t_Take advantage of more than 50 trading indicators and tools to make informed decisions._t_',
            image: (
                <StaticImage
                    src="../../../../images/common/deriv-ez/indicator.png"
                    alt="Trading indicators and tools"
                    loading="eager"
                    formats={['avif', 'webp', 'auto']}
                    quality={100}
                    objectFit="contain"
                    placeholder="none"
                />
            ),
        },
        {
            id: 2,
            title: '_t_Instant platform access_t_',
            subtitle:
                '_t_Start trading immediately, with no additional login ID or password to fill in. Don’t miss out on market opportunities._t_',
            image: (
                <StaticImage
                    src="../../../../images/common/deriv-ez/instant-platform.png"
                    alt="Deriv EZ account creation"
                    loading="eager"
                    formats={['avif', 'webp', 'auto']}
                    quality={100}
                    objectFit="contain"
                    placeholder="none"
                />
            ),
        },
    ],
}
