import React from 'react'
import TrustpilotContainer from './trustpiolot-container'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const ClientTestimonial = () => {
    return (
        <Container.Fixed bgcolor="secondary" padding_block="10x">
            <Flex.Box
                container="fluid"
                direction="col"
                justify="between"
                align="center"
                padding_block="15x"
                gap="20x"
                md={{
                    direction: 'row',
                    padding_block: '40x',
                }}
            >
                <Flex.Item md={{ basis: '6-12' }}>
                    <Typography.Heading size="medium" align="center" md={{ align: 'right' }}>
                        <Localize translate_text="_t_Rated excellent on_t_" />
                    </Typography.Heading>
                </Flex.Item>
                <TrustpilotContainer />
            </Flex.Box>
        </Container.Fixed>
    )
}

export default ClientTestimonial
