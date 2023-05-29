import React from 'react'
import Typography from '../../typography'
import Flex from '../../flex-box'
import Link from '../../link'
import Image from '../../image'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import dclsx from 'features/utils/dclsx'
import useBreakpoints from 'components/hooks/use-breakpoints'

type CardItemsProps = {
    header: TString
    description: TString
    icon?: string
    link?: `/${string}`
}

const CardPrimary = ({ header, description, icon, link }: CardItemsProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()

    return (
        <Flex.Box
            className={dclsx('item_container')}
            direction="col"
            gap="4x"
            radius="8x"
            lg={{ padding: '12x' }}
            padding="8x"
        >
            {icon && <Image src={icon} width={48} height={48} pb="4x" lg={{ pb: '8x' }} />}

            <Typography.Heading as="h3" size={is_mobile_or_tablet ? 'xs' : 'xxs'}>
                <Localize translate_text={header} />
            </Typography.Heading>
            <Typography.Paragraph size="small" md={{ mb: '10x' }}>
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

export default CardPrimary
