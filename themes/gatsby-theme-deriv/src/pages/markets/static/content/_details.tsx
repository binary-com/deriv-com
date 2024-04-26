import React, { useEffect, useState } from 'react'
import { CrashText, DetailsContainer } from '../style/_markets-style'
import { Text, Ul, Li } from 'components/elements'
import { Localize } from 'components/localization'
import useBuildVariant from 'features/hooks/use-build-variant'

type TEuropeDetailsProps = {
    custom_index: number
}

export const AmericasDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize translate_text="_t_Each of these indices replicates the performance of top publicly traded companies in a segment of the US economy._t_" />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>US 500</0> follows the stock performance of the 500 largest publicly traded companies in the US._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>US Tech 100</0> follows the stock performance of the 100 largest non-financial companies in the US._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>Wall Street 30</0> follows the stock performance of the top 30 listed companies in the US._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const AsiaOceaniaDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize translate_text="_t_Each of these indices replicates the performance of top publicly traded companies in a financial market in the Asia/ Oceania region._t_" />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>Australia 200</0> tracks the stock performance of the 200 largest listed companies in Australia. _t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>Hong Kong 50</0> tracks the stock performance of the 50 largest listed companies in Hong Kong._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>Japan 225</0> tracks the stock performance of 225 large, publicly owned companies in Japan._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const ContinuousIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize translate_text="_t_These indices correspond to simulated markets with constant volatilities of 10%, 25%, 50%, 75%, and 100%._t_" />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>One tick</0> is generated <0>every two seconds</0> for volatility indices <0>10, 25, 50, 75, and 100</0>._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>One tick</0> is generated <0>every second</0> for volatility indices <0>10 (1s), 25 (1s), 50 (1s), 75 (1s), and 100 (1s)</0>._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const DexIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="_t_These indices correspond to simulated markets where asset prices spike or drop due to news events. Small movements are quite frequent, with occasional major spikes or drops._t_"
                components={[<strong key={0} />]}
            />
        </Text>

        <Text>
            <Localize
                translate_text="_t_The <0>DEX 600UP</0> has frequent small drops and occasional major spikes, which occur <0>every 600 seconds</0> on average._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text mb="20px">
            <Localize
                translate_text="_t_The <0>DEX 600DN</0> has frequent small spikes and occasional major drops, which occur <0>every 600 seconds</0> on average._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_The <0>DEX 900UP</0> has frequent small drops and occasional major spikes, which occur <0>every 900 seconds</0> on average._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text mb="20px">
            <Localize
                translate_text="_t_The <0>DEX 900DN</0> has frequent small spikes and occasional major drops, which occur <0>every 900 seconds</0> on average._t_"
                components={[<strong key={0} />]}
            />
        </Text>

        <Text>
            <Localize
                translate_text="_t_The <0>DEX 1500UP</0> has frequent small drops and occasional major spikes, which occur <0>every 1,500 seconds</0> on average._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_The <0>DEX 1500DN</0> has frequent small spikes and occasional major drops, which occur <0>every 1,500 seconds</0> on average._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const ContinuousIndicesOptionsDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize translate_text="_t_These indices correspond to simulated markets with constant volatilities of 10%, 25%, 50%, 75%, and 100%._t_" />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>One tick</0> is generated <0>every two seconds</0> for volatility indices <0>10, 25, 50, 75, and 100</0>._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>One tick</0> is generated <0>every second</0> for volatility indices <0>10 (1s), 25 (1s), 50 (1s), 75 (1s), and 100 (1s)</0>._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const CrashBoomDetails = () => (
    <DetailsContainer>
        <CrashText>
            <Localize
                translate_text="_t_With these indices, there is an average of one drop (crash) or one spike (boom) in prices that occur in a series of <0>300, 500, 600, 900 or 1,000 ticks</0>._t_"
                components={[<strong key={0} />]}
            />
        </CrashText>
    </DetailsContainer>
)

export const CrashBoomMultipliersDetails = () => (
    <DetailsContainer>
        <CrashText>
            <Localize
                translate_text="_t_With these indices, there is an average of one drop (crash) or one spike (boom) in prices that occur in a <0>series of 500, or 1,000 ticks</0>._t_"
                components={[<strong key={0} />]}
            />
        </CrashText>
    </DetailsContainer>
)

export const CrashBoomDetailsEU = () => (
    <DetailsContainer>
        <CrashText>
            <Localize
                translate_text="_t_With these indices, there is an average of one drop (crash) or one spike (boom) in prices that occur in <0>a series of 300 ticks.</0>_t_"
                components={[<strong key={0} />]}
            />
        </CrashText>
    </DetailsContainer>
)

