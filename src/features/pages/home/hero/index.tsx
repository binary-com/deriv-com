import React from 'react'
import * as styles from './hero.module.scss'
import HeroHeaderItems from './hero-header.items'
import HeroTitle from './hero.title'
import HeroFeaturesCarousel from './hero-features.carousel'
import HeroCtaButton from './hero-cta.button'
import HeroImageCarousel from './hero-image.carousel'
import Container from 'features/components/atoms/container'
import FlexBox from 'features/components/atoms/flex-box'

const HomeHero = () => {
    return (
        <Container.Fixed as="section" bgcolor="white" className={styles.home_hero}>
            <Container.Fluid
                className={styles.content}
                margin_block={'10x'}
                md={{
                    margin_block: '30x',
                }}
            >
                <FlexBox justify="start" direction="col" align="start" gap="10x">
                    <HeroHeaderItems />
                    <HeroTitle />
                    <HeroFeaturesCarousel />
                    <HeroCtaButton />
                </FlexBox>
                <div className={styles.right_side}>
                    <HeroImageCarousel />
                </div>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default HomeHero
