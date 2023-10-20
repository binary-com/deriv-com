import React from 'react'
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
import type { Options } from '../../static/content/_digital-options'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'

type DigitalOptionsProps = {
    market_name: string
    market_type?: string
    options_list: Options
}

const DigitalOptions = ({ market_name, market_type, options_list }: DigitalOptionsProps) => {
    const what_to_show = market_name === 'forex' && market_type === 'basket-indices'

    return (
        <SectionContainer padding="4rem 0 8rem">
            <ContentWrapper>
                <Descriptions>
                    <StyledText font_size="16px" align="center">
                        <Localize translate_text="_t_Options trading allows for a range of payouts from correctly predicting market movements, without needing to buy an underlying asset._t_" />
                    </StyledText>
                    {what_to_show ? (
                        <AvailablePlatforms dmt5 derivx />
                    ) : (
                        <AvailablePlatforms dtrader dbot smarttrader tablet_direction="column" />
                    )}
                </Descriptions>
                <StyledText font_size="16px" weight="bold" mt="2.0rem">
                    <Localize
                        translate_text="_t_Options trades available on {{market_name}}_t_"
                        values={{ market_name }}
                    />
                </StyledText>
                <Descriptions margin_top="24px">
                    {options_list.options.map((option, index) => (
                        <OptionsRow wrap={option[0].wrap} key={index} is_first_child={!index}>
                            {option.map((content, idx) => (
                                <Col key={idx}>
                                    <AvailableOptions
                                        content={content?.text}
                                        content_components={content?.text_component}
                                        {...content}
                                    />
                                </Col>
                            ))}
                        </OptionsRow>
                    ))}
                </Descriptions>
                <Header as="h3" type="paragraph-1" weight="bold" mt="4.0rem">
                    <Localize translate_text="_t_Instruments available for options trading_t_" />
                </Header>
                <MarketInstruments market_content={options_list.market_instruments} />
            </ContentWrapper>
        </SectionContainer>
    )
}

export default DigitalOptions
