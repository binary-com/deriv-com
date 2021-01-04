import React from 'react'
import AvailablePlatforms from '../_available-platforms.js'
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
import { MajorPairs, MinorPairs, ExoticPairs } from '../sub-markets/_submarkets.js'
import { SectionContainer } from 'components/containers'
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
                <MarketsWrapper>
                    <Row>
                        <Col>
                            <Title>{localize('Major pairs')}</Title>
                        </Col>
                        <MarketsList responsive_col={2}>
                            <MajorPairs />
                        </MarketsList>
                    </Row>
                    <Row>
                        <Col>
                            <Title>{localize('Minor pairs')}</Title>
                        </Col>
                        <MarketsList responsive_col={2}>
                            <MinorPairs />
                        </MarketsList>
                    </Row>
                    <Row>
                        <Col>
                            <Title>{localize('Exotic pairs')}</Title>
                        </Col>
                        <MarketsList responsive_col={2}>
                            <ExoticPairs />
                        </MarketsList>
                    </Row>
                </MarketsWrapper>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Margin
