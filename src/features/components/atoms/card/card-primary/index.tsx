import React from 'react'
import Typography from '../../typography'
import Flex from '../../flex-box'
import Link from '../../link'
import { FlexBoxProps } from '../../flex-box/box'
import { CardType } from '../type'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'
import useBreakpoints from 'components/hooks/use-breakpoints'

export interface CardPrimaryProps extends FlexBoxProps<'div'>, CardType {}

const CardPrimary = ({ header, description, icon, link, className, ...rest }: CardPrimaryProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <Flex.Box
            className={dclsx(className, 'card_primary_container')}
            direction="col"
            justify="between"
            gap="4x"
            bgcolor="white"
            radius="8x"
            {...rest}
        >
            <Flex.Item className={dclsx('item_block')}>
                {icon && (
                    <Flex.Box pb="11x" lg={{ pb: '8x' }}>
                        <img src={icon} width={44} height={44} />
                    </Flex.Box>
                )}
                <Typography.Paragraph
                    as="p"
                    size={is_mobile_or_tablet ? 'large' : 'medium'}
                    pb="4x"
                    weight="bold"
                    font_family="UBUNTU"
                >
                    <Localize translate_text={header} />
                </Typography.Paragraph>
                <Typography.Paragraph size={is_mobile_or_tablet ? 'medium' : 'small'}>
                    <Localize translate_text={description} />
                </Typography.Paragraph>
            </Flex.Item>

            {link && (
                <Flex.Box>
                    <Link url={link} size="small" textcolor="brand" font_family="UBUNTU">
                        <Localize translate_text="_t_Learn more >_t_" />
                    </Link>
                </Flex.Box>
            )}
        </Flex.Box>
    )
}

export default CardPrimary
