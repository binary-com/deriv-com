import React from 'react'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { hero_img_eu } from './styles.module.scss'

const EUImage = () => {
    return (
        <div className={clsx('absolute inset-50 flex items-end -z-10', hero_img_eu)}>
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

export default EUImage
