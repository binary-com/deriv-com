import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import clsx from 'clsx'
import { hero_img } from './styles.module.scss'

const HeroImage = () => {
    return (
        <div className={clsx('absolute inset-50 flex items-end -z-100', hero_img)}>
            <StaticImage
                src="../../../../images/migration/home/person_hero.png"
                alt="hero image"
                placeholder="none"
                formats={['auto', 'png']}
                loading="eager"
            />
        </div>
    )
}

export default HeroImage
