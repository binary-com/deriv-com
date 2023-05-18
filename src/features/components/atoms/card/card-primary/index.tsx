import React from 'react'
import Typography from '../../typography'
import Flex from '../../flex-box'
import Link from '../../link'
import { item_container } from './card-primary.module.scss'
import { Localize } from 'components/localization'

type CardItemsProps = {
    header: string
    description: string
    icon?: string
    link?: `/${string}`
}

const CardBasic = ({ header, description, icon, link }: CardItemsProps) => {
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
            {icon && (
                <Flex.Box pb="4x" lg={{ pb: '8x' }}>
                    <img src={icon} width={48} height={48} />
                </Flex.Box>
            )}

            <Typography.Heading as="h3" size="xs">
                <Localize translate_text={header} />
            </Typography.Heading>
            <Typography.Paragraph size="medium" md={{ mb: '10x' }}>
                <Localize translate_text={description} />
            </Typography.Paragraph>
            {link && (
                <Flex.Box pt="12x">
                    <Link
                        url={{ type: 'internal', to: link }}
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
