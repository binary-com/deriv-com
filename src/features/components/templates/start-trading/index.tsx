import React from 'react'
import { wrapper } from './style.module.scss'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import TimelineItem, { TimelineItemType } from 'features/components/molecules/timeline-item'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'

export type StartTradingType = {
    heading: TString
    button: {
        text: TString
        url: LinkUrlType
    }
    items: TimelineItemType[]
}

const StartTrading = ({ data }: { data: StartTradingType }) => {
    return (
        <Container.Fixed as="section" padding_block="20x" md={{ padding_block: '40x' }}>
            <Flex.Box direction="col" container="fluid" align="start" className={wrapper}>
                <Typography.Heading
                    as="h2"
                    textcolor="black"
                    size="small"
                    mb="12x"
                    md={{ mb: '20x' }}
                >
                    <Localize translate_text={data.heading} />
                </Typography.Heading>
                {data.items.map((item, i) => {
                    const isLastItem = i === data.items.length - 1
                    return (
                        <TimelineItem
                            key={item.heading}
                            data={item}
                            pb={isLastItem ? '0x' : '20x'}
                            isLastItem={isLastItem}
                        />
                    )
                })}
                <LinkButton.Primary url={data.button.url} mt="12x" md={{ mt: '32x' }}>
                    <Localize translate_text={data.button.text} />
                </LinkButton.Primary>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default StartTrading
