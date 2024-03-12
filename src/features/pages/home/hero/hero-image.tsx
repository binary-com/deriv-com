import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import clsx from 'clsx'
import { hero_img } from './styles.module.scss'

const HeroImage = () => {
    return (
        <div className={clsx('absolute lg:inset-50 flex items-end -z-10', hero_img)}>
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
