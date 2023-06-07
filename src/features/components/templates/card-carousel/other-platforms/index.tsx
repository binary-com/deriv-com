import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { swiper_wrapper, swiper_card } from './styles.module.scss'
import CardBase from 'features/components/atoms/card/card-base'
import DTraderIcon from 'images/svg/custom/rebranding/dtrader-icon.svg'
import DMT5Icon from 'images/svg/custom/rebranding/dmt5-icon.svg'
import DerivGOIcon from 'images/svg/custom/rebranding/deriv-go-icon.svg'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'

const CardCarousel = () => {
    return (
        <Container.Fluid>
            <Flex.Box direction="row">
                <Swiper
                    style={{
                        '--swiper-navigation-color': 'primary',
                        '--swiper-navigation-size': '16px',
                    }}
                    navigation={true}
                    slidesPerView={3}
                    modules={[Navigation]}
                    className={swiper_wrapper}
                >
                    <SwiperSlide className={swiper_card}>
                        <CardBase
                            header="_t_Deriv MT5_t_"
                            description="_t_The all-in-one CFD trading platform._t_"
                            icon={DMT5Icon}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={swiper_card}>
                        <CardBase
                            header="_t_Deriv Trader_t_"
                            description="_t_Our flagship app for trading options and multipliers._t_"
                            icon={DTraderIcon}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={swiper_card}>
                        <CardBase
                            header="_t_Deriv GO_t_"
                            description="_t_Our best trading experience on your mobile._t_"
                            icon={DerivGOIcon}
                        />
                    </SwiperSlide>

                    <SwiperSlide className={swiper_card}>
                        <CardBase
                            header="_t_Deriv MT5_t_"
                            description="_t_The all-in-one CFD trading platform._t_"
                            icon={DMT5Icon}
                        />
                    </SwiperSlide>

                    <SwiperSlide className={swiper_card}>
                        <CardBase
                            header="_t_Deriv MT5_t_"
                            description="_t_The all-in-one CFD trading platform._t_"
                            icon={DMT5Icon}
                        />
                    </SwiperSlide>
                </Swiper>
            </Flex.Box>
        </Container.Fluid>
    )
}

export default CardCarousel
