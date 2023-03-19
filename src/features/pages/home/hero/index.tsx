import React from 'react'
import * as styles from './hero.module.scss'
import HeroHeaderItems from './hero-header.items'
import HeroTitle from './hero.title'
import HeroFeaturesCarousel from './hero-features.carousel'
import HeroCtaButton from './hero-cta.button'
import HeroImageCarousel from './hero-image.carousel'
import Container from 'features/components/atoms/container'
import useBreakpoints from 'components/hooks/use-breakpoints'

const HomeHero = () => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <Container.Fixed as="section" bgcolor="white" className={styles.home_hero}>
            <Container.Fluid
                className={styles.content}
                margin_block={is_mobile_or_tablet ? '10x' : '25x'}
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
        </Container.Fixed>
    )
}

export default HomeHero
