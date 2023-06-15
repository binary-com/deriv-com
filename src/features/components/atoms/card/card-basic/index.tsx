import React from 'react'
import Typography from '../../typography'
import Flex from '../../flex-box'
import { FlexBoxProps } from '../../flex-box/box'
import { CardType } from '../types'
import Icon from '../../icon'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'

export interface CardItemsProps extends FlexBoxProps<'div'>, CardType {}

const CardBasic = ({ header, description, icon, className, ...rest }: CardItemsProps) => {
    return (
        <Flex.Box
            className={dclsx(className, 'item_container')}
            direction="col"
            gap="4x"
            radius="8x"
            lg={{ padding: '12x' }}
            padding="8x"
            bgcolor="white"
            {...rest}
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

export default CardBasic
