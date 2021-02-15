import React from 'react'
import PropTypes from 'prop-types'
import MarketsAccordion from '../helper/_markets_accordion'
import { Col, MarketsWrapper, MarketsList, Row, Title } from '../../static/style/_markets-style'

const MarketInstruments = ({ market_content }) => (
    <MarketsWrapper>
        {market_content.content?.map((content, index) =>
            market_content.has_global_accordion || content.details ? (
                <MarketsAccordion
                    key={index}
                    renderTitle={() => (
                        <Row is_accordion_row={true}>
                            <Col>
                                <Title>{content.title}</Title>
                            </Col>
                            <MarketsList has_right_border={true}>{content.component}</MarketsList>
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
                    <MarketsList {...market_content.markets_list}>{content.component}</MarketsList>
                </Row>
            ),
        )}
    </MarketsWrapper>
)

MarketInstruments.propTypes = {
    market_content: PropTypes.object,
}

export default MarketInstruments
