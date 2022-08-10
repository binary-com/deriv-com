import React from 'react'
import styled from 'styled-components'
import {
    CrashBoomMultipliers,
    ContinuousIndices,
    VolatilityIndices,
    JumpIndices,
    StepIndices,
} from '../../markets/instruments/_index'
import MarketsAccordion from '../../markets/components/helper/_markets_accordion'
import AvailablePlatforms from '../../markets/components/helper/_available-platforms'
import {
    CrashBoomMultipliersDetails,
    CrashBoomDetailsEU,
    StepIndicesDetails,
    JumpIndicesDetails,
} from 'pages/markets/static/content/_details'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize, Localize } from 'components/localization'
import { Desktop, Mobile } from 'components/containers/visibility'
import { useCountryRule } from 'components/hooks/use-country-rule'
import device from 'themes/device'
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

const SyntheticIndices = () => {
    const { is_eu_country } = React.useContext(DerivStore)
    const { is_row } = useCountryRule()

    return (
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
                    <AvailablePlatforms m_top="16px" dbot={is_row} dtrader />
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
                                        <Desktop>
                                            <Title weight="bold" max_width="9.7rem" align="center">
                                                {localize('Volatility indices')}
                                            </Title>
                                        </Desktop>
                                        <Mobile>
                                            <Title weight="bold" max_width="9.7rem" align="center">
                                                {localize('Volatility indices')}
                                            </Title>
                                        </Mobile>
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
                                    <Desktop>
                                        <Title weight="bold" max_width="9.7rem" align="center">
                                            {localize('Crash/Boom')}
                                        </Title>
                                    </Desktop>
                                    <Mobile>
                                        <Title weight="bold" max_width="9.7rem" align="center">
                                            {localize('Crash/ Boom')}
                                        </Title>
                                    </Mobile>
                                </Col>
                                <MarketsList>
                                    <CrashBoomMultipliers />
                                </MarketsList>
                            </Flex>
                        )}
                        renderDetails={
                            is_eu_country ? CrashBoomDetailsEU : CrashBoomMultipliersDetails
                        }
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
                {!is_eu_country && (
                    <MarketsWrapper direction="column">
                        <MarketsAccordion
                            renderTitle={() => (
                                <Flex jc="flex-start" ai="center">
                                    <Col>
                                        <Title weight="bold" align="center">
                                            {localize('Jump indices')}
                                        </Title>
                                    </Col>
                                    <MarketsList>
                                        <JumpIndices />
                                    </MarketsList>
                                </Flex>
                            )}
                            renderDetails={JumpIndicesDetails}
                        />
                    </MarketsWrapper>
                )}
                {!is_eu_country && (
                    <MarketsWrapper direction="column">
                        <MarketsAccordion
                            renderTitle={() => (
                                <Flex jc="flex-start" ai="center">
                                    <Col>
                                        <Title weight="bold" align="center">
                                            {localize('Step indices')}
                                        </Title>
                                    </Col>
                                    <MarketsList>
                                        <StepIndices />
                                    </MarketsList>
                                </Flex>
                            )}
                            renderDetails={StepIndicesDetails}
                        />
                    </MarketsWrapper>
                )}
            </Flex>
        </SectionContainer>
    )
}

export default SyntheticIndices
