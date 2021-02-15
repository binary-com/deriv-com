import React from 'react'
import { CrashText, DetailsContainer } from '../style/_markets-style'
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

export const ContinuousIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'These indices correspond to simulated markets with constant volatilities of 10%, 25%, 50%, 75%, and 100%.',
            )}
        </Text>
        <Text>
            <Localize
                translate_text="<0>One tick</0> is generated <0>every two seconds</0> for volatility indices <0>10, 25, 50, 75, and 100</0>."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>One tick</0> is generated <0>every second</0> for volatility indices <0>10 (1s), 25 (1s), 50 (1s), 75 (1s), and 100 (1s)</0>."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const CrashBoomDetails = () => (
    <DetailsContainer>
        <CrashText>
            <Localize
                translate_text="With these indices, there is an average of one drop (crash) or one spike (boom) in prices that occur in a <0>series of 1000 or 500 ticks</0>."
                components={[<strong key={0} />]}
            />
        </CrashText>
    </DetailsContainer>
)

export const DailyResetIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="These indices replicate markets with <0>bullish and bearish trends</0> with constant volatility. The Bull Market and Bear Market indices start at 00:00 GMT each day, replicating bullish and bearish markets respectively."
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

export const RangeBreakIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'These indices fluctuate between two price points (borders), occasionally breaking through the borders to create a new range on average once every 100 or 200 times that they hit the borders.',
            )}
        </Text>
    </DetailsContainer>
)
export const SmartFXDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="<0>AUD Index</0> measures the value of the Australian dollar against a basket of five global currencies (USD, EUR, GBP, JPY, CAD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>EUR Index</0> measures the value of the Euro against a basket of five global currencies (USD, AUD, GBP, JPY, CAD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>GBP Index</0> measures the value of the British Pound against a basket of five global currencies (USD, EUR, AUD, JPY, CAD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>USD Index</0> measures the value of the US dollar against a basket of five global currencies (EUR, GBP, JPY, CAD, AUD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const SmartGoldIndexDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'Measures the value of gold against a basket of five global currencies (EUR, GBP, JPY, AUD, USD), each weighted by 20%.',
            )}
        </Text>
    </DetailsContainer>
)

export const StepFXDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'The market price moves up or down at a fixed step size (0.001) based on the price movement of the underlying instrument.',
            )}
        </Text>
    </DetailsContainer>
)

export const StepIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="With these indices, there is an equal probability of up/down movement in a price series with a <0>fixed step size of 0.1</0>."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const VolatilityIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'These indices correspond to simulated markets with constant volatilities of 10%, 25%, 50%, 75%, and 100%.',
            )}
        </Text>
        <Text>
            <Localize
                translate_text="<0>One tick</0> is generated <0>every two seconds</0> for volatility indices <0>10, 25, 50, 75, and 100</0>."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>One tick</0> is generated <0>every second</0> for volatility indices <0>10 (1s), 25 (1s), 50 (1s), 75 (1s), and 100 (1s)</0>."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)
