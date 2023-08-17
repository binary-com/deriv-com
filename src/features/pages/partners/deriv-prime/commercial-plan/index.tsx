import React from 'react'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Table from 'features/components/atoms/table'

const tableData = [
    {
        '_t_Monthly volume requirement_t_': <Localize translate_text="_t_0 - 3 billion_t_" />,
        '_t_Fee per million_t_': '$ 8.00',
    },
    {
        '_t_Monthly volume requirement_t_': <Localize translate_text="_t_> 3 - 5 billion_t_" />,
        '_t_Fee per million_t_': '$ 7.00',
    },
    {
        '_t_Monthly volume requirement_t_': <Localize translate_text="_t_> 5 - 10 billion_t_" />,
        '_t_Fee per million_t_': '$ 5.00',
    },
    {
        '_t_Monthly volume requirement_t_': (
            <Localize
                translate_text="_t_0 - 15 billion <0>(Crypto)</0>_t_"
                components={[<span key={0} />]}
            />
        ),
        '_t_Fee per million_t_': '5.5 bps / 0.055%',
    },
    {
        '_t_Monthly volume requirement_t_': (
            <Localize
                translate_text="_t_0 - 15 billion <0>(Crypto)</0>_t_"
                components={[<span key={0} />]}
            />
        ),
        '_t_Fee per million_t_': '5 bps / 0.05%',
    },
]

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
                <Table data={tableData} />
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default CommercialPlan
