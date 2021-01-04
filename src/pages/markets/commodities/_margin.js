import React from 'react'
import { Metals, Energy } from '../sub-markets/_submarkets.js'
import AvailablePlatforms from '../_available-platforms.js'
import {
    Col,
    ContentWrapper,
    Descriptions,
    MarketsList,
    Row,
    StyledText,
    Title,
} from '../_markets-style'
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
                <Row mt="1.6rem">
                    <Col>
                        <Title>{localize('Metals')}</Title>
                    </Col>
                    <MarketsList col={4}>
                        <Metals />
                    </MarketsList>
                </Row>
                <Row>
                    <Col>
                        <Title>{localize('Energy')}</Title>
                    </Col>
                    <MarketsList>
                        <Energy />
                    </MarketsList>
                </Row>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Margin
