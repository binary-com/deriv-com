import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { TBGColor, TTypographyColor } from 'features/types'
import { TString } from 'types/generics'

export interface LabelProps {
    className?: string
    text: TString
    textcolor?: TTypographyColor
    bgcolor?: TBGColor
}

const Label = ({ text, textcolor = 'white', ...rest }: LabelProps) => {
    return (
        <Flex.Box justify="center" padding_block="2x" padding_inline="4x" radius="2x" {...rest}>
            <Typography.Paragraph size="small" textcolor={textcolor} weight="bold">
                <Localize translate_text={text} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default Label
