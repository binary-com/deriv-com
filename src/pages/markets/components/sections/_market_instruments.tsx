import React, { ReactElement, ReactNode } from 'react'
import MarketsAccordion from '../helper/_markets_accordion'
import {
    Col,
    LatestMarketsList,
    MarketsWrapper,
    MarketsList,
    Row,
    Title,
} from '../../static/style/_markets-style'
import { useBrowserResize } from '../../../../components/hooks/use-browser-resize'
type Contentelement = {
    component?: ReactElement
    mobile_title?: ReactElement
    title?: ReactElement
    details?: ReactNode
    col?: number
    tablet_col?: number
    mobile_col?: number
    padding?: string
    flex?: boolean
    gap?: string
    gap_mobile?: string
    custom_index?: number
    mobile_template?: true
}

export type MarketInstrumentsElement = {
    markets_list?: {
        col?: number
        tablet_col?: number
        mobile_col?: number
    }
    content?: Contentelement[]
    has_global_accordion?: boolean
    template?: number
}
export type MarketInstrumentsProps = {
    market_content: MarketInstrumentsElement
}
const MarketInstruments = ({ market_content }: MarketInstrumentsProps) => {
    const [is_mobile] = useBrowserResize()
    return (
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
                                            {is_mobile && content.mobile_title ? (
                                                <Title>{content.mobile_title}</Title>
                                            ) : (
                                                <Title>{content.title}</Title>
                                            )}
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
                                            {is_mobile && content.mobile_title ? (
                                                <Title>{content.mobile_title}</Title>
                                            ) : (
                                                <Title>{content.title}</Title>
                                            )}
                                        </Col>
                                        <MarketsList has_right_border={true}>
                                            {content.component}
                                        </MarketsList>
                                    </>
                                )}
                            </Row>
                        )}
                    >
                        {content.details}
                    </MarketsAccordion>
                ) : (
                    <Row key={index} mobile_template={content.mobile_template}>
                        <Col mobile_template={content.mobile_template}>
                            {is_mobile && content.mobile_title ? (
                                <Title>{content.mobile_title}</Title>
                            ) : (
                                <Title>{content.title}</Title>
                            )}
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
                            <MarketsList {...market_content.markets_list} gap="16px">
                                {content.component}
                            </MarketsList>
                        )}
                    </Row>
                ),
            )}
        </MarketsWrapper>
    )
}

export default MarketInstruments
