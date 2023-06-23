import React from 'react'
import Typography from '../../typography'
import Flex from '../../flex-box'
import Link from '../../link'
import { FlexBoxProps } from '../../flex-box/box'
import { CardType } from '../type'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'

export interface CardPrimaryProps extends FlexBoxProps<'div'>, CardType {}

const CardPrimary = ({ header, description, icon, link, className, ...rest }: CardPrimaryProps) => {
    return (
        <Flex.Box
            className={dclsx(className, 'card_primary_container')}
            direction="col"
            justify="between"
            gap="4x"
            bgcolor="white"
            radius="8x"
            padding="8x"
            md={{ padding: '12x' }}
            {...rest}
        >
            {icon && (
                <img
                    src={icon}
                    width={44}
                    height={44}
                    className={dclsx('margin-bottom-11x lg-margin-bottom-8x')}
                />
            )}
            <Typography.Heading as="h3" size="xxs" pb="4x">
                <Localize translate_text={header} />
            </Typography.Heading>
            <Typography.Paragraph size="small">
                <Localize translate_text={description} />
            </Typography.Paragraph>

            {link && (
                <Link url={link} size="small" textcolor="brand" font_family="UBUNTU" mt="8x">
                    <Localize translate_text="_t_Learn more >_t_" />
                </Link>
            )}
        </Flex.Box>
    )
}

export default CardPrimary
