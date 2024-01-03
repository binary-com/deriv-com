import React from 'react'
import { StepItem } from './types'
import { step_item, desktop_icon, mobile_icon } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Image from 'features/components/atoms/image'
import useBreakpoints from 'components/hooks/use-breakpoints'
import dclsx from 'features/utils/dclsx'

interface IStepItemProps {
    item: StepItem
}

const DP2StepItem = ({ item }: IStepItemProps) => {
    const { is_mobile } = useBreakpoints()
    return (
        <Flex.Item
            basis="full"
            padding_inline="8x"
            pt="9x"
            pb="8x"
            radius="8x"
            md={{ basis: '4-12', padding: '0x', radius: '0x' }}
            className={step_item}
        >
            <Flex.Box
                className={dclsx(mobile_icon, 'at-visible-phone-and-tablet')}
                justify="center"
                align="center"
            >
                <Image src={item.mobile_icon_src} alt="Icon" />
            </Flex.Box>
            <Flex.Box
                className={dclsx(desktop_icon, 'at-visible-larger-than-tablet')}
                justify="center"
                align="center"
            >
                <Image src={item.icon_src} alt="Icon" />
            </Flex.Box>

            <Typography.Heading as="h3" size="xs" mt="8x">
                <Localize translate_text={item.header} />
            </Typography.Heading>
            <Typography.Paragraph size={is_mobile ? 'medium' : 'xlarge'} mt="4x" md={{ mt: '7x' }}>
                <Localize translate_text={item.description} />
            </Typography.Paragraph>
            {item?.note && (
                <Typography.Paragraph textcolor="light" size="large" mt="7x">
                    <Localize translate_text={item.note} />
                </Typography.Paragraph>
            )}
        </Flex.Item>
    )
}

export default DP2StepItem
