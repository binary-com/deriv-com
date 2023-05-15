import React from 'react'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'

export type NumberItem = {
    header: TString
    description: TString
}

interface INumberProps extends FlexBoxProps<'div'> {
    item: NumberItem
}

const NumberItem = ({ item, ...rest }: INumberProps) => {
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
