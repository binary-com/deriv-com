import React from 'react'
import styled from 'styled-components'
import AvailablePlatforms from '../_available-platforms.js'
import MarketsAccordion from '../_markets_accordion.js'
import {
    VolatilityIndices,
    CrashBoom,
    StepIndices,
    RangeBreak,
} from '../sub-markets/_submarkets.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid, Show } from 'components/containers'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'

const Descriptions = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-21);
`
const Col = styled(Flex)`
    max-width: 12.9rem;

    @media ${device.tabletL} {
        max-width: 10rem;
    }
`
const Row = styled(Flex)``
const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
        text-align: left;
    }
`
const MarketsList = styled(CssGrid)`
    border-left: 1px solid var(--color-grey-22);
    border-right: 1px solid var(--color-grey-22);
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    padding: 2.4rem 1.6rem;
    grid-row-gap: 1.6rem;

    @media ${device.tabletL} {
        grid-template-columns: repeat(1, 1fr);

        svg {
            width: 16px;
            height: 16px;
            margin-right: 4px;
        }
        ${Text} {
            font-size: 1.5rem;
            line-height: 1.5;
        }
    }
`
const Title = styled(Text)`
    @media ${device.tabletL} {
        text-align: center;
        max-width: 6.4rem;
        font-weight: 600;
    }
`
const MarketsWrapper = styled(Flex)`
    flex-direction: column;

    > div {
        margin-top: 2.4rem;
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
const VolatilityIndicesDetails = () => (
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

const RangeBreakIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'These indices fluctuate between two price points (borders), occasionally breaking through the borders to create a new range on average once every 100 or 200 times that they hit the borders.',
            )}
        </Text>
    </DetailsContainer>
)

const Margin = () => {
    return (
        <SectionContainer padding="4rem 0 8rem 0">
            <Flex max_width="79.2rem" m="0 auto" direction="column">
                <Descriptions>
                    <StyledText align="center">
                        {localize(
                            'Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss.',
                        )}
                    </StyledText>
                    <AvailablePlatforms dmt5 />
                </Descriptions>
                <StyledText weight="bold" mt="2.4rem">
                    {localize('Instruments available for margin trading')}
                </StyledText>
                <MarketsWrapper direction="column">
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row jc="flex-start" ai="center">
                                <Col max_width="13.2rem">
                                    <Title weight="bold" max_width="9.7rem" align="center">
                                        {localize('Volatility indices')}
                                    </Title>
                                </Col>
                                <MarketsList>
                                    <VolatilityIndices />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={VolatilityIndicesDetails}
                    />
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row jc="flex-start" ai="center">
                                <Col max_width="13.2rem">
                                    <Title weight="bold" max_width="9.7rem" align="center">
                                        <Show.Desktop>{localize('Crash/Boom')}</Show.Desktop>
                                        <Show.Mobile>{localize('Crash/ Boom')}</Show.Mobile>
                                    </Title>
                                </Col>
                                <MarketsList>
                                    <CrashBoom />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={CrashBoomDetails}
                    />
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row jc="flex-start" ai="center">
                                <Col max_width="13.2rem">
                                    <Title weight="bold" max_width="9.7rem" align="center">
                                        {localize('Step indices')}
                                    </Title>
                                </Col>
                                <MarketsList>
                                    <StepIndices />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={StepIndicesDetails}
                    />
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row jc="flex-start" ai="center">
                                <Col max_width="13.2rem">
                                    <Title weight="bold" max_width="9.7rem" align="center">
                                        {localize('Range break indices')}
                                    </Title>
                                </Col>
                                <MarketsList>
                                    <RangeBreak />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={RangeBreakIndicesDetails}
                    />
                </MarketsWrapper>
            </Flex>
        </SectionContainer>
    )
}

export default Margin
