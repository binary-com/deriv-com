import React from 'react'
import PropTypes from 'prop-types'
import AvailablePlatforms from '../helper/_available-platforms'
import AvailableOptions from '../helper/_available-options'
import {
    Col,
    ContentWrapper,
    Descriptions,
    OptionsRow,
    StyledText,
} from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments'
import { SectionContainer, Show } from 'components/containers'
import { Text } from 'components/elements'
import { localize, Localize } from 'components/localization'

const DigitalOptions = ({ market_name, options_list }) => (
    <SectionContainer padding="4rem 0 8rem">
        <ContentWrapper>
            <Descriptions>
                <StyledText font_size="16px" align="center">
                    <Localize
                        translate_text="Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options on {{market_name}}."
                        values={{ market_name }}
                    />
                </StyledText>
                <AvailablePlatforms dtrader dbot smarttrader tablet_direction="column" />
            </Descriptions>
            <StyledText font_size="16px" weight="bold" mt="4.0rem">
                <Localize
                    translate_text="Option trades available on {{market_name}}"
                    values={{ market_name }}
                />
            </StyledText>
            <Descriptions margin_top="24px">
                {options_list.options.map((option, index) => (
                    <OptionsRow wrap={option[0].wrap} key={index} is_first_child={!index}>
                        {option.map((content, idx) => (
                            <Col key={idx}>
                                <AvailableOptions content={content.text} {...content} />
                            </Col>
                        ))}
                    </OptionsRow>
                ))}
                <Show.Eu>
                    {options_list.eu_content?.map((text, index) => (
                        <Text key={index} mt="1.6rem" color="grey-5" size="var(--text-size-xs)">
                            {text}
                        </Text>
                    ))}
                </Show.Eu>
            </Descriptions>
            <Text weight="bold" mt="4.0rem">
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
