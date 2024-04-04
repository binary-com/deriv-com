import React from 'react'
import { P2PItem } from './types'
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
            justify="center"
            align="center"
            gap="10x"
            direction="col-reverse"
            mb="20x"
            md={{ direction: is_even ? 'row-reverse' : 'row', justify: 'between', mb: '40x' }}
        >
            <Flex.Item md={{ basis: '5-12' }}>{item.img}</Flex.Item>
            <Flex.Item md={{ basis: '6-12' }}>
                <Typography.Heading
                    as="h3"
                    size="small"
                    mb="4x"
                    align="center"
                    md={{ align: 'left' }}
                >
                    <Localize translate_text={item.header} />
                </Typography.Heading>
                <Typography.Paragraph size="xlarge" align="center" md={{ align: 'left' }}>
                    <Localize translate_text={item.description} />
                </Typography.Paragraph>
            </Flex.Item>
        </Flex.Box>
    )
}

export default DP2PItem
