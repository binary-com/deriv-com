import React from 'react'
import { ConnectivityTypeItemType } from './types'
import { item_box } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import { Localize, localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Image from 'features/components/atoms/image'
import dclsx from 'features/utils/dclsx'

interface ConnectivityReliabilityItemProps {
    item: ConnectivityTypeItemType
}

const ConnectivityReliabilityItem = ({ item }: ConnectivityReliabilityItemProps) => {
    return (
        <Flex.Box direction="col" align="center" gap="4x">
            <Image src={item.icon_src} width={48} height={48} alt={localize(item.alt)} />
            <Typography.Heading className={dclsx('at-text-medium')} as="h3" textcolor="inverted">
                <Localize translate_text={item.title} />
            </Typography.Heading>
            <Flex.Item className={item_box}>
                <Typography.Paragraph size="medium" textcolor="light-grey" align="center">
                    <Localize translate_text={item.description} />
                </Typography.Paragraph>
            </Flex.Item>
        </Flex.Box>
    )
}

export default ConnectivityReliabilityItem
