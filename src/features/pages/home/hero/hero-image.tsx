import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import clsx from 'clsx'
import { hero_img_eu, hero_img } from './styles.module.scss'
import { isEuDomain } from 'common/utility'
import useRegion from 'components/hooks/use-region'

const HeroImage = () => {
    const { is_eu } = useRegion()
    return isEuDomain() || is_eu ? (
        <div className={clsx('absolute inset-50 flex items-end -z-10', hero_img_eu)}>
            <StaticImage
                src="../../../../images/migration/home/home_hero_new_eu.png"
                alt="hero image"
                placeholder="none"
                formats={['auto', 'webp']}
                loading="eager"
            />
        </div>
    ) : (
        <div className={clsx('absolute inset-50 flex items-end -z-10', hero_img)}>
            <StaticImage
                src="../../../../images/migration/home/home_hero_new.png"
                alt="hero image"
                placeholder="none"
                formats={['auto', 'webp']}
                loading="eager"
            />
        </div>
    )
}

export default HeroImage
