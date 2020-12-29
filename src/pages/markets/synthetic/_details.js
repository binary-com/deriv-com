import React from 'react'
import { CrashText, DetailsContainer } from '../_markets-style'
import { Text } from 'components/elements'
import { localize, Localize } from 'components/localization'

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

export const RangeBreakIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'These indices fluctuate between two price points (borders), occasionally breaking through the borders to create a new range on average once every 100 or 200 times that they hit the borders.',
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
