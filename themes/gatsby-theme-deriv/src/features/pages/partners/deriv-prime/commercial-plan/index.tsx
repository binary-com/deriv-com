import React from 'react'
import { data, column_data } from './data'
import { commercial_table } from './styles.module.scss'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Table from 'features/components/atoms/table'

const CommercialPlan = () => {
    return (
        <Container.Fixed
            as="section"
            pt="20x"
            pb="12x"
            padding_inline="3x"
            bgcolor="secondary"
            md={{ padding_block: '40x', padding_inline: '0x' }}
        >
            <Container.Fluid md={{ padding_block: '20x' }}>
                <Typography.Heading as="h2" align="center">
                    <Localize translate_text="_t_Scalable commercial plan_t_" />
                </Typography.Heading>
                <Typography.Paragraph align="center" size="large" mt="8x" mb="20x">
                    <Localize translate_text="_t_We’ll help you maximise your earnings with a plan that suits your business._t_" />
                </Typography.Paragraph>
                <Table.Shadow
                    data={data}
                    columns={column_data}
                    striped
                    layout="fixed"
                    className={commercial_table}
                />
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default CommercialPlan
