import React from 'react'
import { NumberItem } from '../types'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'

interface INumberProps {
    item: NumberItem
}

const DP2NumberItem = ({ item }: INumberProps) => {
    return (
        <Flex.Box direction="col" align="center" md={{ padding_inline: '26x' }}>
            <Typography.Heading as="h2" size="large">
                <Localize translate_text={item.header} />
            </Typography.Heading>
            <Typography.Paragraph>
                <Localize translate_text={item.description} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default DP2NumberItem
