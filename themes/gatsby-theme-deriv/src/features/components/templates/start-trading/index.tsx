import React from 'react'
import { wrapper } from './style.module.scss'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize, get_lang_direction } from 'components/localization'
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
        <Container.Fixed as="section" pt="20x" pb="10x" md={{ padding_block: '40x' }}>
            <Flex.Box direction="col" align="start" dir={get_lang_direction()} className={wrapper}>
                <Typography.Heading
                    as="h3"
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
                <LinkButton.Primary
                    font_family="UBUNTU"
                    url={data.button.url}
                    mt="12x"
                    md={{ mt: '32x' }}
                >
                    <Localize translate_text={data.button.text} />
                </LinkButton.Primary>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default StartTrading
