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
import FlexBox from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Quote from 'images/svg/testimonials/quote.svg'
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
        <FlexBox className={'testimonial_slider_container'}>
            <Swiper
                centeredSlides
                modules={[Navigation]}
                navigation={{
                    enabled: true,
                    prevEl: '.slider-button-previous',
                    nextEl: '.slider-button-next',
                }}
                grabCursor
                dir={get_lang_direction()}
            >
                {visible_slides.map(({ id, data }) => (
                    <SwiperSlide key={id}>
                        <FlexBox
                            direction="col"
                            justify="center"
                            align="start"
                            gap="20x"
                            padding_inline="20x"
                            className="testimonial_slide"
                            padding_block={'20x'}
                        >
                            <Typography.Paragraph size="large">
                                <Localize translate_text={data.quote} />
                            </Typography.Paragraph>
                            <Typography.Paragraph weight="bold">{data.name}</Typography.Paragraph>
                        </FlexBox>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Image src={Quote} className={'quote_image'} />
            <Image src={LeftArrowIcon} has_rtl className="slider-button slider-button-previous" />
            <Image src={RightArrowIcon} has_rtl className="slider-button slider-button-next" />
        </FlexBox>
    )
}

export default TestimonialSlider
