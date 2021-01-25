import React from 'react'
import PropTypes from 'prop-types'
import AvailablePlatforms from '../_available-platforms'
import AvailableOptions from '../_available-options'
import { Col, ContentWrapper, Descriptions, Row, Options, StyledText } from '../_markets-style'
import MarketInstruments from './_market_instruments'
import { SectionContainer } from 'components/containers'
import { Text } from 'components/elements'
import { localize, Localize } from 'components/localization'

const DigitalOptions = ({ market_name, options, market_content }) => (
    <SectionContainer padding="4rem 0 8rem">
        <ContentWrapper>
            <Descriptions>
                <StyledText align="center">
                    <Localize
                        translate_text="Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options on {{market_name}}."
                        values={{ market_name }}
                    />
                </StyledText>
                <AvailablePlatforms dtrader dbot smarttrader tablet_direction="column" />
            </Descriptions>
            <StyledText weight="bold" mt="2.4rem">
                <Localize
                    translate_text="Option trades available on {{market_name}}"
                    values={{ market_name }}
                />
            </StyledText>
            <Options>
                {options.map((option, index) => (
                    <Row key={index}>
                        {option[index].map((content, index) => (
                            <Col key={index}>
                                <AvailableOptions
                                    title={content.title}
                                    svg={content.RiseFall}
                                    content={content.text}
                                />
                            </Col>
                        ))}
                    </Row>
                ))}
            </Options>
            <Text weight="bold" mt="2.4rem">
                {localize('Instruments available for options trading')}
            </Text>
            <MarketInstruments market_content={market_content} />
        </ContentWrapper>
    </SectionContainer>
)

DigitalOptions.propTypes = {
    market_content: PropTypes.object,
    market_name: PropTypes.string,
    options: PropTypes.object,
}

export default DigitalOptions
