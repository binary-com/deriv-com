import React from 'react'
import styled from 'styled-components'
import {
    CrashBoom,
    ContinuousIndices,
    JumpIndices,
    StepIndices,
    VolatilityIndices,
} from '../../markets/instruments/_submarkets.js'
import MarketsAccordion from '../../markets/components/helper/_markets_accordion.js'
import AvailablePlatforms from '../../markets/components/helper/_available-platforms.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid, Show } from 'components/containers'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import { NonUK } from 'components/containers/visibility'
import { DerivStore } from 'store'

const StyledText = styled(Text)`
    @media ${device.tabletL} {
        text-align: left;
    }
`

const Col = styled(Flex)`
    max-width: 13.2rem;

    @media ${device.tabletL} {
        max-width: 15rem;
    }
`

const MarketsWrapper = styled(Flex)`
    flex-direction: column;

    > div {
        margin-top: 2.4rem;
    }
`
const MarketsList = styled(CssGrid)`
    border-left: 1px solid var(--color-grey-22);
    border-right: 1px solid var(--color-grey-22);
    width: 100%;
    padding: 2.4rem 0.7rem;
    grid-row-gap: 1.6rem;
    grid-template-columns: repeat(3, 1fr);

    @media ${device.tabletL} {
        grid-template-columns: repeat(2, 1fr);

        img {
            width: 16px;
            height: 16px;
            margin-right: 4px;
        }
        ${Text} {
            font-size: 12px;
            line-height: 1.5;
        }
    }

    @media ${device.tabletS} {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Title = styled(Text)`
    text-align: center;

    @media ${device.tabletL} {
        font-weight: 600;
    }
`

const DetailsContainer = styled(Flex)`
    flex-direction: column;

    ${Text} {
        font-size: 1.4rem;
        margin-top: 1.6rem;

        @media ${device.tabletL} {
            margin-top: 1rem;
        }
    }
`
const AvailablePlatformsWrapper = styled(Flex)`
    border-bottom: 1px solid var(--color-grey-21);
    padding-bottom: 40px;

    @media ${device.tabletL} {
        margin-bottom: 24px;
        padding-bottom: 16px;
    }
