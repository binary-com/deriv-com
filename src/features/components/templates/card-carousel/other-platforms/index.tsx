import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { OtherPlatformsProps } from './types'
import { swiper_wrapper } from './styles.module.scss'
import CardBasic from 'features/components/atoms/card/card-basic'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'
import { TString } from 'types/generics'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

type CardCarouselType = {
    renderable_data: OtherPlatformsProps
    main_heading: TString
}

const CardCarousel = ({ renderable_data, main_heading }: CardCarouselType) => {
    return (
        <Container.Fluid>
            <Typography.Heading align={'center'}>
                <Localize translate_text={main_heading} />
            </Typography.Heading>
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
                    {renderable_data.map((item, index) => (
                        <SwiperSlide key={index + 1}>
                            <CardBasic
                                header={item.header}
                                description={item.description}
                                icon={item.icon}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Flex.Box>
        </Container.Fluid>
    )
}

export default CardCarousel
