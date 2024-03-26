import React from 'react'
import Typography from '../../typography'
import Flex from '../../flex-box'
import { FlexBoxProps } from '../../flex-box/box'
import { BasicCardType } from '../type'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'

export interface CardItemsProps extends FlexBoxProps<'div'>, BasicCardType {}

const CardBasic = ({ header, description, className, ...rest }: CardItemsProps) => {
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
