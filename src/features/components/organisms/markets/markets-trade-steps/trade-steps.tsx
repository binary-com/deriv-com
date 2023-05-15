import React from 'react'
import { item_container, item_description } from './styles.module.scss'
import { TradeStepsType } from './types'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

interface TradeStepsProps {
    item: TradeStepsType
}

const TradeSteps = ({ item }: TradeStepsProps) => {
    return (
        <Flex.Box
            className={item_container}
            direction="col"
            gap="4x"
            bgcolor="white"
            radius="8x"
            lg={{ padding: '12x' }}
            padding="8x"
        >
            <Typography.Heading as="h3" size="xs">
                <Localize translate_text={item.title} />
            </Typography.Heading>
            <Flex.Item className={item_description}>
                <Typography.Paragraph size="medium" md={{ mb: '10x' }}>
                    <Localize translate_text={item.description} />
                </Typography.Paragraph>
            </Flex.Item>
        </Flex.Box>
    )
}

export default TradeSteps
