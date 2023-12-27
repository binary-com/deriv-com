import React from 'react'
import { timeline_item, last_item, not_last_item } from './style.module.scss'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import dclsx from 'features/utils/dclsx'
import { TString } from 'types/generics'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'
import checkIcon from 'images/svg/check-circle.svg'

export type TimelineItemType = {
    heading: TString
    description: TString
}

interface TimelineItemProps extends FlexBoxProps<'div'> {
    data: TimelineItemType
    isLastItem?: boolean
}

const TimelineItem = ({ data, isLastItem, ...rest }: TimelineItemProps) => {
    return (
        <Flex.Box
            gap="8x"
            md={{ gap: '12x' }}
            className={dclsx(timeline_item, isLastItem ? last_item : not_last_item)}
            {...rest}
        >
            <Image
                src={checkIcon}
                alt="check icon"
                className={dclsx('lg-at-margin-top-3x w-[24px] h-[24px]')}
            />
            <div>
                <Typography.Heading as="h4" size="xs" mb="4x">
                    <Localize translate_text={data.heading} />
                </Typography.Heading>
                <Typography.Paragraph>
                    <Localize translate_text={data.description} />
                </Typography.Paragraph>
            </div>
        </Flex.Box>
    )
}

export default TimelineItem
