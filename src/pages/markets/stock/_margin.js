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
    SymbolContainer,
    Title,
} from '../_markets-style'
import { EuropeDetails } from './_details'
import { Text } from 'components/elements'
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'
import { OTCGERMAN } from 'components/elements/symbols'

const Margin = () => (
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
                <MarketsAccordion
                    renderTitle={() => (
                        <Row is_accordion_row={true}>
                            <Col>
                                <Title>{localize('Europe')}</Title>
                            </Col>
                            <MarketsList has_right_border={true}>
                                <SymbolContainer>
                                    <img src={OTCGERMAN} />
                                    <Text>{localize('German Index')}</Text>
                                </SymbolContainer>
                            </MarketsList>
                        </Row>
                    )}
                    renderDetails={EuropeDetails}
                    custom_index={4}
                />
            </MarketsWrapper>
        </ContentWrapper>
    </SectionContainer>
)

export default Margin
