import React from 'react'
import { DetailsContainer } from '../_markets-style'
import { Text } from 'components/elements'
import { localize, Localize } from 'components/localization'

export const AmericasDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'Each of these indices replicates the performance of top publicly traded companies in a segment of the US economy.',
            )}
        </Text>
        <Text>
            <Localize
                translate_text="<0>The US Index</0> follows the stock performance of the 500 largest publicly-traded companies in the US."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The US Tech Index</0> follows the stock performance of the 100 largest non-financial companies in the US."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The Wall Street Index</0> follows the stock performance of 30 large listed companies in the US."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const AsiaOceaniaDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'Each of these indices replicates the performance of top publicly traded companies in a financial market in the Asia/Oceania region.',
            )}
        </Text>
        <Text>
            <Localize
                translate_text="<0>The Australian Index</0> tracks the stock performance of the 200 largest listed companies in Australia. "
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The Hong Kong Index</0> tracks the stock performance of the 50 largest listed companies in Hong Kong."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The Japanese Index</0> tracks the stock performance of 225 large, publicly owned companies in Japan."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const EuropeDetails = (index) => {
    const children = [
        <Text key={0}>
            {localize(
                'Each of these indices replicates the performance of top publicly traded companies in a financial market in Europe.',
            )}
        </Text>,
        <Text key={1}>
            <Localize
                translate_text="<0>The Dutch Index</0> follows the stock performance of the 25 most traded companies in the Netherlands."
                components={[<strong key={0} />]}
            />
        </Text>,
        <Text key={2}>
            <Localize
                translate_text="<0>The Euro 50 Index</0> follows the performance of the 50 largest and most liquid stocks in the EU."
                components={[<strong key={0} />]}
            />
        </Text>,
        <Text key={3}>
            <Localize
                translate_text="<0>The French Index</0> tracks the performance of the 40 most traded stocks among the top 100 listed companies in France."
                components={[<strong key={0} />]}
            />
        </Text>,
        <Text key={4}>
            <Localize
                translate_text="<0>The German Index</0> follows the stock performance of the 30 major listed companies in Germany."
                components={[<strong key={0} />]}
            />
        </Text>,
        <Text key={5}>
            <Localize
                translate_text="<0>The Swiss Index</0> follows the performance of the 20 largest and most liquid stocks in Switzerland."
                components={[<strong key={0} />]}
            />
        </Text>,
        <Text key={6}>
            <Localize
                translate_text="<0>The UK Index</0> follows the stock performance of the top 100 listed companies in the UK."
                components={[<strong key={0} />]}
            />
        </Text>,
    ]

    return (
        <DetailsContainer>
            {children.map((child, idx) => {
                if (!~index || index === idx) {
                    return child
                }
            })}
        </DetailsContainer>
    )
}
