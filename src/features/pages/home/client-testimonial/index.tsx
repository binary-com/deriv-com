import React from 'react'
import TestimonialSlider from './slider'
import TrustpilotContainer from './trustpiolot-container'
import FlexBox from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'

const ClientTestimonial = () => {
    return (
        <Container.Fixed bgcolor="secondary">
            <FlexBox
                container="fluid"
                direction="col"
                justify="between"
                align="center"
                padding_block="40x"
                gap="20x"
                md={{
                    direction: 'row',
                }}
            >
                <TrustpilotContainer />
                <TestimonialSlider />
            </FlexBox>
        </Container.Fixed>
    )
}

export default ClientTestimonial
