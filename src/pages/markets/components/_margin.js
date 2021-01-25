import React from 'react'
import PropTypes from 'prop-types'
import AvailablePlatforms from '../_available-platforms.js'
import MarketsAccordion from '../_markets_accordion'
import {
    Col,
    ContentWrapper,
    MarketsWrapper,
    Descriptions,
    MarketsList,
    Row,
    StyledText,
    Title,
} from '../_markets-style'
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'

const Margin = ({ market_content }) => (
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
                {market_content.content?.map((content, index) =>
                    market_content.has_global_accordion || content.has_accordion ? (
                        <MarketsAccordion
                            key={index}
                            renderTitle={() => (
                                <Row is_accordion_row={true}>
                                    <Col>
                                        <Title>{content.title}</Title>
                                    </Col>
                                    <MarketsList has_right_border={true}>
                                        {content.component}
                                    </MarketsList>
                                </Row>
                            )}
                            renderDetails={content.details}
                            custom_index={content.custom_index}
                        />
                    ) : (
                        <Row key={index}>
                            <Col>
                                <Title>{content.title}</Title>
                            </Col>
                            <MarketsList {...market_content.markets_list}>
                                {content.component}
                            </MarketsList>
                        </Row>
                    ),
                )}
            </MarketsWrapper>
        </ContentWrapper>
    </SectionContainer>
)

Margin.propTypes = {
    has_market_accordion: PropTypes.bool,
    market_content: PropTypes.object,
}

export default Margin
