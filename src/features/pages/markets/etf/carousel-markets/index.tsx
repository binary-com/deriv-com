import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { swiper_wrapper } from './styles.module.scss'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { CardType } from 'features/components/atoms/card/type'
import Card from 'features/components/atoms/card'

interface MarketsMainSliderProps {
    cards: CardType[]
}

const MarketsMainSlider = ({ cards }: MarketsMainSliderProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <>
            {is_mobile_or_tablet ? (
                cards.map((card) => (
                    <Card.Primary
                        header={card.header}
                        description={card.description}
                        icon={card.icon}
                        link={card.link}
                        key={card.id}
                    />
                ))
            ) : (
                <Swiper
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
                    className={swiper_wrapper}
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <Card.Primary
                                header={card.header}
                                description={card.description}
                                icon={card.icon}
                                link={card.link}
                                key={card.id}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    )
}

export default MarketsMainSlider
