import React from 'react'
import { timeline_item } from './style.module.scss'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import checkCircle from 'images/svg/check-circle.svg'
import Image from 'features/components/atoms/image'
import dclsx from 'features/utils/dclsx'

const TimelineItem = () => {
    return (
        <Flex.Box gap="12x" pb="20x" className={timeline_item}>
            <Image
                src={checkCircle}
                alt="check icon"
                width={24}
                height={24}
                className={dclsx('margin-top-3x')}
            />
            <div>
                <Typography.Heading as="h3" size="xs" mb="4x">
                    <Localize translate_text="_t_Practise_t_" />
                </Typography.Heading>
                <Typography.Paragraph>
                    <Localize translate_text="_t_Open a demo account and get unlimited virtual funds to practise on our platforms — Deriv Trader, SmartTrader, and Deriv Bot._t_" />
                </Typography.Paragraph>
            </div>
        </Flex.Box>
    )
}

export default TimelineItem
