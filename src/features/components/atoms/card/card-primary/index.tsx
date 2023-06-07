import React from 'react'
import Typography from '../../typography'
import Flex from '../../flex-box'
import Link from '../../link'
import { CardType } from '../type'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'
import useBreakpoints from 'components/hooks/use-breakpoints'

const CardPrimary = ({ header, description, icon, link }: CardType) => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <Flex.Box
            className={dclsx('card_primary_container')}
            direction="col"
            gap="4x"
            bgcolor="white"
            radius="8x"
        >
            <Flex.Item className={dclsx('item_block')}>
                {icon && (
                    <Flex.Box pb="11x" lg={{ pb: '8x' }}>
                        <img src={icon} width={44} height={44} />
                    </Flex.Box>
                )}

                <Typography.Heading as="h3" size={is_mobile_or_tablet ? 'xs' : 'xxs'} pb="4x">
                    <Localize translate_text={header} />
                </Typography.Heading>
                <Typography.Paragraph
                    size={is_mobile_or_tablet ? 'medium' : 'small'}
                    md={{ mb: '10x' }}
                >
                    <Localize translate_text={description} />
                </Typography.Paragraph>
            </Flex.Item>

            {link && (
                <Flex.Box>
                    <Link
                        url={{ type: 'internal', to: link }}
                        size="small"
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

export default CardPrimary
