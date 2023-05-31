import React from 'react'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import { TString, TSmartContent } from 'types/generics'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'

type NumberItemConfig = {
    is_eu: boolean
}

type NumberItem = {
    header: TString
    description: TString
}

export type SmartNumberItem = TSmartContent<NumberItem, NumberItemConfig>

interface NumberProps extends FlexBoxProps<'div'> {
    item: NumberItem
}

const NumberItem = ({ item, ...rest }: NumberProps) => {
    return (
        <Flex.Box direction="col" align="center" md={{ padding_inline: '26x' }} {...rest}>
            <Typography.Heading as="h2" size="large">
                <Localize translate_text={item.header} />
            </Typography.Heading>
            <Typography.Paragraph>
                <Localize translate_text={item.description} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default NumberItem
