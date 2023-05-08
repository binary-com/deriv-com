import React from 'react'
import DP2StepItem from './item'
import { step_items } from './data'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'

const DP2Steps = () => {
    return (
        <Container.Fixed as="section">
            <Container.Fluid>
                <Typography.Heading as="h2" size="large" align="center" mb="30x">
                    3 steps for faster deposits and withdrawals
                </Typography.Heading>
                <Flex.Box gap="12x">
                    {step_items.map((step) => (
                        <DP2StepItem key={step.id} item={step.data} />
                    ))}
                </Flex.Box>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default DP2Steps
