import React from 'react'
import { StepItem } from './types'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Image from 'features/components/atoms/image'

interface IStepItemProps {
    item: StepItem
}

const DP2StepItem = ({ item }: IStepItemProps) => {
    return (
        <Flex.Item basis="4-12">
            <Image src={item.icon_src} width={96} height={96} />
            <Typography.Heading as="h3" size="xs" mt="9x">
                <Localize translate_text={item.header} />
            </Typography.Heading>
            <Typography.Paragraph size="xlarge" mt="8x">
                <Localize translate_text={item.description} />
            </Typography.Paragraph>
            {item?.note && (
                <Typography.Paragraph textcolor="light" size="large" mt="8x">
                    <Localize translate_text={item.note} />
                </Typography.Paragraph>
            )}
        </Flex.Item>
    )
}

export default DP2StepItem
