import React from 'react'
import { data, column_data } from '../commercial-plan/data'
import { commercial_table_faq } from './styles.module.scss'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Table from 'features/components/atoms/table'

const FAQCommercialPlan = () => {
    return (
        <Container.Fixed
            as="section"
            pt="20x"
            pb="12x"
            bgcolor="white"
            md={{ padding_block: '0x' }}
        >
            <Container.Fixed md={{ padding_block: '20x' }}>
                <Typography.Heading as="h2" align="center" size="xs" mb="5x">
                    <Localize translate_text="_t_Scalable commercial plan_t_" />
                </Typography.Heading>
                <Table.Shadow
                    data={data}
                    columns={column_data}
                    striped
                    layout="fixed"
                    className={commercial_table_faq}
                />
            </Container.Fixed>
        </Container.Fixed>
    )
}

export default FAQCommercialPlan
