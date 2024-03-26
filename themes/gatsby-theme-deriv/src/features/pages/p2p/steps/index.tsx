import React from 'react'
import DP2StepItem from './item'
import { step_items } from './data'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'

const DP2Steps = () => {
    return (
        <Container.Fixed as="section" pt="40x" md={{ padding_block: '20x' }}>
            <Container.Fluid>
                <Typography.Heading as="h2" size="large" align="center" md={{ mb: '30x' }}>
                    <Localize translate_text="_t_3 steps for faster deposits and withdrawals_t_" />
                </Typography.Heading>
                <Flex.Box gap="12x" direction="col" md={{ direction: 'row' }}>
                    {step_items.map((step) => (
                        <DP2StepItem key={step.id} item={step.data} />
                    ))}
                </Flex.Box>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default DP2Steps
