import React from 'react'
import { P2PItem } from '../types'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'

interface IP2PItemProps {
    item: P2PItem
    is_even: boolean
}

const DP2PItem = ({ item, is_even }: IP2PItemProps) => {
    return (
        <Flex.Box
            justify="between"
            align="center"
            gap="10x"
            direction={is_even ? 'row-reverse' : 'row'}
            mt="40x"
        >
            <Flex.Item basis="5-12">{item.img}</Flex.Item>
            <Flex.Item basis="6-12">
                <Typography.Heading as="h3" size="small" mb="4x">
                    <Localize translate_text={item.header} />
                </Typography.Heading>
                <Typography.Paragraph size="xlarge">
                    <Localize translate_text={item.description} />
                </Typography.Paragraph>
            </Flex.Item>
        </Flex.Box>
    )
}

export default DP2PItem
