import React from 'react'
import { item_container, item_learn_more, item_description } from './styles.module.scss'
import { TradeTypeItemType } from './types'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Icon from 'features/components/atoms/icon'

interface TradeTypeItemProps {
    item: TradeTypeItemType
}

const TradeTypeItem = ({ item }: TradeTypeItemProps) => {
    return (
        <Flex.Box
            className={item_container}
            direction="col"
            align="center"
            gap="5x"
            md={{
                padding_block: '20x',
            }}
        >
            <Icon src={item.icon_src} size="xlarge" />
            <Typography.Heading as="h3" size="small" textcolor="inverted" mt={'5x'}>
                <Localize translate_text={item.title} />
            </Typography.Heading>
            <Flex.Item className={item_description} padding_inline={'5x'}>
                <Typography.Paragraph
                    size="large"
                    textcolor="inverted"
                    md={{ mb: '10x' }}
                    align="center"
                >
                    <Localize translate_text={item.description} />
                </Typography.Paragraph>
            </Flex.Item>
            <Link textcolor="inverted" size="large" url={item.url} className={item_learn_more}>
                <Localize translate_text="_t_Learn more >_t_" />
            </Link>
        </Flex.Box>
    )
}

export default TradeTypeItem
