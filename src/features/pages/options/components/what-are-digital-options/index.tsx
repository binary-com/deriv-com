import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const WhatAreDigitalOptions = () => {
    return (
        <Flex.Box
            container="fluid"
            justify="center"
            align="center"
            direction="col"
            padding_block="20x"
            gap={'8x'}
        >
            <Typography.Heading>
                <Localize translate_text="_t_What are digital options?_t_" />
            </Typography.Heading>
            <Typography.Paragraph>
                <Localize translate_text="_t_Digital options that allow you to predict the outcome from two possible results and earn a fixed payout if your prediction is correct._t_" />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default WhatAreDigitalOptions
