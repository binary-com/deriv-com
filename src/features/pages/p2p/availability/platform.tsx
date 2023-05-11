import React from 'react'
import { platform_list, platform_list_item } from './styles.module.scss'
import { PlatformType } from './types'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import LinkButton from 'features/components/atoms/link-button'
import Box from 'features/components/atoms/box'

interface PlatformProps {
    item: PlatformType
}

const DP2Platform = ({ item }: PlatformProps) => {
    return (
        <Flex.Box basis="full" direction="col" align="start" md={{ basis: '5-12' }}>
            <Image
                src={item.mobile_icon_src}
                alt="icon"
                width={48}
                height={48}
                className="visible-phone-and-tablet"
            />
            <Image
                src={item.mobile_icon_src}
                alt="icon"
                width={64}
                height={64}
                className="visible-larger-than-tablet"
            />

            <Typography.Heading as="h3" size="xs" mt="8x" mb="16x">
                <Localize translate_text={item.header} />
            </Typography.Heading>
            <Box as="ul" ml="13x" className={platform_list}>
                {item.list.map((listItem, i) => (
                    <Typography.Base
                        as="li"
                        mb="12x"
                        textcolor="black"
                        md={{ mb: '16x' }}
                        className={platform_list_item}
                        key={i}
                    >
                        <Localize translate_text={listItem.text} components={listItem.components} />
                    </Typography.Base>
                ))}
            </Box>
            {item?.button && (
                <LinkButton.Primary url={item.button.url} size="medium">
                    <Localize translate_text={item.button.text} />
                </LinkButton.Primary>
            )}
        </Flex.Box>
    )
}

export default DP2Platform
