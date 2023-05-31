import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import * as styles from './styles.module.scss'
import useBreakpoints from 'components/hooks/use-breakpoints'
import CardBasic from 'features/components/atoms/card/card-primary'
import { CardType } from 'features/components/atoms/card/card-primary/type'
import { isBrowser } from 'common/utility'

interface MarketsMainSliderProps {
    cards: CardType[]
}

const MarketsMainSlider = ({ cards }: MarketsMainSliderProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()
    useEffect(() => {
        isBrowser() && window.document.getElementsByClassName('swiper-wrapper')[0]?.remove()
    }, [])

    return (
        <>
            {is_mobile_or_tablet ? (
                cards.map((card) => <CardBasic item={card} key={card.id} />)
            ) : (
                <Swiper
                    id={'swiper'}
                    slidesPerView={3}
                    spaceBetween={20}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    speed={1200}
                    modules={[Autoplay]}
                    breakpoints={{
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                    className={styles.swiper_wrapper}
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <CardBasic item={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    )
}

export default MarketsMainSlider
