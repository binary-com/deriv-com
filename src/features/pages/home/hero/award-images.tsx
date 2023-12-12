import React from 'react'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { hero_content_award_img } from './styles.module.scss'
import { localize } from 'components/localization'

const HeroAwardImages = () => {
    return (
        <div className={clsx('flex pb-general-xl', hero_content_award_img)}>
            <StaticImage
                src="../../../../images/migration/home/award-1.png"
                alt={localize('_t_Best forex spreads APAC 2023 by UF Awards_t_')}
                width={132}
                height={68}
                placeholder="none"
                formats={['auto', 'webp']}
                loading="eager"
            />
            <StaticImage
                src="../../../../images/migration/home/award-2.png"
                alt={localize('_t_Broker of the year 2023 by FinanceFeeds_t_')}
                width={132}
                height={68}
                placeholder="none"
                formats={['auto', 'webp']}
                loading="eager"
            />
            <StaticImage
                src="../../../../images/migration/home/award-3.png"
                alt={localize('_t_Most trusted broker APAC 2023 by UF Awards_t_')}
                width={132}
                height={68}
                placeholder="none"
                formats={['auto', 'webp']}
                loading="eager"
            />
        </div>
    )
}

export default HeroAwardImages
