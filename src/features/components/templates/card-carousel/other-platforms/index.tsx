import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { swiper_wrapper, swiper_card } from './styles.module.scss'
import CardBasic from 'features/components/atoms/card/card-basic'
import { CardType } from 'features/components/atoms/card/types'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'
import { TString } from 'types/generics'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

type TProps = {
    renderableData: CardType
    mainHeading: TString
}

const CardCarousel = ({ renderableData, mainHeading }: TProps) => {
    return (
        <Container.Fluid>
            <Typography.Heading align={'center'}>
                <Localize translate_text={mainHeading} />
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
                    {renderableData.map((item, index) => (
                        <SwiperSlide className={swiper_card} key={index + 1}>
                            <CardBasic
                                header={item.heading}
                                description={item.paragraph}
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
