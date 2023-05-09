import React from 'react'
import { platform_list, platform_list_item } from './styles.module.scss'
import { PlatformType } from './types'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import LinkButton from 'features/components/atoms/link-button'

interface PlatformProps {
    item: PlatformType
}

const DP2Platform = ({ item }: PlatformProps) => {
    return (
        <Flex.Box basis="5-12" direction="col" align="start">
            <Image src={item.icon_src} alt="Desktop image" width={64} height={64} />
            <Typography.Heading as="h3" size="xs" mt="8x" mb="16x">
                <Localize translate_text={item.header} />
            </Typography.Heading>
            <ul className={platform_list}>
                {item.list.map((listItem, i) => (
                    <li className={platform_list_item} key={i}>
                        <Localize translate_text={listItem.text} components={listItem.components} />
                    </li>
                ))}
            </ul>
            {item?.button && (
                <LinkButton.Primary url={item.button.url} size="medium">
                    <Localize translate_text={item.button.text} />
                </LinkButton.Primary>
            )}
        </Flex.Box>
    )
}

export default DP2Platform