export const JumpIndicesDetailsEU = () => (
    <DetailsContainer>
        <CrashText>
            <Localize
                translate_text="_t_These indices correspond to simulated markets with <0>constant volatilities of 50%, 75%, and 100%.</0> There is an equal probability of an up or down jump <0>every 20 minutes,</0> on average. The jump size is <0> around 30 times </0>the normal price movement, on average._t_"
                components={[<strong key={0} />]}
            />
        </CrashText>
    </DetailsContainer>
)

export const DailyResetIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="_t_These indices replicate markets with <0>bullish and bearish trends</0> with constant volatility. The Bull Market and Bear Market indices start at 00:00 GMT each day, replicating bullish and bearish markets respectively._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const EuropeDetails = (props: TEuropeDetailsProps) => {
    const { custom_index: index } = props
    const children = [
        <Text key={0}>
            <Localize translate_text="_t_Each of these indices replicates the performance of top publicly traded companies in financial markets in Europe._t_" />
        </Text>,
        <Text key={1}>
            <Localize
                translate_text="_t_<0>Netherlands 25</0> follows the stock performance of the 25 most traded companies in the Netherlands._t_"
                components={[<strong key={0} />]}
            />
        </Text>,
        <Text key={2}>
            <Localize
                translate_text="_t_<0>Europe 50</0> Index follows the performance of the 50 largest and most liquid stocks in the EU._t_"
                components={[<strong key={0} />]}
            />
        </Text>,
        <Text key={3}>
            <Localize
                translate_text="_t_<0>France 40</0> tracks the performance of the 40 most traded stocks among the top 100 listed companies in France._t_"
                components={[<strong key={0} />]}
            />
        </Text>,
        <Text key={4}>
            <Localize
                translate_text="_t_<0>Germany 40</0> follows the stock performance of the 40 major listed companies in Germany._t_"
                components={[<strong key={0} />]}
            />
        </Text>,
        <Text key={5}>
            <Localize
                translate_text="_t_<0>Swiss 20</0> follows the performance of the 20 largest and most liquid stocks in Switzerland._t_"
                components={[<strong key={0} />]}
            />
        </Text>,
        <Text key={6}>
            <Localize
                translate_text="_t_<0>UK 100</0> follows the stock performance of the top 100 listed companies in the UK._t_"
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
            <Localize translate_text="_t_These indices fluctuate between two price points (borders), occasionally breaking through the borders to create a new range on average once every 100 or 200 times that they hit the borders._t_" />
        </Text>
    </DetailsContainer>
)

