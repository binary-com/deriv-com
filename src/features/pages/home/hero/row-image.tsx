import React from 'react'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { hero_img } from './styles.module.scss'

const ROWImage = () => {
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

export default ROWImage
