import React from 'react'
import TrustpilotContainer from './trustpiolot-container'
import { title_wrapper } from './styles.module.scss'
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
                <Flex.Item className={title_wrapper} md={{ basis: '6-12' }}>
                    <Typography.Heading size="medium" align="right">
                        <Localize translate_text="_t_Rated excellent on_t_" />
                    </Typography.Heading>
                </Flex.Item>
                <TrustpilotContainer />
            </Flex.Box>
        </Container.Fixed>
    )
}

export default ClientTestimonial
