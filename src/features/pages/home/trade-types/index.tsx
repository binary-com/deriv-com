import React from 'react'
import { tradeTypesItems } from './data'
import TradeTypeItem from './trade-type.item'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'
import Flex from 'features/components/atoms/flex-box'

const TradeTypes = () => {
    const { is_eu } = useRegion()
    const visible_items = useVisibleContent({ content: tradeTypesItems, config: { is_eu } })
    return (
        <Container.Fixed
            as="section"
            bgcolor="inverted"
            padding_block="16x"
            md={{ padding_block: '40x' }}
        >
            <Typography.Heading as="h1" size="large" align="center" mb="10x" textcolor="inverted">
                <Localize translate_text="_t_Trade types_t_" />
            </Typography.Heading>
            <Typography.Paragraph
                size="large"
                align="center"
                textcolor="inverted"
                padding_inline="20x"
                mb="30x"
            >
                <Localize
                    translate_text="_t_Trade the way you want with {{trade_type_number}} exciting trade types._t_"
                    values={{ trade_type_number: is_eu ? '2' : '3' }}
                />
            </Typography.Paragraph>
            <Flex.Box
                container="fluid"
                direction="col"
                justify="center"
                align="center"
                gap="10x"
                md={{ direction: 'row', gap: '20x', justify: 'around' }}
            >
                {visible_items.map((item) => (
                    <TradeTypeItem key={item.id} item={item.data} />
                ))}
            </Flex.Box>
        </Container.Fixed>
    )
}

export default TradeTypes
