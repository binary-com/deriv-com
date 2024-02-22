import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import clsx from 'clsx'
import { hero_img } from './styles.module.scss'
import useBuildVariant from 'features/hooks/use-build-variant'

const HeroImage = () => {
    const { region } = useBuildVariant()
    if (region === 'row') {
        return (
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
    if (region === 'eu') {
        return (
            <div className={clsx('absolute inset-50 flex items-end -z-10', hero_img)}>
                <StaticImage
                    src="../../../../images/migration/home/home_hero_new_eu.png"
                    alt="hero image"
                    placeholder="none"
                    formats={['auto', 'webp']}
                    loading="eager"
                />
            </div>
        )
    }
}

export default HeroImage
