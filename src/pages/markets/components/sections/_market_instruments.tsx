import React from 'react'
import MarketsAccordion from '../helper/_markets_accordion'
import {
    Col,
    LatestMarketsList,
    MarketsWrapper,
    MarketsList,
    DerivedMarketsList,
    Row,
    Title,
} from '../../static/style/_markets-style'
import { useBrowserResize } from '../../../../components/hooks/use-browser-resize'
import { TMarketInstruments } from 'pages/markets/static/content/_types'
import { Localize } from 'components/localization'

const MarketInstruments = ({
    market_content: { content, has_global_accordion, markets_list, template },
}: TMarketInstruments) => {
    const [is_mobile] = useBrowserResize()

    return (
        <MarketsWrapper>
            {content?.map(
                ({
                    instruments,
                    title,
                    col,
                    details,
                    gap,
                    gap_mobile,
                    id,
                    mobile_col,
                    mobile_template,
                    mobile_title,
                    padding,
                    tablet_col,
                    title_components,
                    content_template = template,
                }) =>
                    has_global_accordion || details ? (
                        <MarketsAccordion
                            key={title}
                            id={id}
                            renderTitle={() => (
                                <Row is_accordion_row>
                                    <Col
                                        full_width={content_template == 2 || content_template == 3}
                                    >
                                        <Title>
                                            <Localize
                                                translate_text={
                                                    is_mobile && mobile_title ? mobile_title : title
                                                }
                                                components={title_components}
                                            />
                                        </Title>
                                    </Col>
                                    {content_template == 2 ? (
                                        <LatestMarketsList
                                            has_right_border
                                            col={col}
                                            tablet_col={tablet_col}
                                            mobile_col={mobile_col}
                                            padding={padding}
                                            gap={gap}
                                            gap_mobile={gap_mobile}
                                        >
                                            {instruments}
                                        </LatestMarketsList>
                                    ) : content_template == 3 ? (
                                        <DerivedMarketsList>{instruments}</DerivedMarketsList>
                                    ) : (
                                        <MarketsList has_right_border>{instruments}</MarketsList>
                                    )}
                                </Row>
                            )}
                        >
                            {details}
                        </MarketsAccordion>
                    ) : (
                        <Row key={title} id={id} mobile_template={mobile_template}>
                            <Col mobile_template={mobile_template}>
                                <Title>
                                    <Localize
                                        translate_text={
                                            is_mobile && mobile_title ? mobile_title : title
                                        }
                                        components={title_components}
                                    />
                                </Title>
                            </Col>
                            {content_template == 2 ? (
                                <LatestMarketsList
                                    col={col}
                                    tablet_col={tablet_col}
                                    mobile_col={mobile_col}
                                    padding={padding}
                                    gap={gap}
                                    mobile_template={mobile_template}
                                    gap_mobile={gap_mobile}
                                    {...markets_list}
                                >
                                    {instruments}
                                </LatestMarketsList>
                            ) : (
                                <MarketsList {...markets_list} gap="16px">
                                    {instruments}
                                </MarketsList>
                            )}
                        </Row>
                    ),
            )}
        </MarketsWrapper>
    )
}

export default MarketInstruments
