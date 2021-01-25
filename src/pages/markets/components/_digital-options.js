import React from 'react'
import PropTypes from 'prop-types'
import AvailablePlatforms from '../_available-platforms'
import AvailableOptions from '../_available-options'
import { Col, ContentWrapper, Descriptions, Row, Options, StyledText } from '../_markets-style'
import MarketInstruments from './_market_instruments'
import { SectionContainer } from 'components/containers'
import { Text } from 'components/elements'
import { localize, Localize } from 'components/localization'

const DigitalOptions = ({ market_name, options_list }) => (
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
                {options_list.options.map((option, index) => (
                    <Row key={index}>
                        {option.map((content, idx) => (
                            <Col key={idx}>
                                <AvailableOptions
                                    title={content.title}
                                    svg={content.svg}
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
            <MarketInstruments market_content={options_list.market_instruments} />
        </ContentWrapper>
    </SectionContainer>
)

DigitalOptions.propTypes = {
    market_content: PropTypes.object,
    market_name: PropTypes.string,
    options_list: PropTypes.object,
}

export default DigitalOptions
