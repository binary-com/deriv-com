import React from 'react'
import MarketsAccordion from '../_markets_accordion'
import AvailablePlatforms from '../_available-platforms'
import {
    Col,
    Descriptions,
    MarketsList,
    MarketsWrapper,
    Row,
    StyledText,
    Title,
} from '../_markets-style'
import { ContinuousIndices, CrashBoom, StepIndices } from '../sub-markets/_submarkets'
import { Text } from 'components/elements'
import { SectionContainer, Flex, Show } from 'components/containers'
import { localize } from 'components/localization'

const Multipliers = () => {
    return (
        <SectionContainer padding="4rem 0 8rem">
            <Flex max_width="79.2rem" m="0 auto" direction="column">
                <Descriptions>
                    <StyledText align="center">
                        {localize(
                            'Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment.',
                        )}
                    </StyledText>
                    <AvailablePlatforms dtrader />
                </Descriptions>
                <StyledText weight="bold" mt="2.4rem">
                    {localize('Instruments available for multipliers trading')}
                </StyledText>
                <MarketsWrapper>
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row is_accordion_row={true}>
                                <Col>
                                    <Title>{localize('Continuous indices')}</Title>
                                </Col>
                                <MarketsList col={3} has_right_border={true}>
                                    <ContinuousIndices />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={ContinuousIndicesDetails}
                    />
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row is_accordion_row={true}>
                                <Col max_width="13.2rem">
                                    <Show.Desktop>
                                        <Title max_width="9.7rem">{localize('Crash/Boom')}</Title>
                                    </Show.Desktop>
                                    <Show.Mobile>
                                        <Title max_width="9.7rem">{localize('Crash/ Boom')}</Title>
                                    </Show.Mobile>
                                </Col>
                                <MarketsList col={3} has_right_border={true}>
                                    <CrashBoom />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={CrashBoomDetails}
                    />
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row is_accordion_row={true}>
                                <Col>
                                    <Title max_width="9.7rem">{localize('Step indices')}</Title>
                                </Col>
                                <MarketsList col={3} has_right_border={true}>
                                    <StepIndices />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={StepIndicesDetails}
                    />
                </MarketsWrapper>
                <Show.Eu>
                    <Text mt="1.6rem" color="grey-5" size="var(--text-size-xs)">
                        {localize(
                            'Return to Player (RTP) for multiplier options using multiplier 100 and duration of 1 hour is in the range of 98-99 % on an average. Using a different multiplier or duration may affect the RTP.',
                        )}
                    </Text>
                </Show.Eu>
            </Flex>
        </SectionContainer>
    )
}

export default Multipliers
