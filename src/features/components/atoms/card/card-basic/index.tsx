import React from 'react'
import Typography from '../../typography'
import Flex from '../../flex-box'
import { item_container } from './card-basic.module.scss'
import { Localize } from 'components/localization'

type CardItemsProps = {
    header: string
    description: string
}

const CardBasic = ({ header, description }: CardItemsProps) => {
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
                <Localize translate_text={header} />
            </Typography.Heading>
            <Typography.Paragraph size="medium" md={{ mb: '10x' }}>
                <Localize translate_text={description} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default CardBasic
