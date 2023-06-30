import React from 'react'
import { trade_item } from './style.module.scss'
import { TradeItemType } from './type'
import { Localize } from 'components/localization'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'

type TradeItemProps = FlexBoxProps<'div'> & {
    data: TradeItemType
}

const TradeItem = ({ data, ...rest }: TradeItemProps) => {
    return (
        <Flex.Box direction="col" align="center" basis="3-12" grow="1" className={trade_item}>
            <Image src={data.icon_src} width={48} height={48} />
            <Typography.Heading as="h3" size="xxs" textcolor="inverted" mt="8x" mb="4x">
                <Localize translate_text={data.heading} />
            </Typography.Heading>
            <Typography.Paragraph
                size="large"
                textcolor="inverted"
                md={{ mb: '10x' }}
                align="center"
            >
                <Localize translate_text={data.description} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default TradeItem
