import React from 'react'
import AvailablePlatforms from '../_available-platforms'
import MarketsAccordion from '../_markets_accordion'
import {
    Col,
    Descriptions,
    MarketsList,
    MarketsWrapper,
    Row,
    StyledText,
    Title,
} from '../_markets-style'
import { VolatilityIndices, CrashBoom, StepIndices, RangeBreak } from '../sub-markets/_submarkets'
import { SectionContainer, Flex, Show } from 'components/containers'
import { localize } from 'components/localization'

const Margin = () => {
    return (
        <SectionContainer padding="4rem 0 8rem">
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
                            <Row is_accordion_row={true}>
                                <Col>
                                    <Title weight="bold" max_width="9.7rem" align="center">
                                        {localize('Volatility indices')}
                                    </Title>
                                </Col>
                                <MarketsList
                                    col={3}
                                    has_right_border={true}
                                    mobile_col_template={1}
                                >
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
                                <MarketsList
                                    col={3}
                                    has_right_border={true}
                                    mobile_col_template={1}
                                >
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
                                    <Title weight="bold" max_width="9.7rem" align="center">
                                        {localize('Step indices')}
                                    </Title>
                                </Col>
                                <MarketsList
                                    col={3}
                                    has_right_border={true}
                                    mobile_col_template={1}
                                >
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
                                    <Title weight="bold" max_width="9.7rem" align="center">
                                        {localize('Range break indices')}
                                    </Title>
                                </Col>
                                <MarketsList
                                    col={3}
                                    has_right_border={true}
                                    mobile_col_template={1}
                                >
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
