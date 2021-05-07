import React from 'react'
import styled from 'styled-components'
import { CrashBoom, ContinuousIndices } from '../../markets/instruments/_submarkets.js'
import MarketsAccordion from '../../markets/components/helper/_markets_accordion.js'
import AvailablePlatforms from '../../markets/components/helper/_available-platforms.js'
import { synthetic_multiplier } from '../../markets/static/content/_multipliers'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid, Show } from 'components/containers'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'

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

const CrashBoomDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="With these indices, there is an average of one drop (crash) or one spike (boom) in prices that occur in a <0>series of 1000 or 500 ticks</0>."
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

const SyntheticIndices = () => {
    return (
        <SectionContainer padding="4rem 0 8rem">
            <Flex max_width="79.2rem" m="0 auto" direction="column">
                <StyledText mb="12px" align="center">
                    {localize(
                        'Synthetic indices are engineered to mimic real-world market movement; minus real life risk. Trade multipliers on Synthetic Indices 24/7 and benefit from high leverage, tight spreads and fixed generation intervals.',
                    )}
                </StyledText>
                <Text weight="bold">
                    {localize('Synthetics indices available for Multipliers trading')}
                </Text>
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
                <AvailablePlatforms dtrader />
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
                <AvailablePlatforms dtrader />
                <Show.Eu>
                    {synthetic_multiplier.eu_content.map((text, index) => (
                        <Text key={index} mt="2.5rem" color="grey-5" size="var(--text-size-xs)">
                            {text}
                        </Text>
                    ))}
                </Show.Eu>
            </Flex>
        </SectionContainer>
    )
}

export default SyntheticIndices
