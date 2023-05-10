import React from 'react'
import { OsApp } from '../types'
import { app_text } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'

interface OsAppButtonProps {
    item: OsApp
}

const OsAppButton = ({ item }: OsAppButtonProps) => {
    return (
        <Flex.Box align="center" basis="5-12">
            <Image src={item.icon_src} alt={item.text} width={32} height={32} />
            <Link pl="3x" url={{ type: 'non-company', href: item.link }} no_hover>
                {item?.smallText && (
                    <Typography.Paragraph textcolor="white" size="xxs">
                        <Localize translate_text={item.smallText} />
                    </Typography.Paragraph>
                )}
                <Typography.Paragraph textcolor="white" size="large" className={app_text}>
                    <Localize translate_text={item.text} />
                </Typography.Paragraph>
            </Link>
        </Flex.Box>
    )
}

export default OsAppButton
