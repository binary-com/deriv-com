import React from 'react'
import { wrapper } from './styles.module.scss'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import TradeItem, { TradeItemType } from 'features/components/molecules/trade-item'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'
import dclsx from 'features/utils/dclsx'

export type WhyTradeOptionsType = {
    heading: TString
    heading2: TString
    button: {
        text: TString
        url: LinkUrlType
    }
    items: TradeItemType[]
}

const WhyTradeOptions = ({ data }: { data: WhyTradeOptionsType }) => {
    return (
        <Container.Fixed
            as="section"
            bgcolor="black"
            padding_block="20x"
            md={{ padding_block: '40x' }}
        >
            <Flex.Box direction="col" className={wrapper}>
                <Typography.Heading
                    as="h3"
                    textcolor="inverted"
                    align="center"
                    size="small"
                    mb="12x"
                    md={{ mb: '20x' }}
                >
                    <Localize translate_text={data.heading} />
                </Typography.Heading>
                <Flex.Box gap="12x" wrap="wrap" justify="center" md={{ gap: '20x' }}>
                    {data.items.map((item) => (
                        <TradeItem key={item.heading} data={item} />
                    ))}
                </Flex.Box>
                <Flex.Box direction="col" align="center" mt="12x" md={{ mt: '20x' }}>
                    <Typography.Heading
                        as="h5"
                        textcolor="inverted"
                        size="xxs"
                        mb="8x"
                        className={dclsx('at-text-medium')}
                    >
                        <Localize translate_text={data.heading2} />
                    </Typography.Heading>
                    <LinkButton.Primary font_family="UBUNTU" url={data.button.url}>
                        <Localize translate_text={data.button.text} />
                    </LinkButton.Primary>
                </Flex.Box>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default WhyTradeOptions
