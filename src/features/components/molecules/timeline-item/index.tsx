import React from 'react'
import { timeline_item } from './style.module.scss'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import dclsx from 'features/utils/dclsx'
import { TString } from 'types/generics'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'

export type TimelineItemType = {
    icon_src: string
    heading: TString
    description: TString
}

interface TimelineItemProps extends FlexBoxProps<'div'> {
    data: TimelineItemType
}

const TimelineItem = ({ data, ...rest }: TimelineItemProps) => {
    return (
        <Flex.Box gap="12x" pb="20x" className={timeline_item} {...rest}>
            <Image
                src={data.icon_src}
                alt="check icon"
                width={24}
                height={24}
                className={dclsx('margin-top-3x')}
            />
            <div>
                <Typography.Heading as="h3" size="xs" mb="4x">
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
