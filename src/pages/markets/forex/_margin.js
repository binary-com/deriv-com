import React from 'react'
import styled, { css } from 'styled-components'
import AvailablePlatforms from '../_available-platforms'
import MarketsAccordion from '../_markets_accordion'
import {
    ExoticPairs,
    MajorPairs,
    MinorPairs,
    SmartFX,
    SmartGoldIndex,
    StepFX,
} from '../sub-markets/_submarkets'
import { SmartFXDetails, SmartGoldIndexDetails, StepFXDetails } from './_details'
import { Text } from 'components/elements'
import { CssGrid, Flex, SectionContainer } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device'

const Descriptions = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-22);
`
const Col = styled(Flex)`
    max-width: 12.9rem;
    padding: 0 0.4rem;
`
const Row = styled(Flex)`
    ${({ is_accordion_row }) => {
        if (!is_accordion_row) {
            return css`
                border: 1px solid var(--color-grey-22);
                margin-top: 2.4rem;
                border-radius: 8px;
            `
        }
    }}
    justify-content: flex-start;
    align-items: center;
`
const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
        text-align: left;
    }
`
const MarketsList = styled(CssGrid)`
    border-left: 1px solid var(--color-grey-22);
    border-right: ${({ has_right_border }) =>
        has_right_border ? '1px solid var(--color-grey-22)' : 'unset'};
    grid-template-columns: ${({ col }) => `repeat(${col ?? 5}, 1fr)`};
    width: 100%;
    padding: 2.4rem;
    grid-row-gap: 1.6rem;

    @media ${device.tabletL} {
        grid-template-columns: repeat(3, 1fr);

        img {
            width: 16px;
            height: 16px;
            margin-right: 4px;
        }
        ${Text} {
            font-size: 1.5rem;
            line-height: 1.5;
        }
    }

    @media ${device.mobileL} {
        grid-template-columns: repeat(2, 1fr);
    }
`
const MarketsWrapper = styled(Flex)`
    flex-direction: column;

    > div {
        margin-top: 24px;
    }
`
const Title = styled(Text)`
    text-align: center;
    font-weight: bold;

    @media ${device.tabletL} {
        font-weight: 600;
    }
`

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
                <MarketsWrapper>
                    <Row>
                        <Col>
                            <Title>{localize('Major pairs')}</Title>
                        </Col>
                        <MarketsList>
                            <MajorPairs />
                        </MarketsList>
                    </Row>
                    <Row>
                        <Col>
                            <Title>{localize('Minor pairs')}</Title>
                        </Col>
                        <MarketsList>
                            <MinorPairs />
                        </MarketsList>
                    </Row>
                    <Row>
                        <Col>
                            <Title>{localize('Exotic pairs')}</Title>
                        </Col>
                        <MarketsList>
                            <ExoticPairs />
                        </MarketsList>
                    </Row>
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row is_accordion_row={true}>
                                <Col>
                                    <Title>{localize('Smart FX')}</Title>
                                </Col>
                                <MarketsList col={4} has_right_border={true}>
                                    <SmartFX />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={SmartFXDetails}
                    />
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row is_accordion_row={true}>
                                <Col>
                                    <Title>{localize('Step FX')}</Title>
                                </Col>
                                <MarketsList col={3} has_right_border={true}>
                                    <StepFX />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={StepFXDetails}
                    />
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row is_accordion_row={true}>
                                <Col>
                                    <Title>{localize('Smart Gold Index')}</Title>
                                </Col>
                                <MarketsList col={1} has_right_border={true}>
                                    <SmartGoldIndex />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={SmartGoldIndexDetails}
                    />
                </MarketsWrapper>
            </Flex>
        </SectionContainer>
    )
}

export default Margin
