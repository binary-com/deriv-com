import React from 'react'
import Typography from '../../typography'
import Flex from '../../flex-box'
import Link from '../../link'
import { item_container, item_block } from './styles.module.scss'
import { CardType } from './type'
import { Localize } from 'components/localization'

interface CardItemsProps {
    item: CardType
}

const CardBasic = ({ item }: CardItemsProps) => {
    return (
        <Flex.Box className={item_container} direction="col" gap="4x" bgcolor="white" radius="8x">
            <Flex.Item className={item_block}>
                {item.icon && (
                    <Flex.Box pb="4x" lg={{ pb: '8x' }}>
                        <img src={item.icon} width={44} height={44} />
                    </Flex.Box>
                )}

                <Typography.Heading as="h3" size="xs" pb="4x">
                    <Localize translate_text={item.header} />
                </Typography.Heading>
                <Typography.Paragraph size="small" md={{ mb: '10x' }}>
                    <Localize translate_text={item.description} />
                </Typography.Paragraph>
            </Flex.Item>

            {item.link && (
                <Flex.Box>
                    <Link
                        url={{ type: 'internal', to: item.link }}
                        size="medium"
                        textcolor="brand"
                        font_family="UBUNTU"
                    >
                        <Localize translate_text="_t_Learn more >_t_" />
                    </Link>
                </Flex.Box>
            )}
        </Flex.Box>
    )
}

export default CardBasic
