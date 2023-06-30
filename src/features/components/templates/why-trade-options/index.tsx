import React from 'react'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import Flex from 'features/components/atoms/flex-box'

const WhyTradeOptions = () => {
    return (
        <Container.Fixed as="section" bgcolor="black" padding_block="40x">
            <Container.Fluid>
                <Typography.Heading
                    as="h2"
                    textcolor="inverted"
                    align="center"
                    size="small"
                    mb="20x"
                >
                    <Localize translate_text="_t_Why trade options on Deriv_t_" />
                </Typography.Heading>

                <Flex.Box direction="col" align="center">
                    <Typography.Heading as="h4" textcolor="inverted" size="xxs" mb="8x">
                        <Localize translate_text="_t_Don't have a Deriv account yet?_t_" />
                    </Typography.Heading>
                    <Button.Primary textsize="medium">
                        <Localize translate_text="_t_Create free demo account_t_" />
                    </Button.Primary>
                </Flex.Box>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default WhyTradeOptions
