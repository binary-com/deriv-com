import React from 'react'
import { options_heading_section } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import Label from 'features/components/atoms/label'

interface WhatAreDigitalOptionsProps {
    heading: TString
    description: TString
    is_coming_soon: boolean
}

const WhatAreDigitalOptions = ({
    heading,
    description,
    is_coming_soon,
}: WhatAreDigitalOptionsProps) => {
    return (
        <Flex.Box
            justify="center"
            align="center"
            direction="col"
            padding_block="12x"
            md={{ padding_block: '20x' }}
            gap={'8x'}
            className={options_heading_section}
        >
            {is_coming_soon && (
                <Label text="_t_Available on Demo accounts only_t_" bgcolor="blue" />
            )}
            <Typography.Heading align="center" as="h1">
                <Localize translate_text={heading} />
            </Typography.Heading>
            <Typography.Paragraph align="center">
                <Localize translate_text={description} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default WhatAreDigitalOptions