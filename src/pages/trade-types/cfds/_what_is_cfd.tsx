import React, { ReactElement, useState } from 'react'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { TSmartContent } from 'types/generics'
import useVisibleContent from 'components/hooks/use-visible-content'

type ContentType = {
    content: ReactElement
}

type ContentConfig = {
    is_eu: boolean
}

type SmartContent = TSmartContent<ContentType, ContentConfig>

const data: SmartContent[] = [
    {
        id: 0,
        data: {
            content: (
                <Text mb="2.4rem">
                    <Localize translate_text="_t_On Deriv, you can trade CFDs with tight spreads. The spread is the difference between the buy price and sell price. The tighter the spread, the lower the cost to enter the market._t_" />
                </Text>
            ),
        },
        visibility: {
            is_eu: true,
        },
    },
    {
        id: 2,
        data: {
            content: (
                <Text mb="1.8rem">
                    <Localize translate_text="_t_On Deriv, you can trade CFDs with:_t_" />
                </Text>
            ),
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 3,
        data: {
            content: (
                <Text mb="1.8rem">
                    <Localize
                        translate_text="_t_<0>High leverage</0> — Leverage allows you to open larger positions with a smaller balance in your trading account. The higher the leverage, the less money you need._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            ),
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 4,
        data: {
            content: (
                <Text mb="1.8rem">
                    <Localize
                        translate_text="_t_<0>Tight spreads</0> — The spread is the difference between the buy price and sell price. The tighter the spread, the lower the cost to enter the market._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            ),
        },
        visibility: {
            is_eu: false,
        },
    },
]

const WhatIsCFD = () => {
    const { is_eu } = useRegion()
    const visible_items = useVisibleContent({ content: data, config: { is_eu } })

    return (
        <SectionContainer background="white" padding="8rem 0 1.2rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h2" type="page-title" mb="1.2rem">
                    <Localize translate_text="_t_What is CFD trading?_t_" />
                </Header>
                <Text mb="2.4rem">
                    <Localize translate_text="_t_A contract for difference (CFD) allows you to trade on the price movement of an asset, without buying the underlying asset._t_" />
                </Text>
                {visible_items.map((item) => (
                    <div key={item.id}>{item.data.content}</div>
                ))}
            </SmallContainer>
        </SectionContainer>
    )
}

export default WhatIsCFD
