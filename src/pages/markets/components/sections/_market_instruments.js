import React from 'react'
import PropTypes from 'prop-types'
import MarketsAccordion from '../helper/_markets_accordion'
import {
    Col,
    LatestMarketsList,
    MarketsWrapper,
    MarketsList,
    Row,
    Title,
} from '../../static/style/_markets-style'

const MarketInstruments = ({ market_content }) => (
    <MarketsWrapper>
        {market_content.content?.map((content, index) =>
            market_content.has_global_accordion || content.details ? (
                <MarketsAccordion
                    key={index}
                    renderTitle={() => (
                        <Row is_accordion_row={true}>
                            {market_content.template == 2 ? (
                                <>
                                    <Col full_width={true}>
                                        <Title>{content.title}</Title>
                                    </Col>
                                    <LatestMarketsList
                                        has_right_border={true}
                                        col={content.col}
                                        tablet_col={content.tablet_col}
                                        mobile_col={content.mobile_col}
                                        padding={content.padding}
                                        flex={content.flex}
                                        gap={content.gap}
                                        gap_mobile={content.gap_mobile}
                                    >
                                        {content.component}
                                    </LatestMarketsList>
                                </>
                            ) : (
                                <>
                                    <Col>
                                        <Title>{content.title}</Title>
                                    </Col>
                                    <MarketsList has_right_border={true}>
                                        {content.component}
                                    </MarketsList>
                                </>
                            )}
                        </Row>
                    )}
                    renderDetails={content.details}
                    custom_index={content.custom_index}
                />
            ) : (
                <Row key={index} mobile_template={content.mobile_template}>
                    <Col mobile_template={content.mobile_template}>
                        <Title>{content.title}</Title>
                    </Col>
                    {market_content.template == 2 ? (
                        <LatestMarketsList
                            col={content.col}
                            tablet_col={content.tablet_col}
                            mobile_col={content.mobile_col}
                            padding={content.padding}
                            flex={content.flex}
                            gap={content.gap}
                            mobile_template={content.mobile_template}
                            gap_mobile={content.gap_mobile}
                            {...market_content.markets_list}
                        >
                            {content.component}
                        </LatestMarketsList>
                    ) : (
                        <MarketsList {...market_content.markets_list}>
                            {content.component}
                        </MarketsList>
                    )}
                </Row>
            ),
        )}
    </MarketsWrapper>
)

MarketInstruments.propTypes = {
    market_content: PropTypes.object,
}

export default MarketInstruments
