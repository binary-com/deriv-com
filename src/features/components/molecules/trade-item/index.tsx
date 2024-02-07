import React from 'react'
import { trade_item } from './style.module.scss'
import { Localize, localize } from 'components/localization'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'
import { TString } from 'types/generics'
import dclsx from 'features/utils/dclsx'

export type TradeItemType = {
    icon_src: string
    heading: TString
    description: TString
}

interface TradeItemProps extends FlexBoxProps<'div'> {
    data: TradeItemType
}

const TradeItem = ({ data, ...rest }: TradeItemProps) => {
    return (
        <Flex.Box
            direction="col"
            align="center"
            grow="1"
            padding_inline="1x"
            md={{ basis: '3-12' }}
            className={trade_item}
            {...rest}
        >
            <Image src={data.icon_src} width={48} height={48} alt={localize(data.heading)} />
            <Typography.Heading
                as="h4"
                align="center"
                size="xxs"
                textcolor="inverted"
                mt="8x"
                mb="4x"
                className={dclsx('at-text-medium')}
            >
                <Localize translate_text={data.heading} />
            </Typography.Heading>
            <Typography.Paragraph
                size="medium"
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
