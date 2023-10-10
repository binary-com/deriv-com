import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { ClassProps, TTypographyColor } from 'features/types'
import { TString } from 'types/generics'
import dclsx from 'features/utils/dclsx'

export interface LabelProps extends ClassProps {
    className?: string
    text: TString
    textcolor?: TTypographyColor
    backgroundColor?: TString
}

const Label = ({ className, text, textcolor = 'white', backgroundColor, ...rest }: LabelProps) => {
    return (
        <Flex.Box
            justify="center"
            padding_block="2x"
            padding_inline="4x"
            className={dclsx(className, 'label_container')}
            {...rest}
        >
            <Typography.Paragraph size="small" textcolor={textcolor} weight="bold">
                <Localize translate_text={text} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default Label
