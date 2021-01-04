import React from 'react'
import { MajorPairs } from '../sub-markets/_submarkets'
import AvailablePlatforms from '../_available-platforms'
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

const Multipliers = () => {
    return (
        <SectionContainer padding="4rem 0 8rem">
            <ContentWrapper>
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
                <Row mt="1.6rem">
                    <Col>
                        <Title>{localize('Major pairs')}</Title>
                    </Col>
                    <MarketsList responsive_col={2}>
                        <MajorPairs />
                    </MarketsList>
                </Row>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Multipliers
