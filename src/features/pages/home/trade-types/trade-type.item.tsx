import React from 'react'
import { item_container, item_learn_more } from './styles.module.scss'
import { TradeTypeItemType } from './types'
import FlexBox from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'

interface TradeTypeItemProps {
    item: TradeTypeItemType
}

const TradeTypeItem = ({ item }: TradeTypeItemProps) => {
    return (
        <FlexBox className={item_container} direction="col" align="center" gap="10x" mt={'40x'}>
            <Typography.Heading as="h3" size="small" textcolor="inverted">
                <Localize translate_text={item.title} />
            </Typography.Heading>
            <Typography.Paragraph size="large" textcolor="inverted" mb="1x" align="center">
                <Localize translate_text={item.description} />
            </Typography.Paragraph>
            <Link textcolor="inverted" size="large" url={item.url} className={item_learn_more}>
                <Localize translate_text="_t_Learn more >_t_" />
            </Link>
        </FlexBox>
    )
}

export default TradeTypeItem
