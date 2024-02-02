import React from 'react'
import { PlatformType } from '../types'
import { platform_card, platform_link } from './styles.module.scss'
import { Localize, localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Link from 'features/components/atoms/link'
import Typography from 'features/components/atoms/typography'
import Arrow from 'images/svg/trade-types/arrow-right.svg'
import dclsx from 'features/utils/dclsx'

type PlatformProps = {
    data: Omit<PlatformType, 'id'>
}

const PlatformCard = ({ data: { icon, heading, paragraph, link } }: PlatformProps) => {
    return (
        <Flex.Box
            direction="col"
            radius="8x"
            padding="12x"
            gap="8x"
            align="start"
            mb="8x"
            className={platform_card}
        >
            <Image src={icon} alt={localize('_t_icon_t_')} width={48} height={48} />
            <Typography.Heading as="h3" size="xxs">
                {heading}
            </Typography.Heading>
            <Typography.Paragraph>
                <Localize translate_text={paragraph} />
            </Typography.Paragraph>
            <Link
                url={link}
                className={dclsx(platform_link, 'flex', 'align-items-center', 'justify-center')}
                textcolor="brand"
                padding_block="4x"
                padding_inline="8x"
                size="small"
                weight="bold"
            >
                <Localize translate_text="_t_Learn more_t_" />
                <Image
                    src={Arrow}
                    alt={localize('_t_Arrow_t_')}
                    className={dclsx('margin-left-1x')}
                    width={10}
                    height={10}
                />
            </Link>
        </Flex.Box>
    )
}

export default PlatformCard
