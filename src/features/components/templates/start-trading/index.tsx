import React from 'react'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import TimelineItem from 'features/components/molecules/timeline-item'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'

const StartTrading = () => {
    return (
        <Container.Fixed as="section" padding_block="40x">
            <Flex.Box direction="col" container="fluid" align="start">
                <Typography.Heading as="h2" textcolor="black" size="small" mb="20x">
                    <Localize translate_text="_t_Start trading options on Deriv_t_" />
                </Typography.Heading>

                <LinkButton.Primary url={{ type: 'internal', to: '/' }}>
                    <Localize translate_text="_t_Create free demo account_t_" />
                </LinkButton.Primary>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default StartTrading
