import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
    slider_wrapper,
    swiper_slide,
    slider_button,
    slider_button_prev,
    slider_button_next,
} from './styles.module.scss'
import Container from 'features/components/atoms/container'
import { TString } from 'types/generics'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { LinkUrlType } from 'features/types'
import dclsx from 'features/utils/dclsx'
import Image from 'features/components/atoms/image'
import RightArrowIcon from 'images/svg/chevron-right.svg'
import LeftArrowIcon from 'images/svg//chevron-left.svg'
import Card from 'features/components/atoms/card'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'

export type RenderableDataType = {
    icon: string
    heading: TString
    paragraph: TString
    link: LinkUrlType
}
interface PropsType extends FlexBoxProps<'section'> {
    renderableData: RenderableDataType[]
    heading: TString
}

const PlatformsCarousel = ({ heading, renderableData, ...rest }: PropsType) => {
    return (
        <Container.Fixed as="section" padding_block="20x" md={{ padding_block: '40x' }} {...rest}>
            <Container.Fluid>
                <Typography.Heading as="h2" align="center" size="large" mb="8x" md={{ mb: '40x' }}>
                    <Localize translate_text={heading} />
                </Typography.Heading>
                <div className={dclsx('md-padding-inline-15x', slider_wrapper)}>
                    <Swiper
                        speed={1500}
                        slidesPerView={1}
                        spaceBetween={30}
                        modules={[Autoplay, Navigation, Pagination]}
                        autoplay={false}
                        autoHeight={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                                pagination: false,
                                navigation: {
                                    enabled: true,
                                    prevEl: '.slider-button-prev',
                                    nextEl: '.slider-button-next',
                                },
                            },
                        }}
                        className={dclsx(
                            'padding-inline-5x padding-bottom-15x md-padding-bottom-10x',
                        )}
                    >
                        {renderableData.map((slide, i) => (
                            <SwiperSlide key={i} className={swiper_slide}>
                                <Card.Primary
                                    header={slide.heading}
                                    description={slide.paragraph}
                                    icon={slide.icon}
                                    link={slide.link}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        className={dclsx(
                            'padding-0x slider-button-prev visible-larger-than-tablet',
                            slider_button,
                            slider_button_prev,
                        )}
                    >
                        <Image src={LeftArrowIcon} alt="icon" />
                    </button>
                    <button
                        className={dclsx(
                            'padding-0x slider-button-next visible-larger-than-tablet',
                            slider_button,
                            slider_button_next,
                        )}
                    >
                        <Image src={RightArrowIcon} alt="icon" />
                    </button>
                </div>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default PlatformsCarousel
