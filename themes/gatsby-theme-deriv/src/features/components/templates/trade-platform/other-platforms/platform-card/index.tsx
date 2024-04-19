import React from 'react'
import { PlatformType } from '../types'
import { platform_card, platform_link, rtl_arrow_icon } from './styles.module.scss'
import { LocaleContext, Localize, localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Link from 'features/components/atoms/link'
import Typography from 'features/components/atoms/typography'
import Arrow from 'images/svg/trade-types/arrow-right.svg'
import dclsx from 'features/utils/dclsx'
import { useIsRtl } from 'components/hooks/use-isrtl'

type PlatformProps = {
    data: Omit<PlatformType, 'id'>
}

const PlatformCard = ({ data: { icon, heading, paragraph, link } }: PlatformProps) => {
    const { locale } = React.useContext(LocaleContext)
    const is_rtl = useIsRtl()
    return (
        <Flex.Box
            direction="col"
            radius="8x"
            padding="12x"
            gap="8x"
            align="start"
            className={platform_card}
        >
            <Image src={icon} alt={localize('_t_icon_t_')} width={48} height={48} />
            <Typography.Heading as="h3" size="xxs">
                {heading}
            </Typography.Heading>
            <Typography.Paragraph mb={locale === 'tr' ? '8x' : '0x'}>
                <Localize translate_text={paragraph} />
            </Typography.Paragraph>
            <Link
                url={link}
                className={dclsx(
                    platform_link,
                    'at-flex',
                    'at-align-items-center',
                    'at-justify-center',
                    'text-100',
                )}
                textcolor="brand"
                padding_block="4x"
                padding_inline="8x"
                weight="bold"
                font_family="UBUNTU"
            >
                <Localize translate_text="_t_Learn more_t_" />
                <Image
                    src={Arrow}
                    alt={localize('_t_Arrow_t_')}
                    className={dclsx('at-margin-left-4x', is_rtl && rtl_arrow_icon)}
                />
            </Link>
        </Flex.Box>
    )
}

export default PlatformCard
