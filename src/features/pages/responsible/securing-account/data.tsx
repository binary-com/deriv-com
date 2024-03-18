import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { localize } from 'components/localization'

export const rightImage = () => {
    return (
        <StaticImage
            src="../../../../images/migration/responsibe-trading/secure-trading.jpg"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            alt={localize('_t_Trading dashboard on a laptop_t_')}
            className="lg:rounded-1200"
        />
    )
}
