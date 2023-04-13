import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import testimonialSlides from '../data'
import RightArrowIcon from 'images/svg/layout/right_arrow_icon.svg'
import LeftArrowIcon from 'images/svg/layout/left_arrow_icon.svg'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'
import Typography from 'features/components/atoms/typography'
import { get_lang_direction, Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Box from 'features/components/atoms/box'
import './styles.scss'

const TestimonialSlider = () => {
    const { is_eu } = useRegion()

    const visible_slides = useVisibleContent({
        content: testimonialSlides,
        config: {
            is_eu,
        },
    })

    return (
        <Box className={'testimonial_slider_container'}>
            <Swiper
                centeredSlides
                modules={[Navigation]}
                navigation={{
                    prevEl: '.slider-button-previous',
                    nextEl: '.slider-button-next',
                }}
                grabCursor
                autoHeight
                dir={get_lang_direction()}
            >
                {visible_slides.map(({ id, data }) => (
                    <SwiperSlide key={id}>
                        <Flex.Box
                            direction="col"
                            justify="center"
                            align="start"
                            className="testimonial_slide"
                        >
                            <Typography.Paragraph
                                size="xlarge"
                                textcolor="tertiary"
                                mb="12x"
                                md={{ mb: '20x' }}
                            >
                                <Localize translate_text={data.quote} />
                            </Typography.Paragraph>
                            <Typography.Paragraph weight="bold" textcolor="tertiary">
                                {data.name}
                            </Typography.Paragraph>
                        </Flex.Box>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="slider-button slider-button-previous">
                <Image src={LeftArrowIcon} has_rtl />
            </button>
            <button className="slider-button slider-button-next">
                <Image src={RightArrowIcon} has_rtl />
            </button>
        </Box>
    )
}

export default TestimonialSlider
