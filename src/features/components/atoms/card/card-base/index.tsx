import React from 'react'
import Typography from '../../typography'
import Flex from '../../flex-box'
import Icon from '../../icon'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import dclsx from 'features/utils/dclsx'

type CardItemsProps = {
    header: TString
    description: TString
    icon?: string
}

const CardBase = ({ header, description, icon }: CardItemsProps) => {
    return (
        <Flex.Box
            className={dclsx('item_container')}
            direction="col"
            gap="4x"
            radius="8x"
            lg={{ padding: '12x' }}
            padding="8x"
            bgcolor="white"
        >
            {icon && <Icon src={icon} size="large" />}
            <Typography.Heading as="h3" size="xs">
                <Localize translate_text={header} />
            </Typography.Heading>
            <Typography.Paragraph md={{ mb: '10x' }}>
                <Localize translate_text={description} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default CardBase
