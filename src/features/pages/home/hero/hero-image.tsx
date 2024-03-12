import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import clsx from 'clsx'
import { hero_img, hero_img_eu } from './styles.module.scss'
import { useShowCfdBanner } from 'components/hooks/use-show-cfd-banner'

const HeroImage = () => {
    const show_banner = useShowCfdBanner()
    return (
        <div
            className={clsx(
                'absolute flex items-end -z-10',
                show_banner ? 'lg:inset-50' : 'inset-50',
                show_banner ? hero_img_eu : hero_img,
            )}
        >
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

export default HeroImage
