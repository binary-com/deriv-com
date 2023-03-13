import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from './hero.module.scss'

const HeroBackground = () => {
    return (
        <div className={styles.bg_container}>
            <StaticImage
                src="../../../../images/common/home/hero_bg.png"
                alt="world map"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={26}
                objectFit="contain"
                placeholder="none"
            />
        </div>
    )
}

export default HeroBackground
