import React, { ReactElement } from 'react'
import { CrashText, DetailsContainer } from '../style/_markets-style'
import { Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { ROW } from 'components/containers'

export const AmericasDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                '_t_Each of these indices replicates the performance of top publicly traded companies in a segment of the US economy._t_',
            )}
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
            {localize(
                '_t_Each of these indices replicates the performance of top publicly traded companies in a financial market in the Asia/ Oceania region._t_',
            )}
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
            {localize(
                '_t_These indices correspond to simulated markets with constant volatilities of 10%, 25%, 50%, 75%, and 100%._t_',
            )}
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
                translate_text="_t_With these indices, there is an average of one drop (crash) or one spike (boom) in prices that occur in a <0>series of 1000, 500 or 300 ticks</0>._t_"
                components={[<strong key={0} />]}
            />
        </CrashText>
    </DetailsContainer>
)

export const CrashBoomMultipliersDetails = () => (
    <DetailsContainer>
        <CrashText>
            <Localize
                translate_text="_t_With these indices, there is an average of one drop (crash) or one spike (boom) in prices that occur in a <0>series of 1000, or 500 ticks</0>._t_"
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

export const EuropeDetails = (index: number): ReactElement => {
    const children = [
        <Text key={0}>
            {localize(
                '_t_Each of these indices replicates the performance of top publicly traded companies in financial markets in Europe._t_',
            )}
        </Text>,
        <Text key={1}>
            <Localize
                translate_text="_t_<0>Netherland 25</0> follows the stock performance of the 25 most traded companies in the Netherlands._t_"
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

export const RangeBreakIndicesDetails = (): ReactElement => (
    <DetailsContainer>
        <Text>
            {localize(
                '_t_These indices fluctuate between two price points (borders), occasionally breaking through the borders to create a new range on average once every 100 or 200 times that they hit the borders._t_',
            )}
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
            {localize(
                '_t_Measures the value of gold against a basket of five global currencies (EUR, GBP, JPY, AUD, USD), each weighted by 20%._t_',
            )}
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

export const VolatilityIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                '_t_These indices correspond to simulated markets with constant volatilities of 10%, 25%, 50%, 75%, 100%, 200%, and 300%._t_',
            )}
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>One tick</0> is generated <0>every two seconds</0> for volatility indices <0>10, 25, 50, 75, and 100</0>._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>One tick</0> is generated <0>every second</0> for volatility indices <0>10 (1s), 25 (1s), 50 (1s), 75 (1s), 100 (1s), 200 (1s), and 300 (1s)</0>._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const VolatilityIndicesDetailsEU = (): ReactElement => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="_t_These indices correspond to simulated markets with <0>constant volatilities of 200% and 300%.</0>_t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>One tick</0> is generated <0>every second</0> for volatility indices <0>200(1s) and 300(1s).</0>_t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const AmericanIndicesDetails = (): ReactElement => (
    <DetailsContainer>
        <Text>
            {localize(
                '_t_Each of these indices replicates the performance of top publicly traded companies in a segment of the US economy._t_',
            )}
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

export const AsianIndicesDetails = (): ReactElement => (
    <DetailsContainer>
        <Text>
            {localize(
                '_t_Each of these indices replicates the performance of top publicly traded companies in a financial market in the Asia/ Oceania region._t_',
            )}
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

export const EuropeanIndicesDetails = (): ReactElement => (
    <DetailsContainer>
        <Text>
            {localize(
                '_t_Each of these indices replicates the performance of top publicly traded companies in financial markets in Europe._t_',
            )}
        </Text>
        <ROW>
            <Text>
                <Localize
                    translate_text="_t_<0>Netherland 25</0> follows the stock performance of the 25 most traded companies in the Netherlands._t_"
                    components={[<strong key={0} />]}
                />
            </Text>
        </ROW>
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
        <Text>
            <Localize
                translate_text="_t_<0>UK 100</0> follows the stock performance of the top 100 listed companies in the UK._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_<0>Spain 35</0> follows the stock performance of the top 35 companies in Spain._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)
export const CryptocurrenciesDetails = (): ReactElement => (
    <DetailsContainer>
        <Text>
            {localize(
                '_t_Cryptocurrency contracts traded with multipliers have a time limit. It depends on the asset you are trading and appears on the DTrader dashboard before you place a trade._t_',
            )}
        </Text>
    </DetailsContainer>
)

export const JumpIndicesDetails = (): ReactElement => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="_t_These indices correspond to simulated markets with <0>constant volatilities of 10%, 25%, 50%, 75%, and 100%.</0> There is an equal probability of an up or down jump <0>every 20 minutes</0>, on average. The jump size is <0>around 30 times</0> the normal price movement, on average._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)
