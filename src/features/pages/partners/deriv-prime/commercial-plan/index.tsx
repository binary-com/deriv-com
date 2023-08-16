import React from 'react'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Table from 'features/components/atoms/table'

const CommercialPlan = () => {
    return (
        <Container.Fixed as="section" padding_block="40x" bgcolor="secondary">
            <Container.Fluid padding_block="20x">
                <Typography.Heading as="h2" align="center">
                    <Localize translate_text="_t_Scalable commercial plan_t_" />
                </Typography.Heading>
                <Typography.Paragraph align="center" size="large" mt="8x" mb="20x">
                    <Localize translate_text="_t_We’ll help you maximise your earnings with a plan that suits your business._t_" />
                </Typography.Paragraph>
                <Table />
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default CommercialPlan