`

const CrashBoomDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="With these indices, there is an average of one drop (crash) or one spike (boom) in prices that occur in  <0>a series of 300 ticks</0>."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

const VolatilityIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="These indices correspond to simulated markets with <0>constant volatilities of 200% and 300%</0>."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>One tick</0> is generated <0>every second</0> for volatility indices <0>200(1s) and 300(1s)</0>."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

const ContinuousIndicesDetails = () => (
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

const JumpIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="These indices correspond to simulated markets with <0>constant volatilities of 10%, 25%, 50%, 75%, and 100%.</0> There is an equal probability of an up or down jump <0>every 20 minutes</0>, on average. The jump size is <0>around 30 times</0> the normal price movement, on average."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

const StepIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="With these indices, there is an equal probability of up/down movement in a price series with a <0>fixed step size of 0.1</0>."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

const SyntheticIndices = () => {
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <NonUK>
            <SectionContainer padding="4rem 0 8rem">
                <Flex max_width="79.2rem" m="0 auto" direction="column">
                    <StyledText mb="12px" align="center">
                        {is_eu_country
                            ? localize(
                                  'Synthetic indices are engineered to mimic real-world market movement; minus real life risk. Trade multipliers on synthetic indices 24/7 and benefit from tight spreads and fixed generation intervals.',
                              )
                            : localize(
                                  'Synthetic indices are engineered to mimic real-world market movement; minus real life risk. Trade multipliers on synthetic indices 24/7 and benefit from high leverage, tight spreads and fixed generation intervals.',
                              )}
                    </StyledText>
                    <AvailablePlatformsWrapper mb="40px">
                        <AvailablePlatforms dtrader />
                    </AvailablePlatformsWrapper>
                    <Text weight="bold">
                        {localize('Synthetic indices available for multipliers trading')}
                    </Text>
                    {is_eu_country && (
                        <MarketsWrapper direction="column">
                            <MarketsAccordion
                                renderTitle={() => (
                                    <Flex jc="flex-start" ai="center">
                                        <Col max_width="13.2rem">
                                            <Show.Desktop>
                                                <Title
                                                    weight="bold"
                                                    max_width="9.7rem"
                                                    align="center"
                                                >
                                                    {localize('Volatility indices')}
                                                </Title>
                                            </Show.Desktop>
                                            <Show.Mobile>
                                                <Title
                                                    weight="bold"
                                                    max_width="9.7rem"
                                                    align="center"
                                                >
                                                    {localize('Volatility indices')}
                                                </Title>
                                            </Show.Mobile>
                                        </Col>
                                        <MarketsList>
                                            <VolatilityIndices />
                                        </MarketsList>
                                    </Flex>
                                )}
                                renderDetails={VolatilityIndicesDetails}
                            />
                        </MarketsWrapper>
                    )}

                    <MarketsWrapper direction="column">
                        <MarketsAccordion
                            renderTitle={() => (
                                <Flex jc="flex-start" ai="center">
                                    <Col max_width="13.2rem">
                                        <Show.Desktop>
                                            <Title weight="bold" max_width="9.7rem" align="center">
                                                {localize('Crash/Boom')}
                                            </Title>
                                        </Show.Desktop>
                                        <Show.Mobile>
                                            <Title weight="bold" max_width="9.7rem" align="center">
                                                {localize('Crash/ Boom')}
                                            </Title>
                                        </Show.Mobile>
                                    </Col>
                                    <MarketsList>
                                        <CrashBoom />
                                    </MarketsList>
                                </Flex>
                            )}
                            renderDetails={CrashBoomDetails}
                        />
                    </MarketsWrapper>
                    {!is_eu_country && (
                        <MarketsWrapper direction="column">
                            <MarketsAccordion
                                renderTitle={() => (
                                    <Flex jc="flex-start" ai="center">
                                        <Col>
                                            <Title weight="bold" align="center">
                                                {localize('Continuous indices')}
                                            </Title>
                                        </Col>
                                        <MarketsList>
                                            <ContinuousIndices />
                                        </MarketsList>
                                    </Flex>
                                )}
                                renderDetails={ContinuousIndicesDetails}
                            />
                        </MarketsWrapper>
                    )}
                    <MarketsWrapper direction="column">
                        <MarketsAccordion
                            renderTitle={() => (
                                <Flex jc="flex-start" ai="center">
                                    <Col max_width="13.2rem">
                                        <Show.Desktop>
                                            <Title weight="bold" max_width="9.7rem" align="center">
                                                {localize('Jump indices')}
                                            </Title>
                                        </Show.Desktop>
                                        <Show.Mobile>
                                            <Title weight="bold" max_width="9.7rem" align="center">
                                                {localize('Jump indices')}
                                            </Title>
                                        </Show.Mobile>
                                    </Col>
                                    <MarketsList>
                                        <JumpIndices />
                                    </MarketsList>
                                </Flex>
                            )}
                            renderDetails={JumpIndicesDetails}
                        />
                    </MarketsWrapper>
                    <MarketsWrapper direction="column">
                        <MarketsAccordion
                            renderTitle={() => (
                                <Flex jc="flex-start" ai="center">
                                    <Col max_width="13.2rem">
                                        <Show.Desktop>
                                            <Title weight="bold" max_width="9.7rem" align="center">
                                                {localize('Step indices')}
                                            </Title>
                                        </Show.Desktop>
                                        <Show.Mobile>
                                            <Title weight="bold" max_width="9.7rem" align="center">
                                                {localize('Step indices')}
                                            </Title>
                                        </Show.Mobile>
                                    </Col>
                                    <MarketsList>
                                        <StepIndices />
                                    </MarketsList>
                                </Flex>
                            )}
                            renderDetails={StepIndicesDetails}
                        />
                    </MarketsWrapper>
                </Flex>
            </SectionContainer>
        </NonUK>
    )
}

export default SyntheticIndices
