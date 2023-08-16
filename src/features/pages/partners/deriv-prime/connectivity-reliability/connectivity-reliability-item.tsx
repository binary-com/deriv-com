import React from 'react'
import { ConnectivityTypeItemType } from './types'
import { item_box } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Image from 'features/components/atoms/image'

interface ConnectivityReliabilityItemProps {
    item: ConnectivityTypeItemType
}

const ConnectivityReliabilityItem = ({ item }: ConnectivityReliabilityItemProps) => {
    return (
        <Flex.Box direction="col" align="center" gap="4x">
            <Image src={item.icon_src} width={48} height={48} alt={item.alt} />
            <Typography.Paragraph
                size="medium"
                textcolor="inverted"
                weight="bold"
                font_family="UBUNTU"
            >
                <Localize translate_text={item.title} />
            </Typography.Paragraph>
            <Flex.Item className={item_box}>
                <Typography.Paragraph size="medium" textcolor="light-grey" align="center">
                    <Localize translate_text={item.description} />
                </Typography.Paragraph>
            </Flex.Item>
        </Flex.Box>
    )
}

export default ConnectivityReliabilityItem
