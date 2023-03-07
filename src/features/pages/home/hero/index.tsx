import React from 'react'
import * as styles from './hero.module.scss'
import HeroHeaderItems from './hero-header.items'
import HeroTitle from './hero.title'
import HeroFeaturesCarousel from './hero-features.carousel'
import HeroCtaButton from './hero-cta.button'
import HeroImageCarousel from './hero-image.carousel'
import HeroBackground from './hero.background'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import SContainer from 'features/components/container'

const HomeHero = () => {
    return (
        <section className={styles.home_hero}>
            <HeroBackground />

            <SContainer className={styles.content}>
                <div className={styles.right_side}>
                    <HeroHeaderItems className={styles.header_titles} />
                    <HeroTitle />
                    <HeroFeaturesCarousel />
                    <HeroCtaButton />
                </div>
                <div className={styles.left_side}>
                    <HeroImageCarousel />
                </div>
            </SContainer>
        </section>
    )
}

export default HomeHero
