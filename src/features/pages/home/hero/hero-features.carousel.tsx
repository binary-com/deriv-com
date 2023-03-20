import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { contents, contents_ppc } from './data'
import * as styles from './hero.module.scss'
import usePpc from 'features/hooks/use-ppc'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'

const HeroFeaturesCarousel = () => {
    const { is_ppc } = usePpc()

    const carousel_content = useMemo(() => {
        if (is_ppc) {
            return contents_ppc
        }
        return contents
    }, [is_ppc])

    return (
        <Swiper
            className={styles.features_carousel}
            style={{ marginInlineStart: 0 }}
            modules={[Autoplay]}
            slidesPerView={1}
            direction="vertical"
            autoHeight
            centeredSlides
            autoplay={{
                delay: 2000,
                waitForTransition: false,
            }}
        >
            {carousel_content.map((item) => (
                <SwiperSlide key={item.id} className={styles.features_carousel_slide}>
                    <Typography.Heading as={'h4'} size={'xxs'} weight="bold">
                        <Localize translate_text={item.text} />
                    </Typography.Heading>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default HeroFeaturesCarousel
