import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import clsx from 'clsx'
import { hero_img, hero_img_eu, hero_img_diel } from './styles.module.scss'
import useBuildVariant from 'features/hooks/use-build-variant'
import { useShowCfdBanner } from 'components/hooks/use-show-cfd-banner'

const HeroImage = () => {
    const { region } = useBuildVariant()
    const show_banner = useShowCfdBanner()
    
    if (region === 'row') {
        return (
            <div className={clsx('absolute inset-50 flex items-end -z-10', show_banner ? hero_img_diel : hero_img)}>
                <StaticImage
                    src="../../../../images/migration/home/home_hero_new.png"
                    alt="hero image"
                    placeholder="none"
                    formats={['auto', 'webp']}
                    loading="eager"
                    quality={80}
                />
            </div>
        )
    }
    if (region === 'eu') {
        return (
            <div className={clsx('absolute lg:inset-50 flex items-end -z-10', hero_img_eu)}>
                <StaticImage
                    src="../../../../images/migration/home/home_hero_new_eu.png"
                    alt="hero image"
                    placeholder="none"
                    formats={['auto', 'webp']}
                    loading="eager"
                    quality={80}
                />
            </div>
        )
    }
}

export default HeroImage
