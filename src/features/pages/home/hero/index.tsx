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
import Container from 'features/components/atoms/container'
import useBreakpoints from 'components/hooks/use-breakpoints'

const HomeHero = () => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <section className={styles.home_hero}>
            <HeroBackground />

            <Container.Fluid
                className={styles.content}
                margin_block={is_mobile_or_tablet ? 'small' : 'extra-large'}
            >
                <div className={styles.left_side}>
                    <HeroHeaderItems className={styles.header_titles} />
                    <HeroTitle />
                    <HeroFeaturesCarousel />
                    <HeroCtaButton />
                </div>
                <div className={styles.right_side}>
                    <HeroImageCarousel />
                </div>
            </Container.Fluid>
        </section>
    )
}

export default HomeHero
