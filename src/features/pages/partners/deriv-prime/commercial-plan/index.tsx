import React from 'react'
import { CommercialPlanTypes } from './types'
import { data, column_data } from './data'
import { commercial_table, container_faq, commercial_table_faq } from './styles.module.scss'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Table from 'features/components/atoms/table'

const CommercialPlan = ({ is_in_faq }: CommercialPlanTypes) => {
    return (
        <Container.Fixed
            as="section"
            pt="20x"
            pb="12x"
            bgcolor={is_in_faq ? 'white' : 'secondary'}
            md={is_in_faq ? { padding_block: '0x' } : { padding_block: '40x' }}
        >
            <Container.Fluid
                className={is_in_faq ? container_faq : commercial_table}
                md={{ padding_block: '20x' }}
            >
                <Typography.Heading
                    as="h2"
                    align="center"
                    size={is_in_faq ? 'xs' : 'large'}
                    mb="5x"
                >
                    <Localize translate_text="_t_Scalable commercial plan_t_" />
                </Typography.Heading>
                {!is_in_faq ? (
                    <Typography.Paragraph align="center" size="large" mt="8x" mb="20x">
                        <Localize translate_text="_t_We’ll help you maximise your earnings with a plan that suits your business._t_" />
                    </Typography.Paragraph>
                ) : null}
                <Table.Shadow
                    data={data}
                    columns={column_data}
                    striped
                    className={is_in_faq ? commercial_table_faq : commercial_table}
                />
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default CommercialPlan
