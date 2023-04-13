import React from 'react'
import TrustpilotContainer from './trustpiolot-container'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const ClientTestimonial = () => {
    return (
        <Container.Fixed bgcolor="secondary">
            <Flex.Box
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
                <Flex.Item basis={'4-12'}>
                    <Typography.Heading as="h2" size="medium" mb="20x">
                        <Localize translate_text="_t_What our clients say about Deriv_t_" />
                    </Typography.Heading>
                    <TrustpilotContainer />
                </Flex.Item>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default ClientTestimonial
