import React from 'react'
import TrustpilotContainer from './trustpiolot-container'
import { testimonial_section, quote_image, slider_wrapper } from './styles.module.scss'
import TestimonialSlider from './slider'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import Image from 'features/components/atoms/image'
import { Localize } from 'components/localization'
import Quote from 'images/svg/testimonials/quote.svg'

const ClientTestimonial = () => {
    return (
        <Container.Fixed as="section" className={testimonial_section}>
            <Flex.Box
                container="fluid"
                direction="col"
                justify="between"
                align="center"
                padding_block="40x"
                gap="10x"
                md={{
                    direction: 'row',
                }}
            >
                <Flex.Item basis="4-12">
                    <Typography.Heading as="h2" size="medium" mb="20x">
                        <Localize translate_text="_t_What our clients say about Deriv_t_" />
                    </Typography.Heading>
                    <TrustpilotContainer />
                </Flex.Item>
                <Flex.Box basis="2-12" align_self="start" justify="center">
                    <Image src={Quote} className={quote_image} />
                </Flex.Box>
                <Flex.Item basis="6-12" className={slider_wrapper}>
                    <TestimonialSlider />
                </Flex.Item>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default ClientTestimonial
