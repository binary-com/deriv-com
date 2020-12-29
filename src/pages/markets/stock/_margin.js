import React from 'react'
import styled from 'styled-components'
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
    Title,
} from '../_markets-style'
import { EuropeDetails } from './_details'
import { Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import { localize } from 'components/localization'
import { OTCGERMAN } from 'components/elements/symbols'

const Symbol = styled(Flex)`
    width: fit-content;

    img {
        width: 32px;
        height: 32px;
        margin-right: 0.8rem;
    }
    ${Text} {
        font-weight: normal;
        font-size: var(--text-size-xs);
        line-height: 1.14;
    }
`

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
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row is_accordion_row={true}>
                                <Col>
                                    <Title>{localize('Europe')}</Title>
                                </Col>
                                <MarketsList
                                    has_right_border={true}
                                    col={1}
                                    tablet_col={1}
                                    mobile_col={1}
                                >
                                    <Symbol ai="center">
                                        <img src={OTCGERMAN} />
                                        <Text>{localize('German Index')}</Text>
                                    </Symbol>
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={EuropeDetails}
                        args={[4]}
                    />
                </MarketsWrapper>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Margin