export const BasketFXDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="_t_<0>AUD Basket</0> measures the value of the Australian dollar against a basket of five global currencies (USD, EUR, GBP, JPY, CAD), each weighted by 20%._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>EUR Basket</0> measures the value of the Euro against a basket of five global currencies (USD, AUD, GBP, JPY, CAD), each weighted by 20%._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>GBP Basket</0> measures the value of the British pound against a basket of five global currencies (USD, EUR, AUD, JPY, CAD), each weighted by 20%._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>USD Basket</0> measures the value of the US dollar against a basket of five global currencies (EUR, GBP, JPY, CAD, AUD), each weighted by 20%._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const BasketCommoditiesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="_t_<0>Gold Basket</0> measures the value of gold against a basket of five global currencies (EUR, GBP, JPY, AUD, USD), each weighted by 20%._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const SmartGoldIndexDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize translate_text="_t_Measures the value of gold against a basket of five global currencies (EUR, GBP, JPY, AUD, USD), each weighted by 20%._t_" />
        </Text>
    </DetailsContainer>
)
export const StepIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="_t_With these indices, there is an equal probability of up/down movement in a price series with a <0>fixed step size of 0.1</0>._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)
export const StepIndicesDetails_CFD = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="_t_With these indices, there is an equal probability of up/down movement in a price series with a <0>fixed step size of 0.1, 0.2, 0.3, 0.4, and 0.5.</0>_t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const VolatilityIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize translate_text="_t_These indices correspond to simulated markets with constant volatilities of 10%, 15%, 25%, 30%, 50%, 75%, 90%, 100%, 150%, and 250%._t_" />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>One tick</0> is generated <0>every two seconds</0> for volatility indices <0>10, 25, 50, 75, and 100</0>._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>One tick</0> is generated <0>every second</0> for volatility indices <0>10 (1s), 15 (1s), 25 (1s), 30 (1s),50 (1s), 75 (1s), 90 (1s),100 (1s), 150 (1s), and 250 (1s)</0>._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const VolatilityIndicesDetailsEU = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="_t_These indices correspond to simulated markets with <0>constant volatilities of 150%, and 250%.</0>_t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>One tick</0> is generated <0>every second</0> for volatility indices <0>150 (1s), and 250 (1s).</0>_t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const AsianIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize translate_text="_t_Each of these indices replicates the performance of top publicly traded companies in a financial market in the Asia/ Oceania region._t_" />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>Australia 200</0> tracks the stock performance of the 200 largest listed companies in Australia._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>Japan 225</0> tracks the stock performance of 225 large, publicly owned companies in Japan._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const EuropeanIndicesDetails = () => {
    const { region } = useBuildVariant()
    const show_row_content = region === 'eu' ? false : true

    return (
        <DetailsContainer>
            <Text>
                <Localize translate_text="_t_Each of these indices replicates the performance of top publicly traded companies in financial markets in Europe._t_" />
            </Text>
            <Text>
                <Localize
                    translate_text="_t_<0>Europe 50</0> Index follows the performance of the 50 largest and most liquid stocks in the EU._t_"
                    components={[<strong key={0} />]}
                />
            </Text>
            <Text>
                <Localize
                    translate_text="_t_<0>France 40</0> tracks the performance of the 40 most traded stocks among the top 100 listed companies in France._t_"
                    components={[<strong key={0} />]}
                />
            </Text>
            <Text>
                <Localize
                    translate_text="_t_<0>Germany 40</0> follows the stock performance of the 40 major listed companies in Germany._t_"
                    components={[<strong key={0} />]}
                />
            </Text>
            {show_row_content && (
                <Text>
                    <Localize
                        translate_text="_t_<0>Netherlands 25</0> follows the stock performance of the 25 most traded companies in the Netherlands._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            )}
            <Text>
                <Localize
                    translate_text="_t_<0>Spain 35</0> follows the stock performance of the top 35 companies in Spain._t_"
                    components={[<strong key={0} />]}
                />
            </Text>
            <Text>
                <Localize
                    translate_text="_t_<0>UK 100</0> follows the stock performance of the top 100 listed companies in the UK._t_"
                    components={[<strong key={0} />]}
                />
            </Text>
        </DetailsContainer>
    )
}

export const CryptocurrenciesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize translate_text="_t_Cryptocurrency contracts traded with multipliers have a time limit. It depends on the asset you are trading and appears on the Deriv Trader dashboard before you place a trade._t_" />
        </Text>
    </DetailsContainer>
)

export const JumpIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="_t_These indices correspond to simulated markets with <0>constant volatilities of 10%, 25%, 50%, 75%, and 100%.</0> There is an equal probability of an up or down jump <0>every 20 minutes</0>, on average. The jump size is <0>around 30 times</0> the normal price movement, on average._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const DerivedCFDsDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="_t_These indices correspond to financial markets with volatilities of 10% and 20%. One tick is generated for every tick of the corresponding forex pair._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const DriftSwitchDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize translate_text="_t_These indices simulate market trends with asset prices going through 3 regimes:_t_" />
        </Text>
        <Ul mb="2rem" ml="2rem">
            <Li>
                <Text>
                    <Localize translate_text="_t_Positive Drift Regime (also known as a Bullish Trend),_t_" />
                </Text>
            </Li>
            <Li>
                <Text>
                    <Localize translate_text="_t_Negative Drift Regime (also known as a Bearish Trend), and_t_" />
                </Text>
            </Li>
            <Li>
                <Text>
                    <Localize translate_text="_t_Driftless Regime (also known as a Sideways Trend)_t_" />
                </Text>
            </Li>
        </Ul>
        <Text>
            <Localize
                translate_text="_t_The <0>DSI10</0> switches between regimes every <1>10 minutes</1> on average._t_"
                components={[<strong key={0} />, <strong key={1} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_The <0>DSI20</0> switches between regimes every <1>20 minutes</1> on average._t_"
                components={[<strong key={0} />, <strong key={1} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_The <0>DSI30</0> switches between regimes every <1>30 minutes</1> on average._t_"
                components={[<strong key={0} />, <strong key={1} />]}
            />
        </Text>
        <Text>
            <Localize translate_text="_t_We offer dynamic spreads on DSI, which are calculated in real-time based on supply and demand._t_" />
        </Text>
    </DetailsContainer>
)
