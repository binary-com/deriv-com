import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'

interface WhatAreDigitalOptionsProps {
    heading: TString
    description: TString
}

const WhatAreDigitalOptions = ({ heading, description }: WhatAreDigitalOptionsProps) => {
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
                <Localize translate_text={heading} />
            </Typography.Heading>
            <Typography.Paragraph>
                <Localize translate_text={description} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default WhatAreDigitalOptions
