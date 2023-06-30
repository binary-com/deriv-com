import React from 'react'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const WhyTradeOptions = () => {
    return (
        <Container.Fixed as="section" bgcolor="black" padding_block="40x">
            <Container.Fluid>
                <Typography.Heading
                    as="h2"
                    textcolor="inverted"
                    align="center"
                    size="large"
                    mb="20x"
                >
                    <Localize translate_text="_t_Why trade options on Deriv_t_" />
                </Typography.Heading>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default WhyTradeOptions
