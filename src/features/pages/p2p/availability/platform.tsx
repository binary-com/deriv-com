import React from 'react'
import { platform_list } from './styles.module.scss'
import { PlatformType } from './types'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import LinkButton from 'features/components/atoms/link-button'
import Box from 'features/components/atoms/box'
import dclsx from 'features/utils/dclsx'
import { mobileOSDetect } from 'common/os-detect'
import { p2p_playstore_url, p2p_applestore_url } from 'common/constants'
import Button from 'features/components/atoms/button'

const DP2Platform = ({ item }: { item: PlatformType }) => {
    const handleExternalLink = () => {
        let link = ''
        if (mobileOSDetect() === 'Android') {
            link = p2p_playstore_url
        }
        if (mobileOSDetect() === 'iOS') {
            link = p2p_applestore_url
        }

        window.open(link, '_blank')
    }
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
                {item.list.map((list_item) => (
                    <Typography.Base
                        as="li"
                        mb="12x"
                        textcolor="black"
                        md={{ mb: '16x' }}
                        className={dclsx('text-xlarge')}
                        key={list_item.text}
                    >
                        <Localize
                            translate_text={list_item.text}
                            components={list_item.components}
                        />
                    </Typography.Base>
                ))}
            </Box>
            {item?.button && (
                <>
                    <LinkButton.Primary
                        url={item.button.url}
                        size="medium"
                        className="visible-larger-than-tablet"
                    >
                        <Localize translate_text={item.button.text} />
                    </LinkButton.Primary>
                    <Button.Primary
                        onClick={handleExternalLink}
                        className="visible-phone-and-tablet"
                    >
                        <Localize translate_text={item.button.text} />
                    </Button.Primary>
                </>
            )}
        </Flex.Box>
    )
}

export default DP2Platform
