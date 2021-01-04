import React from 'react'
import AvailablePlatforms from '../_available-platforms'
import MarketsAccordion from '../_markets_accordion'
import {
    Col,
    ContentWrapper,
    Descriptions,
    MarketsList,
    MarketsWrapper,
    Row,
    StyledText,
    Title,
} from '../_markets-style'
import { VolatilityIndices, CrashBoom, StepIndices, RangeBreak } from '../sub-markets/_submarkets'
import {
    CrashBoomDetails,
    RangeBreakIndicesDetails,
    StepIndicesDetails,
    VolatilityIndicesDetails,
} from './_details'
import { SectionContainer, Show } from 'components/containers'
import { localize } from 'components/localization'

const Margin = () => {
    return (
        <SectionContainer padding="4rem 0 8rem">
            <ContentWrapper>
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
                            <Row is_accordion_row={true}>
                                <Col>
                                    <Title>{localize('Volatility indices')}</Title>
                                </Col>
                                <MarketsList has_right_border={true}>
                                    <VolatilityIndices />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={VolatilityIndicesDetails}
                    />
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row is_accordion_row={true}>
                                <Col>
                                    <Show.Desktop>
                                        <Title>{localize('Crash/Boom')}</Title>
                                    </Show.Desktop>
                                    <Show.Mobile>
                                        <Title>{localize('Crash/ Boom')}</Title>
                                    </Show.Mobile>
                                </Col>
                                <MarketsList has_right_border={true}>
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
                                    <Title>{localize('Step indices')}</Title>
                                </Col>
                                <MarketsList has_right_border={true}>
                                    <StepIndices />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={StepIndicesDetails}
                    />
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row is_accordion_row={true}>
                                <Col>
                                    <Title>{localize('Range break indices')}</Title>
                                </Col>
                                <MarketsList has_right_border={true}>
                                    <RangeBreak />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={RangeBreakIndicesDetails}
                    />
                </MarketsWrapper>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Margin
