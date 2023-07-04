import React from 'react'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const StartTrading = () => {
    return (
        <Container.Fixed as="section" padding_block="40x">
            <Container.Fluid>
                <Typography.Heading as="h2" textcolor="black" align="center" size="small" mb="20x">
                    <Localize translate_text="_t_Start trading options on Deriv_t_" />
                </Typography.Heading>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default StartTrading
