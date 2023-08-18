import React from 'react'
import { commercial_table } from './styles.module.scss'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Table from 'features/components/atoms/table'
import dclsx from 'features/utils/dclsx'

const tableData = [
    {
        '_t_Monthly volume requirement_t_': <Localize translate_text="_t_0 - 3 billion_t_" />,
        '_t_Fee per million_t_': <Localize translate_text="_t_$ 8.00_t_" />,
    },
    {
        '_t_Monthly volume requirement_t_': <Localize translate_text="_t_> 3 - 5 billion_t_" />,
        '_t_Fee per million_t_': <Localize translate_text="_t_$ 7.00_t_" />,
    },
    {
        '_t_Monthly volume requirement_t_': <Localize translate_text="_t_> 5 - 10 billion_t_" />,
        '_t_Fee per million_t_': <Localize translate_text="_t_$ 6.00_t_" />,
    },
    {
        '_t_Monthly volume requirement_t_': <Localize translate_text="_t_> 10 billion_t_" />,
        '_t_Fee per million_t_': <Localize translate_text="_t_$ 5.00_t_" />,
    },
    {
        '_t_Monthly volume requirement_t_': (
            <Localize
                translate_text="_t_0 - 15 million <0>(Crypto)</0>_t_"
                components={[<span key={0} className={dclsx('typography-color-light')} />]}
            />
        ),
        '_t_Fee per million_t_': <Localize translate_text="_t_5.5 bps / 0.055%_t_" />,
    },
    {
        '_t_Monthly volume requirement_t_': (
            <Localize
                translate_text="_t_> 15 million <0>(Crypto)</0>_t_"
                components={[<span key={0} className={dclsx('typography-color-light')} />]}
            />
        ),
        '_t_Fee per million_t_': <Localize translate_text="_t_5 bps / 0.05%_t_" />,
    },
]

const CommercialPlan = () => {
    return (
        <Container.Fixed
            as="section"
            pt="20x"
            pb="12x"
            bgcolor="secondary"
            md={{ padding_block: '40x' }}
        >
            <Container.Fluid md={{ padding_block: '20x' }}>
                <Typography.Heading as="h2" align="center">
                    <Localize translate_text="_t_Scalable commercial plan_t_" />
                </Typography.Heading>
                <Typography.Paragraph align="center" size="large" mt="8x" mb="20x">
                    <Localize translate_text="_t_We’ll help you maximise your earnings with a plan that suits your business._t_" />
                </Typography.Paragraph>
                <Table.Shadow data={tableData} striped className={commercial_table} />
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default CommercialPlan
